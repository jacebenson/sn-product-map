module.exports = {
  name: "Public Sector",
  products: [
    { 
      name: "Public Sector Core", 
      tables: [
        { "sn_ps_case": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Core public sector capabilities",
      productURL: "https://www.servicenow.com/products/public-sector-digital-services.html"
    },
    { 
      name: "Constituent Experience", 
      tables: [
        { "sn_ps_constituent": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Manage constituent interactions",
      productURL: "https://www.servicenow.com/products/public-sector-digital-services.html"
    },
    { 
      name: "Government agent experience", 
      tables: [
        { "sn_ps_agent": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Government agent tools",
      productURL: "https://www.servicenow.com/products/public-sector-digital-services.html"
    }
  ]
};
