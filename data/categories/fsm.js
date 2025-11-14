module.exports = {
  name: "Field Service Mgmt",
  products: [
    { name: "Work Order Mgmt", tables: ["wm_order", "wm_task"], description: "Manage field service work orders", productURL: "https://www.servicenow.com/products/field-service-management.html" },
    { name: "Dynamic Scheduling and Dispatch", tables: ["wm_dispatch_schedule"], description: "Optimize field technician scheduling", productURL: "https://www.servicenow.com/products/dynamic-scheduling.html" },
    { name: "Planned Work Mgmt", tables: ["wm_planned_work"], description: "Plan maintenance work", productURL: "https://www.servicenow.com/products/field-service-management.html" },
    { name: "Territory Mgmt", tables: ["wm_territory"], description: "Define service territories", productURL: "https://www.servicenow.com/products/field-service-management.html" },
    { name: "Field Service Contractor Mgmt", tables: ["wm_contractor"], description: "Manage contractors", productURL: "https://www.servicenow.com/products/field-service-contractor-management.html" },
    { name: "Dispatcher Workspace", tables: ["wm_dispatch"], description: "Dispatcher console", productURL: "https://www.servicenow.com/products/dispatcher-workspace.html" },
    { name: "Site Mapping", tables: ["wm_site_map"], description: "Map service sites", productURL: "https://www.servicenow.com/products/field-service-management.html" },
    { name: "Linear Asset Support", tables: ["wm_linear_asset"], description: "Manage linear assets", productURL: "https://www.servicenow.com/products/field-service-management.html" },
    { name: "Now Assist for FSM", tables: ["sys_ai_assist"], description: "AI assistance for field service", productURL: "https://www.servicenow.com/products/field-service-management.html" }
  ]
};
