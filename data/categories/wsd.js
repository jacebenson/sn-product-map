module.exports = {
  name: "Workspace Service Delivery",
  products: [
    { 
      name: "Workplace Case Mgmt", 
      tables: [
        { "sn_workplace_case": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Manage workplace cases",
      productURL: "https://www.servicenow.com/products/workplace-service-delivery.html"
    },
    { 
      name: "Workplace Reservation", 
      tables: [
        { "sn_workplace_reservation": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Reserve workspace",
      productURL: "https://www.servicenow.com/products/workplace-service-delivery.html"
    },
    { 
      name: "Workplace Space Mgmt", 
      tables: [
        { "sn_workplace_space": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Manage workspace",
      productURL: "https://www.servicenow.com/products/workplace-service-delivery.html"
    },
    { 
      name: "Workplace Visitor Mgmt", 
      tables: [
        { "sn_workplace_visitor": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Manage visitors",
      productURL: "https://www.servicenow.com/products/workplace-service-delivery.html"
    },
    { 
      name: "Indoor Mapping", 
      tables: [
        { "sn_spm_map": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Indoor mapping",
      productURL: "https://www.servicenow.com/products/workplace-service-delivery.html"
    }
  ]
};
