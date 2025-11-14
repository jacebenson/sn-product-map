module.exports = {
  name: "Sales and Order Mgmt",
  products: [
    { 
      name: "Opportunity Mgmt", 
      tables: [
        { "opportunity": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Manage sales opportunities",
      productURL: "https://www.servicenow.com/products/order-management.html"
    },
    { 
      name: "Quote Mgmt", 
      tables: [
        { "quote": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Create and manage quotes",
      productURL: "https://www.servicenow.com/products/order-management.html"
    },
    { 
      name: "Order Fulfillment", 
      tables: [
        { "order": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" },
        { "order_line": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Fulfill customer orders",
      productURL: "https://www.servicenow.com/products/order-management.html"
    }
  ]
};
