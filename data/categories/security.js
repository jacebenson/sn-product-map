module.exports = {
  name: "Security & Compliance",
  products: [
    { 
      name: "ACLs & Roles", 
      tables: [
        { "sys_security_acl": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Access control",
      productURL: "https://www.servicenow.com/products/security-center.html"
    },
    { 
      name: "LDAP Integration", 
      tables: [
        { "ldap_server_config": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "LDAP authentication",
      productURL: "https://www.servicenow.com/products/security-center.html"
    },
    { 
      name: "ServiceNow Security Center", 
      tables: [
        { "sys_security_center": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Security dashboard",
      productURL: "https://www.servicenow.com/products/instance-security-center.html"
    },
    { 
      name: "Multi-Factor Authentication", 
      tables: [
        { "sys_mfa": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "MFA authentication",
      productURL: "https://www.servicenow.com/products/security-center.html"
    },
    { 
      name: "Antivirus Scanning", 
      tables: [
        { "sys_attachment": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Virus scanning",
      productURL: "https://www.servicenow.com/products/security-center.html"
    },
    { 
      name: "Deny Unless ACLs", 
      tables: [
        { "sys_security_acl": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Strict ACLs",
      productURL: "https://www.servicenow.com/products/security-center.html"
    },
    { 
      name: "Subscription Mgmt", 
      tables: [
        { "sys_subscription": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Subscriptions",
      productURL: "https://www.servicenow.com/products/security-center.html"
    },
    { 
      name: "Database Encryption", 
      tables: [
        { "sys_encryption": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Database encryption",
      productURL: "https://www.servicenow.com/products/platform-encryption.html"
    },
    { 
      name: "Cloud Encryption", 
      tables: [
        { "sys_encryption": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Cloud encryption",
      productURL: "https://www.servicenow.com/products/cloud-encryption.html"
    },
    { 
      name: "Column Encryption", 
      tables: [
        { "sys_encryption_context": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Column-level encryption",
      productURL: "https://www.servicenow.com/products/column-level-encryption.html"
    },
    { 
      name: "Full Disk Encryption", 
      tables: [
        { "sys_encryption": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Disk encryption",
      productURL: "https://www.servicenow.com/products/platform-encryption.html"
    },
    { 
      name: "CLE Enterprise Key Mgmt Framework (KMF)", 
      tables: [
        { "sys_encryption_key": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Key management",
      productURL: "https://www.servicenow.com/products/column-level-encryption.html"
    },
    { 
      name: "Vault", 
      tables: [
        { "sys_vault": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Secret vault",
      productURL: "https://www.servicenow.com/products/platform-encryption.html"
    },
    { 
      name: "FEDRAMP / GCC", 
      tables: [
        { "sys_compliance": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Federal compliance",
      productURL: "https://www.servicenow.com/products/governance-risk-and-compliance.html"
    }
  ]
};
