# Local training demonstration

Open [the demonstration](dist/index.html) in a browser. It is a single self-contained HTML file: it also works offline by opening the file directly, with no server or GitHub account. Use Chrome for the meeting. No resources are fetched, no form is submitted, and edits remain only in the current tab. Refreshing starts with a blank card.

## Walk-through with Laure

1. Start with **Candidate Card** to show the seven sections and required information. This uses the actual YAML form's field labels, help text, options and required markers.
2. Choose **Level 2 · Curricular alignment**, then **Load example**. This replaces the current draft with the fictional planned module. An existing-resource URL is legitimately empty because the material does not exist yet.
3. Edit a learning outcome and choose **Preview issue**. Compare the readable issue with the exact generated answer Markdown. **Copy body** copies only the issue body; the issue title is separate.
4. Compare the Level 1 and Level 3 examples. Loading an example replaces the draft. Level 1 demonstrates an external reference; Level 3 demonstrates introductory learning about OCRA without operational service integration. All examples remain proposals with no assessment or confirmed level.
5. Open **Review & guidance** to show the intake, Level 1 listing, validation, maintenance and current-record templates. These are the actual source documents, copied into the same issue later by curators. The examples and guides are available there too.

The demo is a local approximation, not GitHub's own form renderer. Multi-select choices use checkboxes for accessibility. Required-answer checks are separate from curator guidance: for example, the existing-resource URL condition is checked locally but is not enforced conditionally by the GitHub YAML form. Completeness does not imply pedagogical approval. The preview does not simulate parent assignment, account permissions, Project fields, automation or a live issue lifecycle.

Document links within this training pack open locally in the demo. External references and fictional resource links are displayed without navigation or fetching. This keeps the meeting demonstration self-contained.

## Rebuild after changing the proposal

From the repository root:

```sh
python3 docs/training/demo/build.py
```

The builder uses Python 3 and Ruby's standard YAML parser. It reads the current Candidate Card, worked examples and reference documents, then embeds them with the interface into `dist/index.html`. It does not edit the original form, any technical templates, Git history, or a remote repository. Rebuild after source changes, then refresh the browser tab. No npm dependencies or external assets are used.

For a localhost URL instead of opening the file directly:

```sh
python3 -m http.server 8765 --bind 127.0.0.1 --directory docs/training/demo/dist
```

Open `http://127.0.0.1:8765/`. Stop that optional server with Ctrl+C when finished; the HTML file continues to work without it.
