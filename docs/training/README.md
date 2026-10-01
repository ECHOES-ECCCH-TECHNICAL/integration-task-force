# Contributing training resources

Use EITF to propose a training resource, agree how it fits the ECHOES curriculum, and keep its information current. Your resource can already exist or be planned, and you can contribute from an ECHOES work package or partner, a sister project, a cascading grant project, or an external organisation. Training materials remain on their hosting platform; the GitHub issue tracks the decisions and maintenance work.

## Start here

1. Search the [training resource register](https://github.com/ECHOES-ECCCH-TECHNICAL/integration-task-force/issues?q=is%3Aissue%20label%3Atraining) for your resource. If it already has an issue, update that issue.
2. Find the [project issue](https://github.com/orgs/ECHOES-ECCCH-TECHNICAL/projects/2/views/2) for the contributing project and note its issue number. If you cannot use the Project view, search [repository issues](https://github.com/ECHOES-ECCCH-TECHNICAL/integration-task-force/issues). The curator can help identify the parent.
3. Gather the information in the preparation checklist below. See the worked examples for an [external reference](examples/level-1.md), a [course aligned with the curriculum](examples/level-2.md), and [training maintained with an ECHOES component](examples/level-3.md).
4. Open **Training resource - Candidate Card** in the [issue chooser](https://github.com/ECHOES-ECCCH-TECHNICAL/integration-task-force/issues/new/choose), complete the seven sections, and submit it. Keep the `[Resource]:` title prefix and replace the placeholder with your resource's name. The [form source](../../.github/ISSUE_TEMPLATE/eitf-training.yml) is available for preparation and local review.
5. A curator checks the parent project, assigns an owner, adds the issue to the EITF Project, and records the intake decision on the same issue. Respond there to any requested changes.

The chooser offers the form after it has been deployed to the repository's default branch and the [Project setup](setup.md) is complete. During local review, use the form source and examples.

**No repository access?** Send the same Candidate Card information to the existing EITF contact, [integration@echoes-eccch.eu](mailto:integration@echoes-eccch.eu). An EITF liaison can register and update the issue on your behalf. Include your preferred contact and the provisional resource owner. Access to the Project board is helpful but is not needed to understand a resource: its issue contains its current information and decisions.

## What gets one issue?

A **Training Integration Unit (TIU)** is a training resource that can be assessed and maintained independently: for example, a course, a module, a toolkit, or a reusable workshop format. One training Resource issue is one TIU. Its GitHub issue number is the tracking identifier; a DOI or other persistent identifier belongs to the published resource and is recorded separately.

Keep deliveries, revisions and translations on the same issue unless they need independent ownership and review. A training platform and the courses it hosts have different responsibilities: a platform such as [UNICHE Academy #66](https://github.com/ECHOES-ECCCH-TECHNICAL/integration-task-force/issues/66) retains its platform record, while an independently maintained course can have its own training Resource issue linked to it.

Every training issue is a child of the contributing **project** issue. An external contribution without a project record can be sponsored beneath [ECHOES #85](https://github.com/ECHOES-ECCCH-TECHNICAL/integration-task-force/issues/85); its Candidate Card must still name the actual provider and owner. Write the parent issue number in the form even if you cannot set the GitHub parent yourself.

### Describe relationships in plain language

| Relationship | Example | What to record |
| --- | --- | --- |
| **Teaches/about** | A guide teaches users how to describe a digital twin with HDTO. | Link the component or resource and describe what learners will do. |
| **Operationally uses** | A course environment uses ECCCH authentication for learner access. | Link the service and describe the operational dependency. |
| **Belongs to a curriculum/pathway** | A module forms part of an introductory heritage data pathway. | Name and link the pathway, or describe the proposed placement. |
| **General training** | A resource teaches transferable facilitation skills. | State that it has no specific ECCCH component link and explain the relevant audience or need. |

You can record several relationships. A **technical Integration Unit (IU)** is a separate child issue only when the training resource needs concrete integration work with a Cloud component. Teaching about a component does not require an IU. Record content development and pedagogical reviews on the TIU itself.

## Preparation checklist

Complete every required part of the Candidate Card, including for Level 1 references. Use “none” where that is the actual answer, such as no prerequisites or no dependencies. For planned resources, describe the proposed arrangement and who will resolve it; leaving a field blank or writing only “TBD” does not describe a workable proposal. Missing arrangements can become explicit conditions during intake.

- [ ] **Identity and responsibility:** a descriptive title; contributing project and parent issue if known; proposer and contributor category; contact; provisional TIU owner.
- [ ] **Resource and delivery:** resource type; delivery format or formats; language or languages; whether it exists; a working resource link if it does.
- [ ] **Learners:** target audiences, preferably by role; intended proficiency; prerequisites or assumed knowledge; estimated effort in hours, sessions or an equivalent measure.
- [ ] **Learning purpose:** a concrete use case or identified need; learning goals in about 150 words; explicit learning outcomes.
- [ ] **ECHOES relationships:** related components, datasets, tools, services or pathways, with the relationship explained; or an explicit general-training answer; a proposed curricular integration level.
- [ ] **Hosting and reuse:** existing or planned hosting; support for exposing metadata and assigning persistent identifiers; the hosting provider's metadata, licensing and PID policies; the resource's existing or proposed licence.
- [ ] **Sustainability:** dependencies such as tools, data, accounts or software; provisional maintenance responsibility and arrangements; any additional notes, or “none”.

**Goals describe the purpose; outcomes describe what learners can do.** For example, a goal might be “Help collection staff prepare reusable descriptions of their digital objects.” An outcome might be “By the end, participants can produce a description containing the required fields and explain their choice of licence.” Name what can be observed or demonstrated, rather than only “understand” or “be aware of”.

**Provider policies and the resource licence answer different questions.** The provider policies describe what the hosting platform supports or requires, including metadata and persistent identifiers. The resource licence states the reuse terms for this particular material. A platform accepting openly licensed content does not establish the licence of your course.

## Choosing a proposed curricular level

The choice in the Candidate Card is your initial hypothesis. WP5 records a provisional level at intake and the applicable confirmed decision later. A resource can move between levels when its role or maintenance arrangements change.

| Proposed level | Intended role | Ongoing care |
| --- | --- | --- |
| **Level 1 — Basic integration (external reference)** | Relevant external material listed for discovery or supporting learning; maintained by its provider. | Basic screening and periodic relevance checks; outside integration-cycle monitoring. |
| **Level 2 — Curricular alignment** | Material on an established external platform or trustworthy repository, with explicit learning outcomes, metadata and a persistent identifier, formally included in curriculum or pathways. | Periodic review shared between the provider and ECHOES governance. |
| **Level 3 — Full integration** | Material developed for ECHOES/ECCCH, embedded in its curriculum and maintained in step with the infrastructure. | Review in every integration cycle and when relevant components change. |

Curricular level describes the resource's relationship to ECHOES. **Learner proficiency** describes how introductory or advanced the material is. The technical integration levels in the [integration handbook](../../README.md#integration-levels---quick-reference) describe systems and are separate again. An introductory course can therefore have curricular Level 3.

DARIAH-Campus is an available hosting route. Existing suitable hosting can also be used; registration does not require moving your materials.

## After submission

- **Intake:** WP5 assesses the proposal, records a provisional level and identifies any changes needed. A Level 1 reference follows a lighter screening and listing route. For Levels 2–3, a ready existing resource can go straight to validation; planned material first goes into development.
- **Development and validation:** update the draft and resource link, explain how you addressed conditions, and respond to review comments. WP5 leads pedagogical approval, with relevant component teams assessing technical alignment where needed. Curators record the decisions, including any revision requirements.
- **Publication and integration:** provide the published URL, version and persistent identifier, plus evidence of the agreed curricular placement and discovery links. Describe pending Single Entry Point or Knowledge Base work explicitly. EITF records this work; it does not publish or integrate materials automatically.
- **Delivery and maintenance:** report deliveries, feedback, changes, broken links and ownership changes on the same issue. Share summary feedback and relevant aggregate indicators. Keep the issue open while the training remains active, including after any technical IU is completed.
- **Retirement:** explain why the material should be deprecated or archived and identify a replacement if one exists. A curator records the decision and updates listings; the history remains available.

In the training workflow, **Active** means validated, published and integrated for Levels 2–3. For Level 1 it means **listed external reference**, following basic screening. The [curator guide](maintainers.md) explains all eight statuses and the review process.

### Editing your resource

After submission, use **Edit** on the issue description to update the Candidate Card. GitHub stores the submitted answers as Markdown; it does not reopen the original form. Keep the headings and the curator's current-record summary intact. Add a comment explaining material changes, such as a new version, owner, licence or proposed level, so the curator can review them and update tracking fields. If you lack edit access, comment with the changes or ask your liaison to record them.

Use links to completed reviews to understand decisions; historical review comments are retained. The summary at the top of the issue shows the current status, agreed level, resource link and next review. Changes to those agreed values are recorded by the curator after a decision.

## Worked examples

These fictional examples show complete Candidate Cards and the next steps before assessment. They demonstrate the form; they do not claim actual publication or ECHOES approval.

- [Level 1: an existing external guide](examples/level-1.md), maintained by its provider and proposed for basic listing.
- [Level 2: a planned sister-project module](examples/level-2.md), with proposed hosting and shared maintenance to confirm.
- [Level 3: an existing draft about OCRA](examples/level-3.md), with component alignment and coordinated maintenance to assess.

## Further guidance

- [Curator and reviewer guide](maintainers.md)
- [Project setup and pilot runbook](setup.md)
- [Mapping to D5.2 annexes](annex-mapping.md)
- [ECHOES D5.2 — Model Workflow for Developing Resources and Training](https://zenodo.org/records/20442259)
