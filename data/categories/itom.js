module.exports = {
  name: "IT Operations Mgmt",
  products: [
    { 
      name: "Discovery", 
      tables: [
        { "cmdb_ci": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Discover IT infrastructure",
      productURL: "https://www.servicenow.com/products/discovery.html"
    },
    { 
      name: "Service Mapping", 
      tables: [
        { "cmdb_ci_service": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Map business services",
      productURL: "https://www.servicenow.com/products/service-mapping.html"
    },
    { 
      name: "Service Graph Connectors", 
      tables: [
        { "sn_cfg_sgc": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Connect to service graphs",
      productURL: "https://www.servicenow.com/products/opentelemetry-service-mapping.html"
    },
    { 
      name: "Firewall Audit", 
      tables: [
        { "sn_itom_firewall_rule": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Audit firewall rules",
      productURL: "https://www.servicenow.com/products/firewall-audit-reporting.html"
    },
    { 
      name: "Certificate Mgmt", 
      tables: [
        { "sn_itom_certificate": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Manage SSL certificates",
      productURL: "https://www.servicenow.com/products/certificate-management.html"
    },
    { 
      name: "Tag Governance", 
      tables: [
        { "sn_itom_tag": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Govern cloud tags",
      productURL: "https://www.servicenow.com/products/cloud-management.html"
    },
    { 
      name: "Agent Client Connector", 
      tables: [
        { "sn_itom_acc": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Agent-based monitoring",
      productURL: "https://www.servicenow.com/products/agent-client-collector.html"
    },
    { 
      name: "Event Mgmt", 
      tables: [
        { "em_event": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Manage IT events",
      productURL: "https://www.servicenow.com/products/event-management.html"
    },
    { 
      name: "Metric Intelligence", 
      tables: [
        { "sn_itom_metric": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Metric analysis",
      productURL: "https://www.servicenow.com/products/metric-intelligence.html"
    },
    { 
      name: "Predictive AIOps", 
      tables: [
        { "sn_aiops_alert": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "AI-powered operations",
      productURL: "https://www.servicenow.com/products/predictive-aiops.html"
    },
    { 
      name: "Health Log Analytics", 
      tables: [
        { "sn_itom_log": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Log analytics",
      productURL: "https://www.servicenow.com/products/health-log-analytics.html"
    },
    { 
      name: "Site Reliablility Mgmt", 
      tables: [
        { "sn_itom_srm": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Site reliability engineering",
      productURL: "https://www.servicenow.com/products/observability.html"
    },
    { 
      name: "Intellegent CMDB Search", 
      tables: [
        { "cmdb_ci": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "AI-powered CMDB search",
      productURL: "https://www.servicenow.com/products/it-operations-management.html"
    },
    { 
      name: "Cloud Migration Assessment", 
      tables: [
        { "sn_itom_cloud_assessment": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Assess cloud migrations",
      productURL: "https://www.servicenow.com/products/cloud-insights.html"
    },
    { 
      name: "Cloud Service Catalog", 
      tables: [
        { "sn_itom_cloud_service": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Cloud service catalog",
      productURL: "https://www.servicenow.com/products/cloud-management.html"
    },
    { 
      name: "Cloud Account Mgmt", 
      tables: [
        { "sn_itom_cloud_account": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Manage cloud accounts",
      productURL: "https://www.servicenow.com/products/cloud-management.html"
    },
    { 
      name: "Now Assist for ITOM", 
      tables: [
        { "sys_ai_assist": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "AI for IT operations",
      productURL: "https://www.servicenow.com/products/it-operations-management.html"
    }
  ]
};
