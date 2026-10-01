# Training setup and pilot checklist

This runbook adds the [training workflow](README.md) to the existing [EITF GitHub Project](https://github.com/orgs/ECHOES-ECCCH-TECHNICAL/projects/2). Keep the three technical issue forms, existing fields and views, and existing automation settings unchanged. Add only the training form, label, fields and views described here; curators manage training records. The repository files alone do not create live Project configuration. These administrative additions are pending until an EITF Project administrator performs them.

## 1. Prepare the rollout

- [ ] Review the Candidate Card, [reviewer templates](maintainers.md#review-templates) and [annex mapping](annex-mapping.md) with WP5 and EITF. Resolve any missing information before inviting pilot contributors.
- [ ] Designate a WP5 curator, WP5 Task Lead and EITF liaison for the pilot. Confirm actual names and access; the examples do not assign responsibilities to real people.
- [ ] Inspect and record existing Project fields, views, workflow filters and access settings to check compatibility. Preserve that configuration. The September 2026 audit could read views and fields but could not verify workflow settings under its read-only Project role.
- [ ] Make the reviewed forms and documentation available on the repository's default branch through the agreed release process. Local branch files do not install a live issue form. The form's help links target `main` for that eventual release.
- [ ] Create the repository label `training`, with description `Training resource / Training Integration Unit (TIU), tracked through the D5.2 lifecycle`. Keep the existing `EITF resource` label. GitHub only applies template labels that already exist.

Only the new training form uses `projects: ["ECHOES-ECCCH-TECHNICAL/2"]`; the three existing technical forms retain their original configuration. Template-based Project assignment depends on the submitter's Project permissions. Curators verify membership and add training issues manually when needed; a separate training-only auto-add rule is optional as described below. Form answers become Markdown; they do not populate custom Project fields. [GitHub issue-form documentation](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms).

## 2. Configure the Project index

Reuse **Assignees**, **Parent issue** and **EITF Integration cycle**. Keep existing technical **Status**, **Integration steps**, **Cloud Components**, **start date** and **end date** fields unchanged. Training has its own lifecycle and curricular decisions; the existing technical fields do not drive them.

Create each field only if it is absent. If an identically named field already exists, use it only when its type and options already match. Record any naming or type conflict for a separate decision before enabling that training field; do not rename or change an existing field as part of this setup.

| Field | Type | Exact options / meaning |
| --- | --- | --- |
| Training status | Single select | Candidate; In development; Under validation; Active; Under review; Updated; Deprecated; Archived |
| Provisional curricular level | Single select | Level 1; Level 2; Level 3. The intake assessor's recommendation; leave empty before assessment. |
| Confirmed curricular level | Single select | Level 1; Level 2; Level 3. The level established by the applicable listing or validation decision; leave empty until then. |
| Next training review | Date | Next relevance or curricular review date. Clear when Archived. |

The submitter's proposed level stays in the Candidate Card. Do not prefill provisional or confirmed levels from that proposal. Curators set Training status to Candidate after checking a new card and update these fields whenever they update the [current record](templates/current-record.md) in the issue body.

Level 1 has no EITF Integration cycle. For Levels 2–3, the existing cycle field identifies the upcoming planned assessment/review cycle; completed cycles remain in dated review comments. Use the actual configured cycles and dates. Do not create a separate training iteration calendar or duplicate these cycles as milestones.

### Native auto-add and retention

- [ ] Inspect the Project's **Workflows** without changing them. If an enabled rule already adds training issues, use its existing behaviour.
- [ ] If coverage is missing, use curator-led manual addition. Optionally add a separate native rule for this repository filtered by `is:issue label:training` if a workflow slot is available. Do not broaden, replace or repurpose an existing rule to make room for it.
- [ ] Do not add custom Actions, tokens, field synchronisation or reminder services. A curator still verifies parent placement, ownership and board indexing.
- [ ] Inspect status/closure and archive workflows for effects on training records. Check that a TIU becoming Active, or its child technical IU becoming Done/closed, cannot close or remove the training record. Do not edit an existing workflow or add exclusions to it as part of training setup. Keep archived training records as visible Project items in the complete training register where the existing configuration permits this.
- [ ] Explicitly add the agreed existing pilot records to Project 2. Turning on auto-add does not backfill existing matching issues automatically. [GitHub auto-add documentation](https://docs.github.com/en/issues/planning-and-tracking-with-projects/automating-your-project/adding-items-automatically).

If an existing workflow conflicts with the training lifecycle or retention requirements, record the conflict and flag it for a separate decision before enabling the affected training behaviour. Preserve the technical setup; this runbook does not authorise changing it. The training issue and repository search remain the authoritative record while that compatibility decision is pending.

## 3. Create the three training views

Use the exact field names above. GitHub derives their filter names with hyphens. Confirm each filter in the Project UI against pilot records before saving. Multiple values for one field are OR alternatives; different field filters are combined with AND. [GitHub Project filtering](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).

| View | Filter | Layout and fields |
| --- | --- | --- |
| Training resources | `label:training` | Table, grouped by Parent issue. Show Title, Assignees, Training status, Provisional curricular level, Confirmed curricular level, Next training review and EITF Integration cycle. Include closed/Archived records; do not add `is:open`. |
| Training workflow | `label:training -training-status:Archived` | Board, grouped by Training status. Show owner, both curricular levels, next review and cycle on cards. Keep the empty-status group visible for curator triage. |
| Training reviews | `label:training confirmed-curricular-level:"Level 2","Level 3" training-status:Active,"Under review",Updated` | Table, sorted by Next training review ascending. Show Title, Assignees, confirmed level, Training status, next review and EITF Integration cycle. Keep missing dates visible. |

Do not restrict Training reviews to the current cycle or future dates: that would hide overdue work. Curators inspect empty review dates and overdue dates first. Level 1 annual relevance checks are found in Training resources using the level and date fields; they are not curricular cycle reviews. Candidates and initial validation appear in Training workflow.

Retain existing views and their filters. The `EITF resource` label keeps open training records in **all resources**, while native parent relationships make them visible beneath the contributing project. Do not add the `EITF Integration Unit` label to a training Resource to make it appear in the technical IU view.

Add the three view links to the [contributor guide](README.md) and [curator guide](maintainers.md) once their real URLs exist. Keep the [repository training search](https://github.com/ECHOES-ECCCH-TECHNICAL/integration-task-force/issues?q=is%3Aissue%20label%3Atraining) alongside them. Do not invent view numbers or treat an inaccessible view as the only route to a record.

## 4. Pilot and verify access

Use agreed real resources for the pilot, with owner-supplied facts. The [three examples](README.md#worked-examples) illustrate completion but are not records to import. UNICHE Academy [#66](https://github.com/ECHOES-ECCCH-TECHNICAL/integration-task-force/issues/66) is a platform resource: retain it and link any separately maintained course to it; do not automatically relabel it as a fully described TIU.

| Case | Evidence to collect |
| --- | --- |
| External Level 1 reference | Complete Card, real provider and resource URL, light screening and actual listing; annual relevance date; no cycle or full validation. |
| Sister-project Level 2 course | Real project parent; complete Card; intake and full validation; appropriate pathway and discovery evidence; shared maintenance agreement; next review in two quarterly cycles by default. |
| ECHOES Level 3 resource about a component | Separate teaching/operational relationships; WP5 and applicable technical approval; version/PID and publication evidence; each-cycle and component-change maintenance. |

Test all three roles with their actual permissions:

- [ ] A contributor can locate the correct form, submit a completed card, edit their issue and read reviewer comments. Use the contributor guide without verbal coaching and record any point requiring help.
- [ ] A contributor with repository access but without Project write permission still has their issue added to the Project and can navigate by issue links. Verify Project read access separately; the issue-list fallback still requires repository access.
- [ ] A curator can establish the native parent, assign the owner or liaison, post decisions, edit the current summary and update the four custom fields and cycle.
- [ ] A liaison can register a card for an external owner while preserving that owner's identity and contribution. Do not require the external owner to have a GitHub account.

## 5. Acceptance checks

- [ ] The new training form renders correctly after installation. Required inputs, unselected dropdowns and multi-select choices behave as described. Existing-resource URLs and explanatory answers for Other/Mixed are checked by the curator.
- [ ] Every Annex 1 information item and every Annex 2–3 criterion is covered by the [crosswalk](annex-mapping.md). Candidate Cards describe actual or plausible planned arrangements; `None` is not used to bypass a necessary requirement.
- [ ] A new submission yields one Resource/TIU issue with both labels, the correct native parent, the correct Project, an accountable owner/liaison and Candidate status.
- [ ] Proposed, provisional and confirmed levels are distinguishable; an initial failed assessment does not produce a confirmed level.
- [ ] Existing material can skip artificial development; a deferred intake remains Candidate; minor revisions stay visible until resolved.
- [ ] A teaches/about relationship does not automatically create a technical IU. Actual operational integration has a separately scoped technical IU when needed.
- [ ] Level 1 uses its lighter listing route, remains outside integration cycles and receives only a relevance/access check.
- [ ] Level 2–3 Active requires the applicable approval, actual publication and curricular/discovery evidence. Outstanding SEP/Knowledge Base work is explicitly pending with an owner; it is not reported as delivered.
- [ ] Updates and level changes preserve earlier versions and decisions. Review views show overdue and missing-date records, including records assigned to earlier cycles.
- [ ] Closing a technical IU leaves its Active training parent open. Deprecation records replacement/listing changes; Archived closes the issue while preserving the Project item and history in Training resources.
- [ ] Issue summaries and Project fields agree after each sampled decision. Missing or incorrect board values are repaired from the issue record by the curator.
- [ ] The three existing issue forms and their configuration match the pre-training version. Existing technical fields, views and workflow settings are unchanged; training additions do not rewrite existing issues or technical behaviour.

Record observed completion time, points of confusion and follow-up effort during the pilot. WP5 and EITF review those findings before wider adoption; fix the wording or workflow where contributors needed help. Continue oversight through existing meetings and cycles, without a separate reminder service.

## If the pilot needs to pause

Record the reason and responsible person. Stop inviting new training submissions and, if needed, temporarily withdraw the new form through the normal repository change process. Preserve existing TIU issues, labels, assessment comments and Project fields; do not delete records or hide outstanding reviews. Correct the relevant documentation/configuration and repeat the affected acceptance checks before restarting.
