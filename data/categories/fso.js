module.exports = {
  name: "Financial Services Ops",
  products: [
    { 
      name: "Financial Service Data Model", 
      tables: [
        { "sn_fin_account": "sys_created_onRELATIVEGT@dayofweek@ago@90" },
        { "sn_fin_customer": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Financial services data model",
      productURL: "https://www.servicenow.com/products/financial-services-operations.html"
    },
    { 
      name: "Payment Operations", 
      tables: [
        { "sn_fin_payment": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Manage payment operations",
      productURL: "https://www.servicenow.com/products/financial-services-operations.html"
    },
    { 
      name: "Card Operations", 
      tables: [
        { "sn_fin_card": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Card management operations",
      productURL: "https://www.servicenow.com/products/financial-services-operations.html"
    },
    { 
      name: "Document Processing", 
      tables: [
        { "sn_fin_document": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Process financial documents",
      productURL: "https://www.servicenow.com/products/financial-services-operations.html"
    },
    { 
      name: "Loan Operations", 
      tables: [
        { "sn_fin_loan": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Loan management",
      productURL: "https://www.servicenow.com/products/financial-services-operations.html"
    },
    { 
      name: "Deposit Operations", 
      tables: [
        { "sn_fin_deposit": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Deposit operations",
      productURL: "https://www.servicenow.com/products/financial-services-operations.html"
    }
  ]
};
