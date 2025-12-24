export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/assets');

    eleventyConfig.addGlobalData("permalink", () => {
    return (data) => {
      return `${data.page.filePathStem}.html`;
    };
  });
    
    return {
        dir: {
            input: 'src',
            output: 'public',
        }
    };
};