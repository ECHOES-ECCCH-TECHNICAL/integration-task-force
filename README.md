# ECHOES Integration Task Force (EITF) Repo Readme 

## *Integration handbook* 

See also: 

- ECHOES D3.1 Integration Strategy [https://doi.org/10.5281/zenodo.17751334](https://doi.org/10.5281/zenodo.17751334)   
- ECHOES D3.2 Integration Roadmap [https://doi.org/10.5281/zenodo.17751669](https://doi.org/10.5281/zenodo.17751669)   
- ECHOES D6.2 Interoperability Requirements and Guidelines [https://doi.org/10.5281/zenodo.18656367](https://doi.org/10.5281/zenodo.18656367) and [https://echoes-eccch-technical.github.io/internal-documentation/](https://echoes-eccch-technical.github.io/internal-documentation/)   
- ECHOES D6.3 Architecture for Data and Cloud Components [https://doi.org/10.5281/zenodo.20444205](https://doi.org/10.5281/zenodo.20444205)   
- ECHOES D9.1 Assessment Framework [https://echoes-eccch-technical.github.io/cloud-assessment-framework/](https://echoes-eccch-technical.github.io/cloud-assessment-framework/)   
- Official ECHOES-ECCCH GitHub organisation: [https://github.com/ECHOES-ECCCH](https://github.com/ECHOES-ECCCH)  

# **Goal**

The ECHOES Integration Task Force (EITF) is responsible for coordinating the Integration of outputs from sister projects into/with ECCCH infrastructure. Detailed procedure is laid out in D3.2 Integration Roadmap. This documentation provides the practical details for managing the integration process, focused on GitHub as the tool for tracking the integrations.

# **Context**

Details regarding the following definitions are provided in ECHOES D3.1 Integration Strategy [https://doi.org/10.5281/zenodo.17751334](https://doi.org/10.5281/zenodo.17751334) and ECHOES D3.2 Integration Roadmap [https://doi.org/10.5281/zenodo.17751669](https://doi.org/10.5281/zenodo.17751669). 

## Resources \- Quick reference

1. What a ‘resource’ means in a project   
   1. Any output that can be reused or shared:  
      1. Datasets   
      2. workflows/pipelines  
      3. Software packages, libraries, APIs…   
   2. The exact definition can be flexible – choose the granularity that makes sense for your project (e.g., a whole database vs. a single table, a full platform vs. an individual micro‑service)    
2. Pragmatic approach to integration  
   1. Treat a resource as the smallest unit that is useful for integration.  
   2. It does not have to map one‑to‑one with the way the ECHOES website or communication materials describe a tool. For integration you may need a finer‑grained view (e.g., individual services inside a larger platform) – that’s perfectly acceptable. 

## Integration Unit

An Integration Unit is defined as a **pair consisting of a resource to be integrated to the Cultural Heritage Cloud and a Cloud component to integrate with**. For a given resource, it could be that multiple integration units are needed. For example, an application could need to integrate with the ECCCH AAI and with the Knowledge Base. This would be considered as two different Integration Units.

## ECHOES Cloud Components available for integration

Components will be released as they are made available in the official and fully public ECHOES GitHub organisation: [https://github.com/ECHOES-ECCCH](https://github.com/ECHOES-ECCCH). Below is the list of useful pointers, while waiting for more stable documentation. 

### HDTO

- ECHOES The Digital Commons (D7.1) [https://doi.org/10.5281/zenodo.20445937](https://doi.org/10.5281/zenodo.20445937)   
- HDTO webinar materials: [https://github.com/ECHOES-ECCCH/HDTO-Heritage-Digital-Twin-Ontology/tree/main](https://github.com/ECHOES-ECCCH/HDTO-Heritage-Digital-Twin-Ontology/tree/main) 

### Knowledge Base

- ECHOES Architecture for Data and Cloud Components (D6.3) [https://doi.org/10.5281/zenodo.20444205](https://doi.org/10.5281/zenodo.20444205)   
- Knowledge Base API swagger documentation:    
  [https://echoes-kb-api-route-echoes-graphs-production.apps.dcw1.paas.psnc.pl/swagger-ui/index.html\#/](https://echoes-kb-api-route-echoes-graphs-production.apps.dcw1.paas.psnc.pl/swagger-ui/index.html#/)   
- 

### Authorisation and Authentication Infrastructure

- [ECHOES AAI Integration](https://docs.google.com/document/d/15_4Z0DgcoVNKL4sZGMhkgnVHoH-SQOUAPq-mUfghk_4/edit?usp=sharing)

### (to be added) Storage and Deployment

## Integration levels

These are the levels that you can target. More details are provided in D3.1 Integration strategy and D6.2 ECHOES D6.2 Interoperability Requirements and Guidelines.

| Integration Level | Data/Metadata | Applications | Workflows |
| ----- | ----- | ----- | ----- |
| **1: Tactical (Basic Connectivity) Federation:** Central catalog with pointers to siloed data   | **Digital Twin**: "Potential Twin" – fragmented raw assets (point clouds, manuscripts, logs) as discoverable files, lacking semantic unification. **Paradata**: User-uploaded narratives (PDFs) manually describing processing steps. **Storage**: Object storage (S3-like) with basic Dublin Core metadata; no validation or quality checks. | IaaS (VMs) – tools run in isolation as "black boxes" with no automatic provenance tracking. | Manual execution via documentation (PDFs/text files); reproducibility relies on human notes. |
| **2: Strategic (Semantic & Technical) Federation:** Hybrid model – central search with API-based retrieval from member nodes (often read-only). Authentication is centralised | **Digital Twin**: "Semantically Valid Twin" – data mapped to HDTO, enabling semantic queries, but remains a static container. **Paradata**: Auto-generated by processing apps, linked to workflows and asset descriptions. **Storage**: Managed databases (RDF/Elasticsearch) with schema validation (SHACL); incomplete records flagged. | PaaS – cloud-native APIs for auth/logging/storage; tools sign output metadata. | Scripts/orchestration (versioned, peer-reviewed) chaining API calls; portable across nodes. |
| **3: Transformational (Federated Ecosystem) Federation:** Full mesh – nodes act as active read/write participants under global policies | **Digital Twin**: "Dynamic Twin" – synchronised with the Cloud, triggers workflows (e.g., auto-updating condition reports), enriched by AI, and interacts with other HDTs in the federation. **Paradata**: Workflow Engine auto-appends unalterable audit trails (e.g., "Denoising Algorithm” applied to HDT’s geometry). **Storage**: Data fabric/virtualisation with a unified logical view; golden records (certified, versioned, community-enriched). | SaaS/FaaS – containerised (Docker/K8s) microservices with auto-scaling; telemetry captured automatically. | Workflow Engine manages DAGs; cross-node orchestration (e.g., Step 1 in France, Step 2 in Italy); deep lineage for 100% reproducibility. |

# **Integration steps** 

Six integration steps are envisioned at the moment, as described in D3.2 Integration Roadmap. The table below provides a summary view of these steps also highlighting how the steps translate in the present GitHub tracking tool

### **ECHOES Integration Process Summary**

| Step | Objective | Actors | Output | Tracking Tool Translation |
| ----- | ----- | ----- | ----- | ----- |
| **1\. Candidate Resources Identification** | Identify integration units (ECHOES adopter resource \+ ECHOES Cloud Component) | ECHOES adopter rep, EITF coordination team | List of integration units | Create **1 issue per unit** in the Tracking Tool |
| **2\. Interoperability Self-Assessment** | Assess integration readiness using checklists, guidelines, and support sessions | ECHOES adopter technical contacts | Integration readiness & best integration level | Agree on **start/end dates** for units |
| **3\. Technical Onboarding** | Implement cloud component integration (parallelizable) | Adopter tech contacts, Cloud component providers | Cloud components integrated | Assign **2 technical individuals** per issue (1 adopter \+ 1 provider) |
| **4\. Integration Validation** | Approve implementation from both sides (adopter \+ provider) | Adopter tech contacts, Cloud component providers | Validated integration | Change issue status to **validated** |
| **5\. Release & Monitoring** | Release services and monitor performance (uptime, errors, data usage) | Adopter tech contacts, Cloud component providers | Released & monitored resources; performance metrics | Close related issues as **completed** |
| **6\. User Evaluation** | Gather user feedback on integrated components | ECHOES adopter representative | User feedback; insights; Collaborative Research Scenarios (CRS) evaluated | **N/A** |

# **EITF GitHub use and conventions**

This dedicated EITF GitHub repo \- [https://github.com/ECHOES-ECCCH-TECHNICAL/integration-task-force](https://github.com/ECHOES-ECCCH-TECHNICAL/integration-task-force) \- is meant as an administrative tracking tool to manage individual integrations. It will be used for management only. No commits are foreseen here, atm.

Conventions used to populate this tracking tool tracking are the following:

- A three-level issues:  
  - Parent issue describes a project  
  - Sub-issues describe resources from a given project  
  - Sub-sub-issues describe integration units for a given resource

## Access/Log in 

- The repository is currently set to private, as it contains contact details, and is used as an internal administrative tracking tool.   
- Issues in this repositories are organised in a dedicated GitHub project, using several views: [https://github.com/orgs/ECHOES-ECCCH-TECHNICAL/projects/2](https://github.com/orgs/ECHOES-ECCCH-TECHNICAL/projects/2)    
- (Sister) projects adopters are added as members of the repository, with write access. While EITF membership is limited to two persons per project, membership to the EITF GitHub repo is not. As many project members as needed can get access to this repo, to ensure smooth communication.  

## Project views

[https://github.com/orgs/ECHOES-ECCCH-TECHNICAL/projects/2](https://github.com/orgs/ECHOES-ECCCH-TECHNICAL/projects/2) 

Check if your project and resources are already described in the tracking tool, by looking at the “all project” view: [https://github.com/orgs/ECHOES-ECCCH-TECHNICAL/projects/2/views/2](https://github.com/orgs/ECHOES-ECCCH-TECHNICAL/projects/2/views/2) and “all resources” view: [https://github.com/orgs/ECHOES-ECCCH-TECHNICAL/projects/2/views/1](https://github.com/orgs/ECHOES-ECCCH-TECHNICAL/projects/2/views/1) 

## Issues templates 

Three different issue templates have been created to support the representation of: 1/ projects; 2/ ressources and 3/ integration units.

<img width="794" height="236" alt="grafik" src="https://github.com/user-attachments/assets/4273c072-4635-4f5e-ac2a-7bf7a44ff12a" />


### 1/ Project

Basic information about a project should be filled in, there. Most of the projects have been created by the EITF coordination team. We might have missed something, so feel free to edit, or comment on the \[PROJECT\] issues that are already existing.

### 2/ Resource

See above for more info on what a resource is. Basic information is collected in the \[Resource\] issues, such as name, acronym, short description, any external links to the resource or some documentation when it exists already. Contact details, ideally someone responsible for the resource (developing, providing or maintaining it), is also requested to facilitate future communications. 

### 3/ Integration Unit

Creating an Integration Unit issue means declaring an interest for an integration with an ECHOES Cloud Component. See details and pointers above in the integration units and cloud components sections.

- The title of the \[IU\] issue should include the name of the resource and the name of the cloud component.  
- A short description of what is expected with the integration should also be added.  

<img width="797" height="531" alt="grafik" src="https://github.com/user-attachments/assets/e8a505b3-21dd-42d8-aa92-ebf01f1df426" />

# **Contact or questions** 
Feel free to get in touch via [intergation@echoes-eccch.eu](mailto:intergation@echoes-eccch.eu) (behind this email are the EITF coordination team members: Mailane (CNRS), Dimitris (CyU), Sally, Matej and Laure (DARIAH)).



