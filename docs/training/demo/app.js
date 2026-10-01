(function () {
  'use strict';
  const data = globalThis.EITF_DEMO_DATA;
  const byId = Object.fromEntries(data.fields.map(field => [field.id, field]));
  const documents = Object.fromEntries(data.documents.map(doc => [doc.id, doc]));
  const state = { title: '[Resource]: ', values: {}, example: null, view: 'card', document: 'intake' };
  data.fields.forEach(field => { state.values[field.id] = field.attributes.multiple ? [] : ''; });
  const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const present = value => Array.isArray(value) ? value.length > 0 : Boolean(String(value || '').trim());
  const answer = value => Array.isArray(value) ? value.join(', ') : String(value || '').trim();

  function documentTarget(href, sourcePath) {
    let path;
    try {
      const url = new URL(href, 'https://local.invalid/docs/training/' + sourcePath);
      path = url.pathname.replace('/ECHOES-ECCCH-TECHNICAL/integration-task-force/blob/main', '');
    } catch { return null; }
    if (path.endsWith('/.github/ISSUE_TEMPLATE/eitf-training.yml')) return 'card';
    return data.documents.find(doc => path === '/docs/training/' + doc.path)?.id || null;
  }

  function inline(text, sourcePath = 'README.md') {
    const tokens = [];
    const token = html => '\uE000' + (tokens.push(html) - 1) + '\uE001';
    let result = text.replace(/`([^`]+)`/g, (_, code) => token('<code>' + escape(code) + '</code>'));
    result = result.replace(/!?\[([^\]]+)\]\(([^\s)]+)\)/g, (match, label, href) => {
      if (match.startsWith('!')) return token('<span class="inactive-link">' + escape(label) + ' (image omitted)</span>');
      const target = documentTarget(href, sourcePath);
      if (target === 'card') return token('<a href="#card" data-view="card">' + escape(label) + '</a>');
      if (target) return token('<a href="#references" data-document="' + escape(target) + '">' + escape(label) + '</a>');
      return token('<span class="inactive-link" title="External reference: ' + escape(href) + '">' + escape(label) + '</span>');
    });
    result = escape(result).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/_([^_]+)_/g, '<em>$1</em>');
    return result.replace(/\uE000(\d+)\uE001/g, (_, index) => tokens[Number(index)]);
  }

  function markdown(text, sourcePath = 'README.md') {
    const lines = text.replace(/\r\n/g, '\n').split('\n');
    const output = [];
    const isTable = line => /^\|/.test(line);
    const separator = line => /^\|[\s:|\-]+\|\s*$/.test(line);
    const listMatch = line => line.match(/^\s*(-|\d+\.)\s+(.+)$/);
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) { i++; continue; }
      if (/^```/.test(line)) {
        const code = []; i++;
        while (i < lines.length && !/^```/.test(lines[i])) code.push(lines[i++]);
        output.push('<pre><code>' + escape(code.join('\n')) + '</code></pre>'); i++; continue;
      }
      const heading = line.match(/^(#{1,6}) (.+)$/);
      if (heading) { output.push('<h' + heading[1].length + '>' + inline(heading[2], sourcePath) + '</h' + heading[1].length + '>'); i++; continue; }
      if (/^---+$/.test(line.trim())) { output.push('<hr>'); i++; continue; }
      if (isTable(line) && separator(lines[i + 1] || '')) {
        const cells = row => row.trim().replace(/^\||\|$/g, '').split('|').map(cell => cell.trim());
        const headers = cells(line); i += 2;
        const rows = [];
        while (i < lines.length && isTable(lines[i])) rows.push(cells(lines[i++]));
        output.push('<div class="table-scroll"><table><thead><tr>' + headers.map(h => '<th scope="col">' + inline(h, sourcePath) + '</th>').join('') + '</tr></thead><tbody>' + rows.map(row => '<tr>' + row.map(cell => '<td>' + inline(cell, sourcePath) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>'); continue;
      }
      const list = listMatch(line);
      if (list) {
        const tag = list[1] === '-' ? 'ul' : 'ol'; const items = [];
        while (i < lines.length) {
          const item = listMatch(lines[i]);
          if (!item || (item[1] === '-' ? 'ul' : 'ol') !== tag) break;
          const task = item[2].match(/^\[([ xX])\] (.+)$/);
          items.push('<li>' + (task ? '<span class="task-box" aria-label="' + (task[1] === ' ' ? 'Unchecked' : 'Checked') + '">' + (task[1] === ' ' ? '☐' : '☑') + '</span>' + inline(task[2], sourcePath) : inline(item[2], sourcePath)) + '</li>'); i++;
        }
        output.push('<' + tag + '>' + items.join('') + '</' + tag + '>'); continue;
      }
      if (/^> /.test(line)) { output.push('<blockquote>' + inline(line.slice(2), sourcePath) + '</blockquote>'); i++; continue; }
      const paragraph = [line]; i++;
      while (i < lines.length && lines[i].trim() && !/^(#{1,6} |```|---+$|> |\|)/.test(lines[i]) && !listMatch(lines[i])) paragraph.push(lines[i++]);
      output.push('<p>' + inline(paragraph.join(' '), sourcePath) + '</p>');
    }
    return output.join('\n');
  }

  function issueBody() {
    return data.fields.map(field => '### ' + field.attributes.label + '\n\n' + (answer(state.values[field.id]) || '_No response_')).join('\n\n') + '\n';
  }

  function checks() {
    const missing = [];
    if (!state.title.replace(/^\[Resource\]:\s*/i, '').trim()) missing.push({ id: 'title', label: 'Issue title' });
    for (const field of data.fields) {
      if (field.validations.required && !present(state.values[field.id])) missing.push({ id: field.id, label: field.attributes.label });
    }
    const guidance = [];
    if (state.values.existing_resource === 'Yes' && !present(state.values.resource_url)) guidance.push({ id: 'resource_url', label: 'An existing resource needs a URL. GitHub leaves this conditional check to the curator.' });
    if (present(state.values.resource_url) && !/^https?:\/\/[^\s]+$/i.test(state.values.resource_url)) guidance.push({ id: 'resource_url', label: 'Check the resource URL: use an http:// or https:// link.' });
    const relationships = state.values.relationship_types || [];
    if (relationships.length > 1 && relationships.some(value => value.startsWith('General training'))) guidance.push({ id: 'relationship_types', label: 'Choose general training alone, or select the specific relationships that apply.' });
    const other = ['resource_type', 'delivery_formats', 'proficiency'].some(id => [].concat(state.values[id]).some(value => value === 'Other' || value === 'Mixed'));
    if (other) guidance.push({ id: 'notes', label: 'Other or Mixed was selected: make sure Notes explains the choice.' });
    return { missing, guidance };
  }

  function setValue(id, value) {
    if (id === 'title') { state.title = String(value); return; }
    const field = byId[id];
    if (!field) throw new Error('Unknown field: ' + id);
    if (field.attributes.multiple) {
      if (!Array.isArray(value) || value.some(v => !field.attributes.options.includes(v))) throw new Error('Choose valid options for ' + id);
      state.values[id] = [...new Set(value)];
    } else {
      if (typeof value !== 'string') throw new Error('Use text for ' + id);
      if (field.type === 'dropdown' && value !== '' && !field.attributes.options.includes(value)) throw new Error('Choose a valid option for ' + id);
      state.values[id] = value;
    }
  }

  function loadExample(id) {
    const example = data.examples.find(item => item.id === id);
    if (!example) throw new Error('Unknown example');
    state.title = example.title;
    state.values = JSON.parse(JSON.stringify(example.values));
    state.example = id;
  }

  function clear() {
    state.title = '[Resource]: ';
    data.fields.forEach(field => { state.values[field.id] = field.attributes.multiple ? [] : ''; });
    state.example = null;
  }

  const core = { issueBody, checks, setValue, loadExample, clear, markdown, getState: () => JSON.parse(JSON.stringify(state)) };
  globalThis.EITF_DEMO = core;
  if (typeof document === 'undefined') return;

  const $ = selector => document.querySelector(selector);
  let toastTimer;
  function notify(message) {
    clearTimeout(toastTimer); const toast = $('#live-message');
    toast.textContent = message; toast.hidden = false;
    toastTimer = setTimeout(() => { toast.hidden = true; }, 4000);
  }

  function fieldHTML(field) {
    const a = field.attributes; const id = field.id;
    const label = escape(a.label) + (field.validations.required ? '<span class="required" aria-label="required">*</span>' : '');
    const help = '<p class="field-help" id="help-' + id + '">' + inline(a.description || '') + '</p>';
    if (a.multiple) return '<fieldset class="field" id="field-' + id + '" aria-describedby="help-' + id + '"><legend>' + label + '</legend>' + help + '<div class="multi-options">' + a.options.map((option, index) => '<label class="multi-option" for="input-' + id + '-' + index + '"><input type="checkbox" id="input-' + id + '-' + index + '" data-field="' + id + '" value="' + escape(option) + '"><span>' + escape(option) + '</span></label>').join('') + '</div></fieldset>';
    const attrs = 'id="input-' + id + '" data-field="' + id + '" aria-describedby="help-' + id + '"' + (field.validations.required ? ' required' : '');
    let control;
    if (field.type === 'dropdown') control = '<select ' + attrs + '><option value="">Choose an option…</option>' + a.options.map(option => '<option value="' + escape(option) + '">' + escape(option) + '</option>').join('') + '</select>';
    else if (field.type === 'textarea') control = '<textarea ' + attrs + ' rows="4" placeholder="' + escape(a.placeholder || '') + '"></textarea>';
    else control = '<input type="' + (id === 'resource_url' ? 'url' : 'text') + '" ' + attrs + ' placeholder="' + escape(a.placeholder || '') + '">';
    return '<div class="field" id="field-' + id + '"><label for="input-' + id + '">' + label + '</label>' + help + control + '</div>';
  }

  function mount() {
    $('#section-links').innerHTML = data.sections.map(section => '<a href="#section-' + section.number + '"><span class="section-index">' + section.number + '</span>' + escape(section.title) + '</a>').join('');
    $('#candidate-form').innerHTML = data.sections.map(section => '<section class="form-section" id="section-' + section.number + '" aria-labelledby="heading-' + section.number + '"><div class="section-heading"><span class="section-number">0' + section.number + '</span><h2 id="heading-' + section.number + '">' + escape(section.title) + '</h2></div>' + (section.description ? '<div class="section-description markdown">' + markdown(section.description) + '</div>' : '') + section.fields.map(id => fieldHTML(byId[id])).join('') + '</section>').join('');
    $('#document-links').innerHTML = data.documents.map(doc => '<button type="button" data-document="' + doc.id + '">' + escape(doc.title) + '</button>').join('');
    reflectValues(); renderDocument();
  }

  function reflectValues() {
    $('#issue-title').value = state.title;
    document.querySelectorAll('[data-field]').forEach(control => {
      const value = state.values[control.dataset.field];
      if (control.type === 'checkbox') control.checked = value.includes(control.value);
      else control.value = value;
    });
    const notice = $('#example-notice'); notice.hidden = !state.example;
    notice.textContent = state.example ? 'Fictional ' + state.example.replace('-', ' ') + ' example loaded. You can edit it; the sample resource, contacts and policy claims are illustrative, and no assessment has occurred.' : '';
    update();
  }

  function update() {
    const required = data.fields.filter(field => field.validations.required);
    const completed = required.filter(field => present(state.values[field.id])).length;
    const result = checks();
    $('#completion').textContent = completed + ' of ' + required.length + ' required answers';
    $('#remaining').textContent = result.missing.length ? result.missing.length + ' required item' + (result.missing.length === 1 ? '' : 's') + ' still empty' : 'Required answers supplied';
    $('#progress-fill').style.width = (completed / required.length * 100) + '%';
    const body = issueBody();
    $('#issue-markdown').value = body;
    $('#rendered-title').textContent = state.title.trim() || 'Untitled training resource';
    $('#rendered-issue').innerHTML = markdown(body);
    const list = values => '<ul>' + values.map(item => '<li><button type="button" data-focus-field="' + item.id + '">' + escape(item.label) + '</button></li>').join('') + '</ul>';
    $('#completeness-panel').innerHTML = (result.missing.length ? '<details open><summary>' + result.missing.length + ' required item' + (result.missing.length === 1 ? '' : 's') + ' to complete</summary>' + list(result.missing) + '</details>' : '<strong class="good">All required form answers are supplied.</strong>') + (result.guidance.length ? '<details open><summary class="warning">Curator checks & guidance</summary>' + list(result.guidance) + '</details>' : '') + '<p class="field-help" style="margin:.7rem 0 0">Completeness is not approval. The proposed level remains a hypothesis; provisional and confirmed levels are assigned later.</p>';
  }

  function showView(view) {
    if (!['card', 'preview', 'references'].includes(view)) return;
    state.view = view;
    document.querySelectorAll('.view').forEach(el => { el.hidden = el.id !== view + '-view'; });
    document.querySelectorAll('.tabs [data-view]').forEach(button => {
      if (button.dataset.view === view) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current');
    });
    if (view === 'preview') update();
    window.scrollTo({ top: 0, behavior: 'instant' });
    $('#' + view + '-view h1').setAttribute('tabindex', '-1');
    $('#' + view + '-view h1').focus({ preventScroll: true });
  }

  function renderDocument() {
    const doc = documents[state.document];
    $('#document-name').textContent = doc.path;
    $('#document-body').innerHTML = markdown(doc.markdown, doc.path);
    document.querySelectorAll('#document-links button').forEach(button => {
      if (button.dataset.document === doc.id) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current');
    });
  }

  async function copy(text) {
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text); notify('Markdown copied.');
    } catch {
      const temporary = document.createElement('textarea'); temporary.value = text;
      temporary.style.position = 'fixed'; temporary.style.left = '-10000px'; document.body.append(temporary); temporary.select();
      const copied = document.execCommand('copy'); temporary.remove();
      notify(copied ? 'Markdown copied.' : 'Clipboard unavailable. Select and copy the Markdown text in the issue preview.');
    }
  }

  document.addEventListener('input', event => {
    const control = event.target;
    if (control.id === 'issue-title') setValue('title', control.value);
    else if (control.dataset.field) {
      const id = control.dataset.field;
      const value = control.type === 'checkbox' ? Array.from(document.querySelectorAll('[data-field="' + id + '"]:checked')).map(el => el.value) : control.value;
      setValue(id, value);
    } else return;
    update();
  });
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-view],[data-open-preview],[data-document],[data-focus-field]');
    if (!button) return;
    event.preventDefault();
    if (button.dataset.view) showView(button.dataset.view);
    else if (button.hasAttribute('data-open-preview')) showView('preview');
    else if (button.dataset.document) { state.document = button.dataset.document; renderDocument(); showView('references'); }
    else {
      const id = button.dataset.focusField; showView('card');
      const control = id === 'title' ? $('#issue-title') : document.querySelector('[data-field="' + id + '"]');
      control.focus(); control.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  });
  $('#candidate-form').addEventListener('submit', event => { event.preventDefault(); showView('preview'); });
  $('#load-example').addEventListener('click', () => {
    const id = $('#example-picker').value;
    if (!id) { notify('Choose a Level 1, 2 or 3 example first.'); $('#example-picker').focus(); return; }
    loadExample(id); reflectValues(); notify('Fictional example loaded. It replaces the previous draft.');
  });
  $('#clear-card').addEventListener('click', () => { clear(); $('#example-picker').value = ''; reflectValues(); notify('Blank card ready. Previous answers cleared.'); });
  $('#copy-issue').addEventListener('click', () => copy(issueBody()));
  $('#copy-document').addEventListener('click', () => copy(documents[state.document].markdown));
  core.showView = showView;
  core.refresh = reflectValues;
  mount();

  // Optional page tools share the visible demo's actions and never contact GitHub.
  const context = document.modelContext;
  if (context?.registerTool) {
    const lifecycle = new AbortController();
    const demoTools = [
      {
        name: 'load_training_example',
        title: 'Load a fictional training example',
        description: 'Replace the local draft with a fictional Level 1, 2 or 3 example and open the Candidate Card. Does not submit or assess anything.',
        inputSchema: { type: 'object', properties: { example: { type: 'string', enum: data.examples.map(item => item.id) } }, required: ['example'], additionalProperties: false },
        annotations: { readOnlyHint: false, untrustedContentHint: false },
        execute(input) {
          if (!input || Object.keys(input).some(key => key !== 'example') || !data.examples.some(item => item.id === input.example)) throw new Error('Choose level-1, level-2 or level-3.');
          loadExample(input.example);
          $('#example-picker').value = input.example;
          reflectValues(); showView('card');
          return { title: state.title, example: state.example, ...checks() };
        }
      },
      {
        name: 'preview_training_issue',
        title: 'Preview the local training issue',
        description: 'Open the issue preview and return the current title, answer Markdown and checks. Does not create a GitHub issue or record approval.',
        inputSchema: { type: 'object', properties: {}, additionalProperties: false },
        annotations: { readOnlyHint: false, untrustedContentHint: true },
        execute(input) {
          if (!input || typeof input !== 'object' || Array.isArray(input) || Object.keys(input).length) throw new Error('Provide an empty object.');
          showView('preview');
          return { title: state.title, markdown: issueBody(), ...checks() };
        }
      }
    ];
    demoTools.forEach(tool => {
      try { Promise.resolve(context.registerTool(tool, { signal: lifecycle.signal })).catch(() => {}); }
      catch { /* Unsupported registration must not affect the local form. */ }
    });
    window.addEventListener('pagehide', () => lifecycle.abort(), { once: true });
  }
}());
