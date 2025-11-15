module.exports = {
  name: "Operational Technology",
  products: [
    { 
      name: "OT Visibility", 
      tables: [
        { "sn_ot_asset": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "OT asset visibility",
      productURL: "https://www.servicenow.com/products/operational-technology-management.html"
    },
    { 
      name: "OT Vulnerability Response", 
      tables: [
        { "sn_ot_vulnerability": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "OT vulnerability management",
      productURL: "https://www.servicenow.com/products/operational-technology-management.html"
    },
    { 
      name: "OT Service Mgmt", 
      tables: [
        { "sn_ot_case": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "OT service management",
      productURL: "https://www.servicenow.com/products/operational-technology-management.html"
    },
    { 
      name: "OT Asset Mgmt", 
      tables: [
        { "sn_ot_asset": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Manage OT assets",
      productURL: "https://www.servicenow.com/products/operational-technology-management.html"
    }
  ]
};
