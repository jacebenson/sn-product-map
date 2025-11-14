module.exports = {
  name: "Security & Compliance",
  products: [
    { name: "ACLs & Roles", tables: ["sys_security_acl"], description: "Access control", productURL: "https://www.servicenow.com/products/security-center.html" },
    { name: "LDAP Integration", tables: ["ldap_server_config"], description: "LDAP authentication", productURL: "https://www.servicenow.com/products/security-center.html" },
    { name: "ServiceNow Security Center", tables: ["sys_security_center"], description: "Security dashboard", productURL: "https://www.servicenow.com/products/instance-security-center.html" },
    { name: "Multi-Factor Authentication", tables: ["sys_mfa"], description: "MFA authentication", productURL: "https://www.servicenow.com/products/security-center.html" },
    { name: "Antivirus Scanning", tables: ["sys_attachment"], description: "Virus scanning", productURL: "https://www.servicenow.com/products/security-center.html" },
    { name: "Deny Unless ACLs", tables: ["sys_security_acl"], description: "Strict ACLs", productURL: "https://www.servicenow.com/products/security-center.html" },
    { name: "Subscription Mgmt", tables: ["sys_subscription"], description: "Subscriptions", productURL: "https://www.servicenow.com/products/security-center.html" },
    { name: "Database Encryption", tables: ["sys_encryption"], description: "Database encryption", productURL: "https://www.servicenow.com/products/platform-encryption.html" },
    { name: "Cloud Encryption", tables: ["sys_encryption"], description: "Cloud encryption", productURL: "https://www.servicenow.com/products/cloud-encryption.html" },
    { name: "Column Encryption", tables: ["sys_encryption_context"], description: "Column-level encryption", productURL: "https://www.servicenow.com/products/column-level-encryption.html" },
    { name: "Full Disk Encryption", tables: ["sys_encryption"], description: "Disk encryption", productURL: "https://www.servicenow.com/products/platform-encryption.html" },
    { name: "CLE Enterprise Key Mgmt Framework (KMF)", tables: ["sys_encryption_key"], description: "Key management", productURL: "https://www.servicenow.com/products/column-level-encryption.html" },
    { name: "Vault", tables: ["sys_vault"], description: "Secret vault", productURL: "https://www.servicenow.com/products/platform-encryption.html" },
    { name: "FEDRAMP / GCC", tables: ["sys_compliance"], description: "Federal compliance", productURL: "https://www.servicenow.com/products/governance-risk-and-compliance.html" }
  ]
};
