# ServiceNow Capability Planner

An interactive single-page application built with Eleventy (11ty) that helps you plan and track ServiceNow capability adoption across your organization.

## Features

- Visual capability planning with color-coded adoption states
- **Click legend items to filter** - Show/hide products by adoption state
- Click products to cycle through states:
  - Licensed High Adoption (green)
  - Licensed Medium Adoption (yellow)
  - Licensed Low Adoption (red)
  - Licensed Not Used (gray)
  - Plan to Adopt (blue)
  - Not Licensed (black)
- Double-click or right-click products to view detailed information
- Automatic state persistence using localStorage
- Filter preferences saved across sessions
- Export capability plan to JSON (Ctrl+E)
- Responsive design for desktop and mobile
- Compact layout with everything above the fold

## Installation

1. Install dependencies:
```bash
npm install
```

## Usage

### Development Server

Start the development server with live reload:
```bash
npm start
```

Visit http://localhost:8080 to view the application.

### Build

Build the static site:
```bash
npm run build
```

The built site will be in the `_site` directory.

## How to Use

1. **Click legend items** to filter which products are visible (by adoption state)
2. **Click products** to cycle through adoption states
3. **Double-click** or **right-click** products to view details including related tables
4. **Ctrl+E** to export your capability plan as JSON
5. Your selections and filters are automatically saved in your browser

## Project Structure

```
.
├── .eleventy.js          # Eleventy configuration
├── package.json          # Project dependencies
├── data/
│   └── categories/       # Individual JS modules for each category
│       ├── csm.js        # Customer Service Mgmt
│       ├── fsm.js        # Field Service Mgmt
│       ├── hrsd.js       # HR Service Delivery
│       ├── itsm.js       # IT Service Mgmt
│       ├── itom.js       # IT Operations Mgmt
│       └── ...           # 36 category modules total
├── products.json         # Product data (legacy)
└── src/
    ├── index.html        # Main template
    ├── css/
    │   └── styles.css    # Application styles
    └── js/
        └── app.js        # Interactive functionality
```

## Data Structure

Each category is defined in a separate JavaScript file in `data/categories/`. This modular approach makes it easy to:
- Add or modify individual categories
- Maintain data independently
- Version control changes per category
- Organize capabilities by domain

See `data/categories/README.md` for the complete list of category files.


## Data


### Customer Service Mgmt

- Customer Case Mgmt
- IT Service Mgmt 
- Targeted Communications
- Communities
- Knowledge Mgmt
- Playbook for CSM
- Workforce Optimization
- Now Assist for CSM

### Telecom, Media & Technology

- Telco & Tech Provider Service Mgmt
- Service Bridge
- Assurance Workflow

### Sales and Order Mgmt

- Opportunity Mgmt
- Quote Mgmt
- Order Fulfillment

### Field Service Mgmt

- Work Order Mgmt
- Dynamic Scheduling and Dispatch
- Planned Work Mgmt
- Territory Mgmt
- Field Service Contractor Mgmt
- Dispatcher Workspace
- Site Mapping
- Linear Asset Support
- Now Assist for FSM

### Healthcare & Life Sciences

- Healthcare Data Model
- Patient Support Services
- Pre-visit Mgmt
- EMR Help
- Clinical Device Mgmt

### Financial Services Ops

- Financial Service Data Model
- Payment Operations
- Card Operations
- Document Processing
- Loan Operations
- Deposit Operations

### Manufacturing

- OT Manager
- Manufacturing Processing Manager

### Public Sector

- Public Sector Core
- Constituent Experience
- Government agent experience

### Retail Service Mgmt

- Retail Core

### IT Service Mgmt

- Incident Mgmt
- Problem Mgmt
- Change Mgmt
- Release Mgmt
- Request Mgmt
- Asset and Cost Mgmt
- Continual Improvement
- Digital Portfolio Mgmt
- DevOps Change Velocity
- ITSM Success Dashboard
- Digital End-User Experience
- Now Assist for ITSM

### IT Operations Mgmt

- Discovery
- Service Mapping
- Service Graph Connectors
- Firewall Audit
- Certificate Mgmt
- Tag Governance
- Agent Client Connector
- Event Mgmt
- Metric Intelligence
- Predictive AIOps
- Health Log Analytics
- Site Reliablility Mgmt
- Intellegent CMDB Search
- Cloud Migration Assessment
- Cloud Service Catalog
- Cloud Account Mgmt
- Now Assist for ITOM

### IT Asset Mgmt

- Software Asset Mgmt
- Content Library & Service
- SaaS License Mgmt
- Software Spend Mgmt
- License cloud cost simulator
- SAM Success Tracking
- Hardware Asset Mgmt
- Hardware Asset Lifecycle Mgmt
- Hardware Asset Reservation
- Indoor Mapping for Asset

