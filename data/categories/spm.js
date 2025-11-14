module.exports = {
  name: "Strategic Portfolio Mgmt (SPM)",
  products: [
    { 
      name: "Demand Mgmt", 
      tables: [
        { "dm_demand": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Manage demand",
      productURL: "https://www.servicenow.com/products/demand-management.html"
    },
    { 
      name: "Project & Portfolio Mgmt", 
      tables: [
        { "pm_project": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Project management",
      productURL: "https://www.servicenow.com/products/project-portfolio-management.html"
    },
    { 
      name: "Resource Mgmt", 
      tables: [
        { "resource_plan": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Resource planning",
      productURL: "https://www.servicenow.com/products/resource-management.html"
    },
    { 
      name: "Investment Funding", 
      tables: [
        { "pm_investment": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Investment tracking",
      productURL: "https://www.servicenow.com/products/strategic-portfolio-management.html"
    },
    { 
      name: "Roadmap Planning", 
      tables: [
        { "pm_roadmap": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Product roadmaps",
      productURL: "https://www.servicenow.com/products/strategic-portfolio-management.html"
    },
    { 
      name: "Agile Dev & Test", 
      tables: [
        { "rm_story": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Agile development",
      productURL: "https://www.servicenow.com/products/agile-development.html"
    },
    { 
      name: "Scenario Planning", 
      tables: [
        { "pm_scenario": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Scenario planning",
      productURL: "https://www.servicenow.com/products/strategic-portfolio-management.html"
    },
    { 
      name: "Timecards", 
      tables: [
        { "time_card": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Time tracking",
      productURL: "https://www.servicenow.com/products/strategic-portfolio-management.html"
    },
    { 
      name: "Now Assist for SPM", 
      tables: [
        { "sys_ai_assist": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "AI for portfolio management",
      productURL: "https://www.servicenow.com/products/strategic-portfolio-management.html"
    }
  ]
};
