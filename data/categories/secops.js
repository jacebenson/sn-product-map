module.exports = {
  name: "Security Operations",
  products: [
    { 
      name: "Security Incident Response", 
      tables: [
        { "sn_si_incident": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Respond to security incidents",
      productURL: "https://www.servicenow.com/products/security-incident-response.html"
    },
    { 
      name: "Vulnerability Response", 
      tables: [
        { "sn_vul_vulnerable_item": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Manage vulnerabilities",
      productURL: "https://www.servicenow.com/products/vulnerability-response.html"
    },
    { 
      name: "VR Patch Orchestration", 
      tables: [
        { "sn_vul_patch": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Orchestrate patching",
      productURL: "https://www.servicenow.com/products/vulnerability-response.html"
    },
    { 
      name: "Data Loss Prevention Incident Response", 
      tables: [
        { "sn_si_dlp_incident": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "DLP incident management",
      productURL: "https://www.servicenow.com/products/security-operations.html"
    },
    { 
      name: "Security Posture Control", 
      tables: [
        { "sn_sec_posture": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Control security posture",
      productURL: "https://www.servicenow.com/products/security-operations.html"
    }
  ]
};
