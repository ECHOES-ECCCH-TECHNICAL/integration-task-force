# Curating and reviewing training resources

This guide implements the training lifecycle in [ECHOES D5.2](https://zenodo.org/records/20442259) within the existing EITF resource hierarchy. Start with the [Project setup and pilot runbook](setup.md) before enabling the workflow. Give contributors the [Candidate Card guide](README.md); use the [annex mapping](annex-mapping.md) to check coverage of the source instruments.

## Roles and records

| Role | Responsibility |
| --- | --- |
| **TIU owner** | Defines and maintains audience, learning outcomes, material, metadata and identifiers; reports changes and incorporates feedback. May be internal or external to the consortium. |
| **WP5 curator** | Checks registration, coordinates assessment, records current information and maintains the Project fields. Can register contributions supplied through the EITF contact route. |
| **WP5 Task Leads** | Oversee intake, lead curricular reviews and validate full readiness; confirm Level 2 and Level 3 assignments with the required input. |
| **EITF liaison** | Coordinates shared integration cycles, identifies relevant component changes and advises on structural integration implications. |
| **Relevant component teams and WP Leads** | Assess technical alignment where required and communicate changes affecting the training resource. |
| **WP4 liaison** | Contributes identified needs and community feedback. |
| **WP9 liaison** | Supports proportionate evaluation indicators and their interpretation in line with the wider evaluation framework. |

Assign the issue to the TIU owner when they have GitHub access. If they do not, assign the responsible liaison or curator and identify both the actual owner and the GitHub contact in the issue. A curator's assignment never silently transfers resource maintenance to them.

### One authoritative issue

The training Resource issue is the TIU and the authoritative record. Place the [current-record summary](templates/current-record.md) at the top of its description, above the complete Candidate Card. Record assessments and decisions as dated comments using the templates below; link the latest decision from the summary. Preserve historical comments when later decisions supersede them.

Whenever a decision changes tracking information, the curator updates the current summary and matching Project fields as one recording task. If a field cannot be updated because of access problems, keep the issue correct, add a visible note naming the field that needs synchronising, and request the Project administrator's help. Do not leave a board-only decision.

| Project field | Use |
| --- | --- |
| **Training status** | Candidate; In development; Under validation; Active; Under review; Updated; Deprecated; Archived. |
| **Provisional curricular level** | Level 1, Level 2 or Level 3 assigned at intake. |
| **Confirmed curricular level** | Level 1, Level 2 or Level 3 following the applicable approval. Leave unset before confirmation. |
| **Next training review** | Date of the next agreed review or relevance check. |
| **Assignees** | Owner with access, or named liaison/curator acting for an external owner. |
| **Parent issue** | Contributing project; ECHOES sponsorship for independent external contributions. |
| **EITF Integration cycle** | Reuse the existing shared cycle for scheduled Level 2–3 work. Leave unset for Level 1. |

The Candidate Card retains the contributor's **proposed** level. The provisional field records the intake decision; the confirmed field records the applicable approval. Preserve earlier assignments and the reason for later changes in dated comments. These fields describe curricular integration, independently of learner proficiency and technical integration levels.

## Review templates

- [Current record](templates/current-record.md): insert this summary at the top of the existing issue description and keep it current.
- [Intake assessment](templates/intake.md): copy the applicable full assessment or basic Level 1 listing section into a comment.
- [Validation](templates/validation.md): copy the assessment into a comment when Level 2–3 material is ready.
- [Review and maintenance](templates/review.md): record use, feedback, updates, reviews or retirement in a comment.

These are reusable Markdown sections, not additional issue forms. Replace the prompts, retain applicable evidence and preserve the dated decision history on the TIU.

## 1. Register and assess

1. Search for an existing record before creating one. Keep revisions, translations and deliveries on the existing TIU unless independent ownership and assessment justify another record. Keep platform resources distinct from their learning materials.
2. Check that the complete Candidate Card identifies the actual provider, a provisional owner and contact, an existing resource URL where applicable, and the proposed hosting, licensing and maintenance arrangements. “Planned” must include a described arrangement and responsible person; record gaps as assessment conditions.
3. Apply `EITF resource` and `training`, retain the `[Resource]:` prefix, and set the contributing project as the actual GitHub parent. A project number written in the form does not set the parent. Sponsor independent external contributions under [ECHOES #85](https://github.com/ECHOES-ECCCH-TECHNICAL/integration-task-force/issues/85) when no contributing project record exists, retaining the provider's provenance.
4. Ensure the issue belongs to [EITF Project 2](https://github.com/orgs/ECHOES-ECCCH-TECHNICAL/projects/2), assign the owner or liaison, insert the current summary, and set **Candidate**. Record the issue number as the tracking identifier; resource DOIs and other persistent identifiers remain separate.
5. Ask WP5 to complete the [intake assessment](templates/intake.md). Record the exact outcome, provisional level, assessor, date and evidence. For every condition, name the responsible person and the point by which it must be resolved; add a due date when agreed.
6. For an accepted Level 2–3 proposal, set **In development**, or **Under validation** when an existing resource is already ready for assessment. An accepted-with-conditions proposal can proceed only within the recorded conditions. A deferred proposal remains **Candidate** until revised and reassessed.

Resource relationships must distinguish **teaches/about**, **operationally uses**, and **belongs to a curriculum/pathway**. General training can explicitly have no component link. Create a technical IU child only for concrete operational integration work, using the existing IU template and conventions; keep curricular and content work on the TIU.

### Level 1: screen and list

Level 1 still requires a complete Candidate Card. Use **B. Basic listing assessment — Level 1** in the intake template to record relevance, access, provider and ownership screening. Do not require the full Annex 2 assessment or Annex 3 validation, and do not include the record in integration-cycle monitoring.

After favourable screening, record **Provisional curricular level: Level 1**. Once the actual inventory or discovery listing exists, record **Confirmed curricular level: Level 1**, its listing link and the next relevance-check date. Set **Active**, explicitly described in the current summary as **listed external reference**. If the listing is pending, remain **Candidate**, leave the confirmed field unset and name who will arrange it. The external provider retains maintenance responsibility. Default the next relevance check to one year after listing or the last check.

## 2. Develop, validate and activate Levels 2–3

The TIU owner develops the material and supplies the version or draft URL for review. Track outstanding conditions on the issue. Resource hosting can remain with a suitable provider; DARIAH-Campus is an available route, with no automatic migration implied.

Set **Under validation** and use the [validation template](templates/validation.md) to assess all Annex 3 criteria against the developed resource. Record evidence, version, assessor and date; use “not applicable” only with a reason. WP5 Task Leads lead approval and confirm Level 2–3 assignments. Obtain relevant component-team input for technical dependencies and alignment; teaching about a component can also require an accuracy check without creating a technical IU.

| Validation outcome | Recording and next action |
| --- | --- |
| **approved for publication and integration** | Record the approved level and decision, then complete the publication and integration gate below. |
| **approved with minor revisions** | Keep **Under validation**; list required changes and owners. Record review of the fixes before proceeding to activation. |
| **requires revision before publication** | Return to **In development** when substantive work is needed; retain the assessment and require another validation decision. |
| **not approved** | Record the reasons and agreed next action. Rework remains **In development**; an abandoned proposal is **Archived** with a closure decision. Do not assign a new confirmed level on a failed validation. |

Before setting **Active**, record all of the following in the issue:

- Approval and resolution of any publication-blocking conditions, with a link to the decision and a confirmed curricular level.
- Working publication URL, reviewed version, resource licence, appropriate metadata and persistent identifier, and accessibility evidence from validation.
- Explicit owner, hosting and maintenance arrangements, including coordination with component changes for Level 3.
- Actual curricular/pathway placement and an available discovery route appropriate to the agreed level, supported by working links. Identify incomplete Single Entry Point (SEP) or Knowledge Base (KB) work by name, owner and dependency; do not treat a planned connection as completed integration. Pending SEP/KB infrastructure does not by itself block activation when the agreed curricular placement and an available discovery route are evidenced and the limitation is recorded. If the available route or another activation requirement is missing, keep **Under validation** and name what remains.
- Next review date and the relevant existing integration cycle.

Publication and discovery happen in the relevant external systems. The issue records verified results and pending work; these templates do not publish resources, establish semantic KB connections or create SEP entries. If a component needs operational integration work, reference the associated technical IU and its evidence.

## 3. Review, update and maintain

Keep published, active TIUs open. Completion of a technical IU does not close its parent training Resource issue. Deliveries, revisions and translations are updates to the same record unless their ownership and review become independent.

| Confirmed level | Default review schedule | Cycle field |
| --- | --- | --- |
| **Level 1** | Annual relevance and access check; also act on reported problems. | Unset. |
| **Level 2** | Every two quarterly integration cycles; also review material changes that affect alignment. | Next shared cycle in which review is due. |
| **Level 3** | Every integration cycle and when relevant components change. | Next shared review cycle. |

These intervals are local implementation defaults for the pilot. D5.2 requires periodic review for Level 2, review every cycle for Level 3, and exclusion of Level 1 from structured cycle monitoring. WP5 may agree a different periodic interval and record the rationale and next date. Use actual shared cycle dates; do not create separate training cycles.

At each cycle, use **Training reviews** to find due, overdue and missing-date Level 2–3 records, including **Active**, **Under review** and **Updated**. Review the **Training workflow** board for new candidates, development and unresolved validation conditions. Check Level 1 dates separately in **Training resources**. Direct [training issue search](https://github.com/ECHOES-ECCCH-TECHNICAL/integration-task-force/issues?q=is%3Aissue%20label%3Atraining) remains available when board access is unavailable.

Use the [review and maintenance template](templates/review.md) for delivery, evaluation, maintenance and relevance checks. Record the reviewed resource version, use or delivery, feedback, proportionate aggregate indicators, component changes, maintenance responsibility, decisions and next review. WP4 supports community feedback and WP9 supports appropriate indicators; avoid adding learner-level tracking to EITF.

For Levels 2–3, set **Under review** while the review is taking place. A review with no required change returns to **Active** with a new date. Revised material becomes **Updated**; record the new version, changes and required checks. Return to **Active** once those checks and any affected validation/publication requirements are satisfied. Substantial changes can return the TIU to **In development** or **Under validation**. Keep the prior decision history and the current limitation visible throughout.

A level change requires a recorded decision and evidence against the new level's requirements. WP5 Task Leads confirm a new Level 2 or Level 3 assignment; a proposal to upgrade does not overwrite the current confirmed level. On downgrade to Level 1, remove the cycle assignment and schedule a relevance check. Update the current summary, confirmed field, next date and related listings after the decision; retain the original intake hypothesis and provisional decision.

## 4. Deprecate or archive

Use the review template to record the decision, rationale, date, responsible person and replacement resource if available. **Deprecated** means no longer recommended but still accessible for reference; leave the issue open while retirement work remains. Update the relevant curricular pathways and discovery listings, or record the responsible owner and pending action if another team must do so.

Set **Archived** and close the issue when it is removed from active use and no longer maintained, with the retirement actions completed or explicitly handed over. Clear future review and integration-cycle fields when no review is planned. Preserve the issue, decisions and Project item in the **Training resources** register. The training status **Archived** is a lifecycle value, not an instruction to use GitHub Project's archive operation, which would hide the record from that register.

## Status reference

| Training status | Meaning in this workflow |
| --- | --- |
| **Candidate** | Defined through the Candidate Card; awaiting or undergoing intake, revision of the proposal, or Level 1 listing. |
| **In development** | Material is being developed or substantially revised after intake. |
| **Under validation** | Developed material is under assessment, minor revisions remain, or approved material is awaiting the activation gate. |
| **Active** | Validated, published and integrated at Level 2–3; at Level 1, a listed external reference after screening. |
| **Under review** | A Level 2–3 resource is being reviewed within an integration cycle or following a change. |
| **Updated** | Revised following review or evaluation, with the revision and required checks recorded before return to Active. |
| **Deprecated** | No longer recommended for use; remains accessible as a reference. |
| **Archived** | Removed from active use and no longer maintained; issue closed and history retained. |

These statuses use Annex 4's eight names. The Level 1 listing interpretation, pending-activation handling and review intervals are explicit operational conventions for this GitHub implementation. No additional status, custom synchronisation service or automatic reminder workflow is required.
