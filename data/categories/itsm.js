module.exports = {
  name: "IT Service Mgmt",
  products: [
    { name: "Incident Mgmt", tables: ["incident"], description: "Manage IT incidents", productURL: "https://www.servicenow.com/products/incident-management.html" },
    { name: "Problem Mgmt", tables: ["problem", "problem_task"], description: "Root cause analysis", productURL: "https://www.servicenow.com/products/problem-management.html" },
    { name: "Change Mgmt", tables: ["change_request"], description: "Manage IT changes", productURL: "https://www.servicenow.com/products/change-management.html" },
    { name: "Release Mgmt", tables: ["rm_release"], description: "Plan software releases", productURL: "https://www.servicenow.com/products/itsm.html" },
    { name: "Request Mgmt", tables: ["sc_request", "sc_req_item"], description: "Service requests", productURL: "https://www.servicenow.com/products/request-management.html" },
    { name: "Asset and Cost Mgmt", tables: ["alm_asset", "fm_expense_line"], description: "Asset lifecycle management", productURL: "https://www.servicenow.com/products/it-asset-management.html" },
    { name: "Continual Improvement", tables: ["sn_itsm_improvement"], description: "ITSM improvement tracking", productURL: "https://www.servicenow.com/products/continual-improvement.html" },
    { name: "Digital Portfolio Mgmt", tables: ["pm_project"], description: "IT portfolio management", productURL: "https://www.servicenow.com/products/digital-portfolio-management.html" },
    { name: "DevOps Change Velocity", tables: ["sn_devops_change"], description: "DevOps integration", productURL: "https://www.servicenow.com/products/devops-change-velocity.html" },
    { name: "ITSM Success Dashboard", tables: ["pa_dashboards"], description: "ITSM metrics dashboard", productURL: "https://www.servicenow.com/products/itsm.html" },
    { name: "Digital End-User Experience", tables: ["sn_deu_experience"], description: "Monitor end-user experience", productURL: "https://www.servicenow.com/products/digital-user-experience.html" },
    { name: "Now Assist for ITSM", tables: ["sys_ai_assist"], description: "AI for ITSM", productURL: "https://www.servicenow.com/products/itsm.html" }
  ]
};
