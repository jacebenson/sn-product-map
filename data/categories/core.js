module.exports = {
  name: "Core Services",
  products: [
    { 
      name: "Service Catalog", 
      tables: [
        { "sc_catalog": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Service catalog",
      productURL: "https://www.servicenow.com/products/workflow.html"
    },
    { 
      name: "Knowledge Management", 
      tables: [
        { "kb_knowledge": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Knowledge base",
      productURL: "https://www.servicenow.com/products/knowledge-management.html"
    },
    { 
      name: "Service Level Mgmt", 
      tables: [
        { "sla": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "SLA management",
      productURL: "https://www.servicenow.com/products/workflow.html"
    },
    { 
      name: "CMDB", 
      tables: [
        { "cmdb_ci": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Configuration management",
      productURL: "https://www.servicenow.com/products/workflow.html"
    },
    { 
      name: "Common Service Data Model", 
      tables: [
        { "cmdb_ci": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Service data model",
      productURL: "https://www.servicenow.com/products/workflow.html"
    },
    { 
      name: "AI Search", 
      tables: [
        { "sys_ai_search": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "AI-powered search",
      productURL: "https://www.servicenow.com/products/workflow.html"
    },
    { 
      name: "Visual Task Board", 
      tables: [
        { "vtb_board": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Visual task boards",
      productURL: "https://www.servicenow.com/products/workflow.html"
    },
    { 
      name: "Survey and Assessments", 
      tables: [
        { "asmt_assessment_instance": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Surveys and assessments",
      productURL: "https://www.servicenow.com/products/workflow.html"
    }
  ]
};
