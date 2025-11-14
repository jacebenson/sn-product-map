module.exports = {
  name: "Integration Services",
  products: [
    { name: "Web Services", tables: ["sys_web_service"], description: "Web service APIs", productURL: "https://www.servicenow.com/products/api-integrations.html" },
    { name: "Import & Export", tables: ["sys_import_set"], description: "Data import/export", productURL: "https://www.servicenow.com/products/api-integrations.html" },
    { name: "Inbound Email", tables: ["sys_email"], description: "Email integration", productURL: "https://www.servicenow.com/products/api-integrations.html" },
    { name: "Embedded Integrations", tables: ["sys_integration"], description: "Pre-built integrations", productURL: "https://www.servicenow.com/products/integration-hub.html" },
    { name: "IntegrationHub", tables: ["sys_hub_action_instance"], description: "Integration hub", productURL: "https://www.servicenow.com/products/integration-hub.html" },
    { name: "Instance Data Replication", tables: ["sys_replication"], description: "Data replication", productURL: "https://www.servicenow.com/products/api-integrations.html" }
  ]
};
