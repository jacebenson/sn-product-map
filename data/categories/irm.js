module.exports = {
  name: "Integrated Risk Mgmt",
  products: [
    { 
      name: "Policy & Compliance Mgmt", 
      tables: [
        { "sn_compliance_policy": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Manage policies",
      productURL: "https://www.servicenow.com/products/policy-compliance-management.html"
    },
    { 
      name: "Risk Mgmt", 
      tables: [
        { "sn_risk_risk": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Risk management",
      productURL: "https://www.servicenow.com/products/risk-management.html"
    },
    { 
      name: "Audit Mgmt", 
      tables: [
        { "sn_audit_entity": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Audit management",
      productURL: "https://www.servicenow.com/products/audit-management.html"
    }
  ]
};
