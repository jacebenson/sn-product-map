module.exports = {
  name: "Business Continuity Mgmt",
  products: [
    { 
      name: "Business Continuity Mgmt", 
      tables: [
        { "sn_bcm_plan": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Continuity planning",
      productURL: "https://www.servicenow.com/products/business-continuity-management.html"
    },
    { 
      name: "Business Impact Analysis (BIA)", 
      tables: [
        { "sn_bcm_bia": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Impact analysis",
      productURL: "https://www.servicenow.com/products/business-continuity-management.html"
    },
    { 
      name: "Crisis Mgmt", 
      tables: [
        { "sn_bcm_crisis": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Crisis management",
      productURL: "https://www.servicenow.com/products/business-continuity-management.html"
    }
  ]
};
