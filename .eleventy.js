module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/blog");
 
    return {
      dir: {
        input: "src",
        output: "public",
      },    
    };
  };

