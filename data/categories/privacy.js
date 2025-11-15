module.exports = {
  name: "Privacy Mgmt",
  products: [
    { 
      name: "Privacy Case Mgmt", 
      tables: [
        { "sn_privacy_case": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Privacy cases",
      productURL: "https://www.servicenow.com/products/privacy-management.html"
    },
    { 
      name: "Privacy Impact Assessment", 
      tables: [
        { "sn_privacy_pia": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Privacy assessments",
      productURL: "https://www.servicenow.com/products/privacy-management.html"
    },
    { 
      name: "Breach Assessment Workflow", 
      tables: [
        { "sn_privacy_breach": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Breach assessment",
      productURL: "https://www.servicenow.com/products/privacy-management.html"
    }
  ]
};
