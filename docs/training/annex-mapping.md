# D5.2 implementation crosswalk

This crosswalk maps [ECHOES D5.2, version published 30 May 2026](https://zenodo.org/records/20442259) to the repository's training workflow. The [Candidate Card](../../.github/ISSUE_TEMPLATE/eitf-training.yml) defines the issue; assessment and review templates are used on that same issue. The [curator guide](maintainers.md) defines the decision gates, and the [setup checklist](setup.md) defines the Project index.

## Annex 1: Training Candidate Card (pp. 23–24)

The form retains all Annex 1 information. Title is the native issue title; all other substantive items are required answers, except the resource URL, which is conditionally required for an existing resource and checked by a curator. The form provides explicit None/Not applicable options through explanatory text where meaningful; its Notes field remains required and accepts None. Planned operational arrangements are described and assessed, not silently treated as complete.

| Annex 1 information | Form field / identifier |
| --- | --- |
| Title | Native issue title, retaining `[Resource]:` |
| Proposed by: WP / partner / external contributor / cascading grant beneficiary | Proposed by (`proposer`); Contributing project (`project`) adds parent attribution |
| Contact / provisional TIU owner | Contact and provisional TIU owner (`owner`) |
| Type of resource | Type of resource (`resource_type`) |
| Delivery formats | Delivery formats (`delivery_formats`) |
| Target audiences, by role where possible | Target audiences (`audience`) |
| Learning goals (150 words) | Learning goals (`goals`), with concise guidance rather than a rigid word-count validator |
| Learning outcomes | Learning outcomes (`outcomes`), separate from goals |
| Prerequisites and assumed knowledge | Prerequisites and assumed knowledge (`prerequisites`) |
| Intended proficiency level | Intended learner proficiency (`proficiency`) |
| Estimated learner effort | Estimated learner effort (`learner_effort`) |
| Concrete use case or identified need | Concrete use case or identified need (`need`) |
| ECCCH link: Vertical Application; dataset, service or component; or none | Relationship types (`relationship_types`) and Related resources, components and pathways (`related_resources`); distinguishes teaches/about, operational use and curricular placement; general training allowed |
| Proposed integration level: initial hypothesis | Proposed curricular integration level (`proposed_level`); not copied into an assessed-level field |
| Existing resource, with link when applicable | Does the resource already exist? (`existing_resource`) and Existing resource URL (`resource_url`) |
| Existing/planned hosting, including metadata exposure and PID support | Existing or planned hosting (`hosting`) |
| Hosting-provider metadata, licensing and PID policies | Hosting provider policies (`provider_policies`), distinct from the resource licence |
| Licence of the resource | Resource licence (`licence`) |
| Dependencies | Dependencies (`dependencies`) |
| Maintenance responsibility / provisional arrangement | Maintenance responsibility and provisional arrangements (`maintenance`) |
| Languages | Languages (`languages`) |
| Notes | Notes (`notes`) |

## Annex 2: intake readiness (pp. 24–25)

The [full intake comment](templates/intake.md) preserves every criterion and outcome. Its assessment/evidence columns distinguish Met, Condition, Not met and Not applicable, with explanations. They replace the printed checkboxes without removing criteria. D5.2's “learning objectives” refer to the Card's learning outcomes. The published “Virtual Applications” wording is retained in the criterion; contributor-facing guidance uses “Vertical Applications”.

| Annex 2 group | Criteria retained in the corresponding template section |
| --- | --- |
| 1. Pedagogical clarity | Goals defined; objectives specified; audience identified; prerequisites/assumed knowledge stated; coherent scope and purpose |
| 2. Coherence of proposed concept | Objectives consistent with goals; structure/format appropriate to objectives; identifiable need/use case |
| 3. ECCCH relevance, where applicable | Component/application/use-case link described; relevance justified without direct technical linkage |
| 4. Feasibility | Owner identified; no major development/integration blockers; dependencies identified |
| 5. Initial sustainability | Hosting identified/plausible; hosting satisfies metadata/licensing/PID requirements; reasonable maintenance expectation |
| Outcome | accepted for development; accepted with conditions (to be addressed in development); deferred / requires revision before proceeding |
| Provisional integration level | Level 1 / Level 2 / Level 3, separately recorded from the proposer hypothesis and confirmed decision |
| Notes | Conditions/improvements plus responsible person, target date and resolution evidence |

The same file includes a separately identified **basic Level 1 listing assessment**. This implements the proportionate route in sections 3.5.1 and 5.2.1 and Annex 4; it is not represented as a full Annex 2 or Annex 3 assessment. All routes still require the complete Candidate Card. A full assessment recommending Level 1 passes to that listing route.

## Annex 3: validation (pp. 25–28)

The [validation comment](templates/validation.md) preserves every criterion and the four exact outcomes. WP5 leads validation, with relevant technical input. Criteria refer to the actual version reviewed. The template adds evidence, named decisions, unresolved actions and an activation hand-off so approval is not mistaken for publication.

| Annex 3 group | Criteria retained in the corresponding template section |
| --- | --- |
| 1. Pedagogical clarity/coherence | Goals/objectives defined and internally consistent; appropriate explicit audience/prerequisites; structure supports outcomes; complexity suits audience |
| 2. Quality/accessibility | Clear, structured, usable content; complete instructional material understandable without clarification; applicable accessibility requirements met |
| 3. Metadata/licensing | Complete and accurate metadata; specified licence; appropriate citation/reference including PID where applicable |
| 4. Technical sustainability | Documented dependencies; stable formats/hosting; no critical technical usability risks |
| 5. Maintenance/ownership | Identified maintainer; defined update/revision expectations; Level 3 commitment to follow ECCCH component changes |
| 6. ECCCH alignment | Demonstrated component/workflow/use-case alignment; consistent terminology/framing; appropriate Level 2–3 curriculum/pathway integration |
| Outcome | approved for publication and integration; approved with minor revisions; requires revision before publication; not approved |
| Confirmed integration level | Level 1 / Level 2 / Level 3, with WP5 confirmation for Levels 2–3 and a separate basic listing decision for Level 1 |
| Notes | Comments/conditions plus owners, dates and resolution evidence |

## Annex 4: lifecycle and tracking (pp. 28–29)

| D5.2 state | Local tracking behaviour |
| --- | --- |
| Candidate | Completed Card registered; deferred intake stays here while revisions are requested |
| In development | Accepted training being produced or substantially revised |
| Under validation | Developed material under assessment, including unresolved publication/activation requirements after approval |
| Active | Level 2–3 validated, published and integrated; Level 1 screened and listed as an external reference under the explicit lighter-route convention |
| Under review | Continuing training undergoing scheduled or change-triggered review |
| Updated | Revised following review/evaluation; change and evidence recorded before returning to Active |
| Deprecated | No longer recommended, retained for reference; retirement/listing changes recorded, issue remains open |
| Archived | Removed from active use and maintenance; issue closed, Project item and decision history retained |

All eight values appear in Training status. Assessment outcomes are decisions in comments, not additional lifecycle states. The [current record](templates/current-record.md) holds the current summary; Project fields are a manually maintained index. The [review template](templates/review.md) records transitions, updates and level changes on the same TIU.

| Annex 4 tracking requirement | Implementation home |
| --- | --- |
| Single entry, title and identifier | One `[Resource]:` issue with `EITF resource` and `training`; native issue number |
| Assigned level, provisional or confirmed | Separate provisional/confirmed fields, current summary and dated decisions; proposed hypothesis retained in the Card |
| Current status | Exact Training status value and current summary |
| Responsible actor | Card owner, current summary and Assignees; liaison identified where owner lacks an account |
| Hosting/resource links | Card URL/hosting; current published URL, resource PID and reviewed version |
| Related ECCCH components | Explicit relationship descriptions/links; separate operational IU only where real integration work requires it |
| Shared integration cycles | Existing EITF Integration cycle for Levels 2–3; historic cycle references in review comments |
| Candidate assessment, continued alignment, revisions, retirement | Intake, validation and review comments with evidence and responsible decision-makers |
| Level 1 minimal tracking | Basic screening/listing and relevance/access check; no integration-cycle assignment or full curricular validation |
| Level 2 periodic review | Next training review and existing cycles; shared maintenance and curriculum relevance checks |
| Level 3 continuous alignment | Each-cycle review and relevant component-change triggers; explicit update commitment |

## Supporting requirements and implementation defaults

- **Governance (section 4.2):** the [curator guide](maintainers.md) assigns resource ownership, WP5 assessment/confirmation, EITF coordination, component-team technical input and WP4/WP9 contributions. Review templates name the actual assessor and decision date.
- **Delivery, evaluation and maintenance (sections 5.2.6–5.2.8):** the [review comment](templates/review.md) captures audiences reached, aggregate usage, usability/relevance, learning outcomes, updates and retirement; no learner-level tracking is introduced.
- **Distributed hosting and evolving infrastructure (section 3.4):** the form and guides permit external hosting and identify DARIAH-Campus as an available route. Current records separate actual discovery evidence from pending SEP/Knowledge Base work.
- **Local defaults, not additional D5.2 mandates:** one Resource issue is the TIU; independent external contributions use ECHOES as sponsoring parent; Level 1 Active means listed external reference; relevance checks default to annually, Level 2 reviews to every two quarterly cycles, and Level 3 to every cycle plus relevant component changes. WP5 records adjustments without removing the per-level governance obligations.
- **Readiness conditions:** planned hosting/licensing/PID arrangements are legitimate intake information but do not waive publication requirements. Confirmed Level 2–3 activation requires the actual PID, publication, maintenance, curricular and discovery evidence described in the [validation hand-off](templates/validation.md).
- **Maintenance of these instruments (section 6):** pilot findings feed updates to these living templates and guidance. Changes retain this crosswalk so any departure from the published annexes remains explicit.
