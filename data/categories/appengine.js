module.exports = {
  name: "App Engine",
  products: [
    { 
      name: "App Engine Studio", 
      tables: [
        { "sys_app": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Low-code app builder",
      productURL: "https://www.servicenow.com/products/app-engine-studio.html"
    },
    { 
      name: "App Template", 
      tables: [
        { "sys_app_template": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "App templates",
      productURL: "https://www.servicenow.com/products/now-platform-app-engine.html"
    },
    { 
      name: "Unlimited Custom Apps and Tables", 
      tables: [
        { "sys_db_object": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "Custom development",
      productURL: "https://www.servicenow.com/products/now-platform-app-engine.html"
    },
    { 
      name: "App Engine Mgmt Center", 
      tables: [
        { "sys_app_mgmt": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "App management",
      productURL: "https://www.servicenow.com/products/app-development-governance.html"
    },
    { 
      name: "Now Assist for Creator", 
      tables: [
        { "sys_ai_assist": "sys_created_onRELATIVEGT@dayofweek@ago@90" }
      ], 
      description: "AI for creators",
      productURL: "https://www.servicenow.com/products/creator-studio.html"
    }
  ]
};
