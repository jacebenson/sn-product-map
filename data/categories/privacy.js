module.exports = {
  name: "Privacy Mgmt",
  products: [
    { 
      name: "Privacy Case Mgmt", 
      tables: [
        { "sn_privacy_case": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Privacy cases",
      productURL: "https://www.servicenow.com/products/privacy-management.html"
    },
    { 
      name: "Privacy Impact Assessment", 
      tables: [
        { "sn_privacy_pia": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Privacy assessments",
      productURL: "https://www.servicenow.com/products/privacy-management.html"
    },
    { 
      name: "Breach Assessment Workflow", 
      tables: [
        { "sn_privacy_breach": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Breach assessment",
      productURL: "https://www.servicenow.com/products/privacy-management.html"
    }
  ]
};