### Operational Technology

- OT Visibility
- OT Vulnerability Response
- OT Service Mgmt
- OT Asset Mgmt

### Enterprise Asset Mgmt

- Enterprise Asset Mgmt
- Enterprise Asset Lifecycle Mgmt
- Enterprise Asset Inventory Mgmt
- Indoor Mapping for Asset

### Security Operations

- Security Incident Response
- Vulnerability Response
- VR Patch Orchestration
- Data Loss Prevention Incident Response
- Security Posture Control

### HR Service Delivery

- HR Case Mgmt
- Campaign Automation
- Enterprise Onboarding and Transitions
- Employee Journey Mgmt
- Employee Document Mgmt
- Listening Posts
- Now Assist for HRSD

### Health & Safety

- Contact Tracing
- Employee Health Screening
- Employee Travel Safety Mgmt
- Health and Safety Dashboard
- Workplace Safety Mgmt
- Health and Safety Testing

### Workpace Service Delivery

- Workpace Case Mgmt
- Workplace Reservation
- Workplace Space Mgmt
- Workplace Visitor Mgmt
- Indoor Mapping

### Legal Service Delivery

- Legal Request Mgmt
- Legal Matter Mgmt
- Legal Counsel Center

### Talent Development

- Learning
- Manager Hub
- Career Conversation
- Mentoring
- Opportunity Marketplace
- Skills Intelligence Workspace

### Integrated Risk Mgmt

- Policy & Compliance Mgmt
- Risk Mgmt
- Audit Mgmt

### Privacy Mgmt

- Privacy Case Mgmt
- Privacy Impact Assessment
- Breach Assessment Workflow

### Third-Party Risk Mgmt

- Vendor Risk Mgmt
- Third-Party Risk Mgmt

### Enterprise Architecture

- Business Application Inventory
- Application Rationalization
- Technology Portfolio Mgmt

### Business Continuity Mgmt

- Business Continuity Mgmt
- Business Impact Analysis (BIA)
- Crisis Mgmt 

### ESG Mgmt

- ESG Mgmt
- ESG Metric Definition
- ESG Workspace

### Strategic Portfolio Mgmt (SPM)

- Demand Mgmt
- Project & Portfolio Mgmt
- Resource Mgmt
- Investment Funding
- Roadmap Planning
- Agile Dev & Test
- Scenario Planning
- Timecards
- Now Assist for SPM

### App Engine

- App Engine Studio
- App Template
- Unlimited Custom Apps and Tables
- App Engine Mgmt Center
- Now Assist for Creator

### App Engine for ERP

- ERP Customization Mining
- ERP Canvas

### Automation Engine

- Integration Hub
- RPA Hub
- Unattended Robots
- Attended Robots
- Document Intelligence
- Automation Center
- Stream Connect for Apache Kafka

### Finance and Supply Chain Operations

#### Sourcing and Procurement Ops

- Procurement Case Mgmt
- Procurement Workspace
- ShoppingHub
- Purchase & Receipt Automation

#### Accounts Payable Ops

- Accounts Payable Invoice Processing

#### Supplier Lifecycle Mgmt

- Supplier Mgmt Workspace
- Supplier Onboarding
- Supplier Intelligence

#### Supply Chain Exception Mgmt

- Exception Workspace

### Core Services

- Service Catalog
- Knowledge Management
- Service Level Mgmt
- CMDB
- Common Service Data Model
- AI Search
- Visual Task Board
- Survey and Assessments

### Intelligence & GenAI

- Performance / Platform Analytics
- Predictive Intelligence
- Process Mining
- Now Assist for Search
- Now Assist for Virtual Agent
- Now Assist Panel
- Generative AI Controller
- Now Assist Skill Kit
- AI Agents

### Admin & Config

- Admin Center
- Web UI & Mobile Builder
- ServiceNow IDE
- Workflow Studio
- Advanced Work Assignment
- Automated Test Framework
- Seamless upgrades
- Domain Separation

### Integration Services

- Web Services
- Import & Export
- Inbound Email
- Embedded Integrations
- IntegrationHub
- Instance Data Replication

### Security & Compliance

- ACLs & Roles
- LDAP Integration
- ServiceNow Security Center
- Multi-Factor Authentication
- Antivirus Scanning
- Deny Unless ACLs
- Subscription Mgmt
- Database Encryption
- Cloud Encryption
- Column Encryption
- Full Disk Encryption
- CLE Enterprise Key Mgmt Framework (KMF)
- Vault
- FEDRAMP / GCC