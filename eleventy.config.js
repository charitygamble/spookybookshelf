import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
            includes: '_includes',
        }
    };
};