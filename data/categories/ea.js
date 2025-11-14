module.exports = {
  name: "Enterprise Architecture",
  products: [
    { 
      name: "Business Application Inventory", 
      tables: [
        { "cmdb_ci_appl": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Application inventory",
      productURL: "https://www.servicenow.com/products/enterprise-architecture.html"
    },
    { 
      name: "Application Rationalization", 
      tables: [
        { "sn_ea_app_rationalization": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Rationalize applications",
      productURL: "https://www.servicenow.com/products/enterprise-architecture.html"
    },
    { 
      name: "Technology Portfolio Mgmt", 
      tables: [
        { "sn_ea_tech_portfolio": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Technology portfolio",
      productURL: "https://www.servicenow.com/products/enterprise-architecture.html"
    }
  ]
};
