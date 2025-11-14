# ServiceNow Categories

This directory contains modular JavaScript files for each ServiceNow capability category.

## Category Files

- **admin.js** - Admin & Config
- **ai.js** - Intelligence & GenAI
- **appengine.js** - App Engine
- **automation.js** - Automation Engine
- **bcm.js** - Business Continuity Mgmt
- **core.js** - Core Services
- **csm.js** - Customer Service Mgmt
- **ea.js** - Enterprise Architecture
- **eam.js** - Enterprise Asset Mgmt
- **erp.js** - App Engine for ERP
- **esg.js** - ESG Mgmt
- **fscm.js** - Finance and Supply Chain Operations
- **fsm.js** - Field Service Mgmt
- **fso.js** - Financial Services Ops
- **hls.js** - Healthcare & Life Sciences
- **hrsd.js** - HR Service Delivery
- **integration.js** - Integration Services
- **irm.js** - Integrated Risk Mgmt
- **itam.js** - IT Asset Mgmt
- **itom.js** - IT Operations Mgmt
- **itsm.js** - IT Service Mgmt
- **lsd.js** - Legal Service Delivery
- **mfg.js** - Manufacturing
- **ot.js** - Operational Technology
- **privacy.js** - Privacy Mgmt
- **ps.js** - Public Sector
- **retail.js** - Retail Service Mgmt
- **safety.js** - Health & Safety
- **secops.js** - Security Operations
- **security.js** - Security & Compliance
- **som.js** - Sales and Order Mgmt
- **spm.js** - Strategic Portfolio Mgmt (SPM)
- **talent.js** - Talent Development
- **tmt.js** - Telecom, Media & Technology
- **tprm.js** - Third-Party Risk Mgmt
- **wsd.js** - Workspace Service Delivery

## File Format

Each file exports a single object with:
- `name`: Category display name
- `products`: Array of product objects, each with:
  - `name`: Product name
  - `tables`: Array of ServiceNow table names
  - `description`: Brief description

## Example

```javascript
module.exports = {
  name: "IT Service Mgmt",
  products: [
    { 
      name: "Incident Mgmt", 
      tables: ["incident"], 
      description: "Manage IT incidents" 
    },
    // ... more products
  ]
};
```

## Usage

These files are automatically loaded by `.eleventy.js` and combined into the `capabilities` global data object.
