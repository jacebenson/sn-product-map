module.exports = {
  name: "Sales and Order Mgmt",
  products: [
    { name: "Opportunity Mgmt", tables: ["opportunity"], description: "Manage sales opportunities", productURL: "https://www.servicenow.com/products/order-management.html" },
    { name: "Quote Mgmt", tables: ["quote"], description: "Create and manage quotes", productURL: "https://www.servicenow.com/products/order-management.html" },
    { name: "Order Fulfillment", tables: ["order", "order_line"], description: "Fulfill customer orders", productURL: "https://www.servicenow.com/products/order-management.html" }
  ]
};
