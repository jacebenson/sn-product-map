module.exports = {
  name: "App Engine for ERP",
  products: [
    { 
      name: "ERP Customization Mining", 
      tables: [
        { "sn_erp_custom": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Mine ERP customizations",
      productURL: "https://www.servicenow.com/products/now-platform-app-engine.html"
    },
    { 
      name: "ERP Canvas", 
      tables: [
        { "sn_erp_canvas": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "ERP integration canvas",
      productURL: "https://www.servicenow.com/products/now-platform-app-engine.html"
    }
  ]
};
