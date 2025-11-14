module.exports = {
  name: "Admin & Config",
  products: [
    { 
      name: "Admin Center", 
      tables: ["sys_properties"], 
      description: "Admin console",
      productURL: "https://www.servicenow.com/products/admin-center.html"
    },
    { 
      name: "Web UI & Mobile Builder", 
      tables: ["sys_ux_page"], 
      description: "UI builder",
      productURL: "https://www.servicenow.com/products/mobile-app-builder.html"
    },
    { 
      name: "ServiceNow IDE", 
      tables: ["sys_script"], 
      description: "Development IDE",
      productURL: "https://www.servicenow.com/products/creator-studio.html"
    },
    { 
      name: "Workflow Studio", 
      tables: ["wf_workflow"], 
      description: "Workflow designer",
      productURL: "https://www.servicenow.com/products/platform-flow-designer.html"
    },
    { 
      name: "Advanced Work Assignment", 
      tables: ["awa_assignment"], 
      description: "Work assignment",
      productURL: "https://www.servicenow.com/products/workflow.html"
    },
    { 
      name: "Automated Test Framework", 
      tables: ["sys_atf_test"], 
      description: "Test automation",
      productURL: "https://www.servicenow.com/products/automated-test-framework.html"
    },
    { 
      name: "Seamless upgrades", 
      tables: ["sys_update_xml"], 
      description: "Upgrade management",
      productURL: "https://www.servicenow.com/products/now-platform/latest-release.html"
    },
    { 
      name: "Domain Separation", 
      tables: ["domain"], 
      description: "Multi-tenancy",
      productURL: "https://www.servicenow.com/products/now-platform.html"
     }
  ]
};
