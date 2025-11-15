module.exports = {
  name: "Sales and Order Mgmt",
  products: [
    { 
      name: "Opportunity Mgmt", 
      tables: [
        { "opportunity": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Manage sales opportunities",
      productURL: "https://www.servicenow.com/products/order-management.html"
    },
    { 
      name: "Quote Mgmt", 
      tables: [
        { "quote": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Create and manage quotes",
      productURL: "https://www.servicenow.com/products/order-management.html"
    },
    { 
      name: "Order Fulfillment", 
      tables: [
        { "order": "sys_created_onRELATIVEGT@dayofweek@ago@90" },
        { "order_line": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Fulfill customer orders",
      productURL: "https://www.servicenow.com/products/order-management.html"
    }
  ]
};
