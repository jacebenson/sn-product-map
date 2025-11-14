module.exports = {
  name: "HR Service Delivery",
  products: [
    { 
      name: "HR Case Mgmt", 
      tables: [
        { "sn_hr_core_case": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Manage HR cases",
      productURL: "https://www.servicenow.com/products/hr-case-management.html"
    },
    { 
      name: "Campaign Automation", 
      tables: [
        { "sn_hr_campaign": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Automate HR campaigns",
      productURL: "https://www.servicenow.com/products/hr-service-delivery.html"
    },
    { 
      name: "Enterprise Onboarding and Transitions", 
      tables: [
        { "sn_hr_onboarding": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Employee onboarding",
      productURL: "https://www.servicenow.com/products/employee-onboarding.html"
    },
    { 
      name: "Employee Journey Mgmt", 
      tables: [
        { "sn_hr_journey": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Manage employee journeys",
      productURL: "https://www.servicenow.com/products/employee-journey.html"
    },
    { 
      name: "Employee Document Mgmt", 
      tables: [
        { "sn_hr_document": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Manage employee documents",
      productURL: "https://www.servicenow.com/products/hr-doc-management.html"
    },
    { 
      name: "Listening Posts", 
      tables: [
        { "sn_hr_listening_post": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "Employee feedback",
      productURL: "https://www.servicenow.com/products/hr-service-delivery.html"
    },
    { 
      name: "Now Assist for HRSD", 
      tables: [
        { "sys_ai_assist": "sys_created_onRELATIVEGT@dayofweek@ago@90^ORDERBYDESCsys_created_on" }
      ], 
      description: "AI for HR",
      productURL: "https://www.servicenow.com/products/hr-service-delivery.html"
    }
  ]
};
