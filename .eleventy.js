const dayjs = require("dayjs");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation"); 

module.exports = function (config) {

  config.addPlugin(eleventyNavigationPlugin);

  // Pass-through images
  config.addPassthroughCopy("./_site/images");

  // Add Date filters
  config.addFilter("date", (dateObj) => {
    return dayjs(dateObj).format("MMMM D, YYYY");
  });

  config.addFilter("sitemapDate", (dateObj) => {
    return dayjs(dateObj).toISOString();
  });

  config.addFilter("year", () => {
    return dayjs().format("YYYY");
  });

  config.addFilter("makeUppercase", function(value) {
    return value.toUpperCase();
  });

  // Add pages collection
  config.addCollection("pages", function (collections) {
    return collections.getFilteredByTag("page").sort(function (a, b) {
      return a.data.order - b.data.order;
    });
  });

  // Add pages collection
  config.addCollection("projects", function (collections) {
    return collections.getFilteredByTag("project").sort(function (a, b) {
      return a.data.order - b.data.order;
    });
  });

  config.addFilter('dumpit', obj => {
    const getCircularReplacer = () => {
      const seen = new WeakSet();
      return (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
        }
        return value;
      };
    };
  
    return JSON.stringify(obj, getCircularReplacer(), 4);
  });

  config.addCollection('mainSubpages', function(collectionApi) {
    return collectionApi.getFilteredByTag("navitem")
        .sort((a, b) => b.data.order - a.data.order);
  });

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "_site",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
      output: "dist",
    },
  };
};
