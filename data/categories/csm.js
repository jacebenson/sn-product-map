module.exports = {
  name: "Customer Service Mgmt",
  products: [
    { 
      name: "Customer Case Mgmt", 
      tables: [
        { "sn_customerservice_case": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Manage customer cases efficiently",
      productURL: "https://www.servicenow.com/products/customer-service-management.html"
    },
    { 
      name: "IT Service Mgmt", 
      tables: [
        { "incident": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" },
        { "problem": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" },
        { "change_request": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Core ITSM capabilities",
      productURL: "https://www.servicenow.com/products/itsm.html"
    },
    { 
      name: "Targeted Communications", 
      tables: [
        { "sn_csm_targeted_communication": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Send targeted communications to customers",
      productURL: "https://www.servicenow.com/products/customer-service-management.html"
    },
    { 
      name: "Communities", 
      tables: [
        { "kb_knowledge": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" },
        { "kb_submission": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Build customer communities",
      productURL: "https://www.servicenow.com/products/communities.html"
    },
    { 
      name: "Knowledge Mgmt", 
      tables: [
        { "kb_knowledge": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" },
        { "kb_knowledge_base": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Manage knowledge articles",
      productURL: "https://www.servicenow.com/products/knowledge-management.html"
    },
    { 
      name: "Playbook for CSM", 
      tables: [
        { "sn_csm_playbook": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Standardize service processes",
      productURL: "https://www.servicenow.com/products/customer-service-management.html"
    },
    { 
      name: "Workforce Optimization", 
      tables: [
        { "sn_csm_wfo": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Optimize workforce scheduling",
      productURL: "https://www.servicenow.com/products/customer-service-management.html"
    },
    { 
      name: "Now Assist for CSM", 
      tables: [
        { "sys_ai_assist": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "AI-powered assistance",
      productURL: "https://www.servicenow.com/products/customer-service-management.html"
    }
  ]
};
