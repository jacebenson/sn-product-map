module.exports = {
  name: "Automation Engine",
  products: [
    { 
      name: "Integration Hub", 
      tables: [
        { "sys_hub_action_instance": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Integration automation",
      productURL: "https://www.servicenow.com/products/integration-hub.html"
    },
    { 
      name: "RPA Hub", 
      tables: [
        { "sn_rpa_hub": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "RPA management",
      productURL: "https://www.servicenow.com/products/robotic-process-automation.html"
    },
    { 
      name: "Unattended Robots", 
      tables: [
        { "sn_rpa_robot": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Unattended automation",
      productURL: "https://www.servicenow.com/products/robotic-process-automation.html"
    },
    { 
      name: "Attended Robots", 
      tables: [
        { "sn_rpa_robot": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Attended automation",
      productURL: "https://www.servicenow.com/products/robotic-process-automation.html"
    },
    { 
      name: "Document Intelligence", 
      tables: [
        { "sn_doc_intelligence": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Document AI",
      productURL: "https://www.servicenow.com/products/automation-engine.html"
    },
    { 
      name: "Automation Center", 
      tables: [
        { "sn_automation_center": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Automation dashboard",
      productURL: "https://www.servicenow.com/products/automation-center.html"
    },
    { 
      name: "Stream Connect for Apache Kafka", 
      tables: [
        { "sn_stream_connect": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Kafka integration",
      productURL: "https://www.servicenow.com/products/automation-engine.html"
    }
  ]
};
