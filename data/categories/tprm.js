module.exports = {
  name: "Third-Party Risk Mgmt",
  products: [
    { 
      name: "Vendor Risk Mgmt", 
      tables: [
        { "sn_vdr_risk_vendor": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Manage vendor risk",
      productURL: "https://www.servicenow.com/products/vendor-risk-management.html"
    },
    { 
      name: "Third-Party Risk Mgmt", 
      tables: [
        { "sn_vdr_risk_third_party": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Third-party risk",
      productURL: "https://www.servicenow.com/products/third-party-risk-management.html"
    }
  ]
};
