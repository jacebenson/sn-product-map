module.exports = {
  name: "Healthcare & Life Sciences",
  products: [
    { 
      name: "Healthcare Data Model", 
      tables: [
        { "sn_hls_patient": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" },
        { "sn_hls_provider": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Healthcare-specific data model",
      productURL: "https://www.servicenow.com/products/healthcare-life-sciences.html"
    },
    { 
      name: "Patient Support Services", 
      tables: [
        { "sn_hls_patient_case": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Support patient services",
      productURL: "https://www.servicenow.com/products/healthcare-life-sciences.html"
    },
    { 
      name: "Pre-visit Mgmt", 
      tables: [
        { "sn_hls_pre_visit": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Manage pre-visit processes",
      productURL: "https://www.servicenow.com/products/healthcare-life-sciences.html"
    },
    { 
      name: "EMR Help", 
      tables: [
        { "sn_hls_emr": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Electronic medical record support",
      productURL: "https://www.servicenow.com/products/healthcare-life-sciences.html"
    },
    { 
      name: "Clinical Device Mgmt", 
      tables: [
        { "sn_hls_clinical_device": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Manage clinical devices",
      productURL: "https://www.servicenow.com/products/healthcare-life-sciences.html"
    }
  ]
};
