module.exports = {
  name: "Telecom, Media & Technology",
  products: [
    { 
      name: "Telco & Tech Provider Service Mgmt", 
      tables: [
        { "sn_ind_tmt_case": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Industry-specific service management",
      productURL: "https://www.servicenow.com/products/telecommunications-service-management.html"
    },
    { 
      name: "Service Bridge", 
      tables: [
        { "sn_bridge": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Bridge to external systems",
      productURL: "https://www.servicenow.com/products/telecommunications-service-operations.html"
    },
    { 
      name: "Assurance Workflow", 
      tables: [
        { "sn_ind_tmt_assurance": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Network assurance workflows",
      productURL: "https://www.servicenow.com/products/telecommunications-service-operations.html"
    }
  ]
};
