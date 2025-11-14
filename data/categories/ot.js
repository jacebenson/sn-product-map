module.exports = {
  name: "Operational Technology",
  products: [
    { 
      name: "OT Visibility", 
      tables: [
        { "sn_ot_asset": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "OT asset visibility",
      productURL: "https://www.servicenow.com/products/operational-technology-management.html"
    },
    { 
      name: "OT Vulnerability Response", 
      tables: [
        { "sn_ot_vulnerability": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "OT vulnerability management",
      productURL: "https://www.servicenow.com/products/operational-technology-management.html"
    },
    { 
      name: "OT Service Mgmt", 
      tables: [
        { "sn_ot_case": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "OT service management",
      productURL: "https://www.servicenow.com/products/operational-technology-management.html"
    },
    { 
      name: "OT Asset Mgmt", 
      tables: [
        { "sn_ot_asset": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Manage OT assets",
      productURL: "https://www.servicenow.com/products/operational-technology-management.html"
    }
  ]
};
