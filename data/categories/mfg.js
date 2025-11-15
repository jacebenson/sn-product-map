module.exports = {
  name: "Manufacturing",
  products: [
    { 
      name: "OT Manager", 
      tables: [
        { "sn_mfg_ot_asset": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Operational technology management",
      productURL: "https://www.servicenow.com/products/manufacturing-commercial-operations.html"
    },
    { 
      name: "Manufacturing Processing Manager", 
      tables: [
        { "sn_mfg_process": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Manufacturing process management",
      productURL: "https://www.servicenow.com/products/manufacturing-commercial-operations.html"
    }
  ]
};
