module.exports = {
  name: "ESG Mgmt",
  products: [
    { 
      name: "ESG Mgmt", 
      tables: [
        { "sn_esg_metric": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "ESG management",
      productURL: "https://www.servicenow.com/products/esg-management.html"
    },
    { 
      name: "ESG Metric Definition", 
      tables: [
        { "sn_esg_metric_def": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Define ESG metrics",
      productURL: "https://www.servicenow.com/products/esg-management.html"
    },
    { 
      name: "ESG Workspace", 
      tables: [
        { "sn_esg_workspace": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "ESG workspace",
      productURL: "https://www.servicenow.com/products/esg-management.html"
    }
  ]
};
