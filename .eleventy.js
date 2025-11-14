module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  
  // Load all category modules
  const fs = require('fs');
  const path = require('path');
  
  const categoriesDir = path.join(__dirname, 'data', 'categories');
  const categoryFiles = fs.readdirSync(categoriesDir).filter(file => file.endsWith('.js'));
  
  const categories = categoryFiles.map(file => {
    return require(path.join(categoriesDir, file));
  });
  
  // Add global data
  eleventyConfig.addGlobalData("products", require("./products.json"));
  eleventyConfig.addGlobalData("capabilities", { categories: categories });
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
