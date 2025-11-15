module.exports = {
  name: "Legal Service Delivery",
  products: [
    { 
      name: "Legal Request Mgmt", 
      tables: [
        { "sn_legal_request": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Manage legal requests",
      productURL: "https://www.servicenow.com/products/legal-service-delivery.html"
    },
    { 
      name: "Legal Matter Mgmt", 
      tables: [
        { "sn_legal_matter": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Manage legal matters",
      productURL: "https://www.servicenow.com/products/legal-service-delivery.html"
    },
    { 
      name: "Legal Counsel Center", 
      tables: [
        { "sn_legal_counsel": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Legal counsel workspace",
      productURL: "https://www.servicenow.com/products/legal-service-delivery.html"
    }
  ]
};
