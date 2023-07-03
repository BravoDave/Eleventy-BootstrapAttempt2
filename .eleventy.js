module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/blog");
  eleventyConfig.addPassthroughCopy("bundle.js");
 
    return {
      dir: {
        input: "src",
        output: "public",
      },    
    };
  };

