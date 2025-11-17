import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import vm from 'vm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function(eleventyConfig) {
  // Copy static assets from src to output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  
  // Ignore data and other directories
  eleventyConfig.ignores.add("../data/**");
  eleventyConfig.ignores.add("../scripts/**");
  eleventyConfig.ignores.add("../entitlements/**");
  eleventyConfig.ignores.add("../node_modules/**");
  eleventyConfig.ignores.add("../README.md");
  eleventyConfig.ignores.add("../ERROR.md");
  eleventyConfig.ignores.add("../USAGE.md");
  eleventyConfig.ignores.add("../AGENTS.md");
  
  // Load all category modules using vm
  const categoriesDir = path.join(__dirname, 'data', 'categories');
  const categoryFiles = fs.readdirSync(categoriesDir).filter(file => file.endsWith('.js'));
  
  const categories = categoryFiles.map(file => {
    const filePath = path.join(categoriesDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const sandbox = { module: { exports: {} }, exports: {} };
    vm.createContext(sandbox);
    vm.runInContext(fileContent, sandbox);
    return sandbox.module.exports;
  });
  
  // Add global data
  eleventyConfig.addGlobalData("capabilities", { categories: categories });
  
  // Create a collection for entitlement schedules
  eleventyConfig.addCollection("entitlementSchedules", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/entitlement-schedules/*.md")
      .sort((a, b) => {
        const titleA = a.data.title || '';
        const titleB = b.data.title || '';
        return titleA.localeCompare(titleB);
      });
  });
  
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
