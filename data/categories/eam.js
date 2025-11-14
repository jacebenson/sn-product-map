module.exports = {
  name: "Enterprise Asset Mgmt",
  products: [
    { 
      name: "Enterprise Asset Mgmt", 
      tables: [
        { "alm_asset": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Enterprise-wide asset management",
      productURL: "https://www.servicenow.com/products/enterprise-asset-management.html"
    },
    { 
      name: "Enterprise Asset Lifecycle Mgmt", 
      tables: [
        { "alm_asset": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Asset lifecycle",
      productURL: "https://www.servicenow.com/products/enterprise-asset-management.html"
    },
    { 
      name: "Enterprise Asset Inventory Mgmt", 
      tables: [
        { "alm_stockroom": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Asset inventory",
      productURL: "https://www.servicenow.com/products/enterprise-asset-management.html"
    },
    { 
      name: "Indoor Mapping for Asset", 
      tables: [
        { "sn_spm_map": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Indoor asset mapping",
      productURL: "https://www.servicenow.com/products/enterprise-asset-management.html"
    }
  ]
};
