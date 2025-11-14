module.exports = {
  name: "Admin & Config",
  products: [
    { 
      name: "Admin Center", 
      tables: [
        { "sys_properties": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Admin console",
      productURL: "https://www.servicenow.com/products/admin-center.html"
    },
    { 
      name: "Web UI & Mobile Builder", 
      tables: [
        { "sys_ux_page": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "UI builder",
      productURL: "https://www.servicenow.com/products/mobile-app-builder.html"
    },
    { 
      name: "ServiceNow IDE", 
      tables: [
        { "sys_script": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Development IDE",
      productURL: "https://www.servicenow.com/products/creator-studio.html"
    },
    { 
      name: "Workflow Studio", 
      tables: [
        { "wf_workflow": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Workflow designer",
      productURL: "https://www.servicenow.com/products/platform-flow-designer.html"
    },
    { 
      name: "Advanced Work Assignment", 
      tables: [
        { "awa_assignment": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Work assignment",
      productURL: "https://www.servicenow.com/products/workflow.html"
    },
    { 
      name: "Automated Test Framework", 
      tables: [
        { "sys_atf_test": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Test automation",
      productURL: "https://www.servicenow.com/products/automated-test-framework.html"
    },
    { 
      name: "Seamless upgrades", 
      tables: [
        { "sys_update_xml": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Upgrade management",
      productURL: "https://www.servicenow.com/products/now-platform/latest-release.html"
    },
    { 
      name: "Domain Separation", 
      tables: [
        { "domain": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Multi-tenancy",
      productURL: "https://www.servicenow.com/products/now-platform.html"
     }
  ]
};
