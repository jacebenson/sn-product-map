module.exports = {
  name: "Field Service Mgmt",
  products: [
    { 
      name: "Work Order Mgmt", 
      tables: [
        { "wm_order": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" },
        { "wm_task": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Manage field service work orders",
      productURL: "https://www.servicenow.com/products/field-service-management.html"
    },
    { 
      name: "Dynamic Scheduling and Dispatch", 
      tables: [
        { "wm_dispatch_schedule": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Optimize field technician scheduling",
      productURL: "https://www.servicenow.com/products/dynamic-scheduling.html"
    },
    { 
      name: "Planned Work Mgmt", 
      tables: [
        { "wm_planned_work": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Plan maintenance work",
      productURL: "https://www.servicenow.com/products/field-service-management.html"
    },
    { 
      name: "Territory Mgmt", 
      tables: [
        { "wm_territory": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Define service territories",
      productURL: "https://www.servicenow.com/products/field-service-management.html"
    },
    { 
      name: "Field Service Contractor Mgmt", 
      tables: [
        { "wm_contractor": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Manage contractors",
      productURL: "https://www.servicenow.com/products/field-service-contractor-management.html"
    },
    { 
      name: "Dispatcher Workspace", 
      tables: [
        { "wm_dispatch": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Dispatcher console",
      productURL: "https://www.servicenow.com/products/dispatcher-workspace.html"
    },
    { 
      name: "Site Mapping", 
      tables: [
        { "wm_site_map": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Map service sites",
      productURL: "https://www.servicenow.com/products/field-service-management.html"
    },
    { 
      name: "Linear Asset Support", 
      tables: [
        { "wm_linear_asset": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Manage linear assets",
      productURL: "https://www.servicenow.com/products/field-service-management.html"
    },
    { 
      name: "Now Assist for FSM", 
      tables: [
        { "sys_ai_assist": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "AI assistance for field service",
      productURL: "https://www.servicenow.com/products/field-service-management.html"
    }
  ]
};
