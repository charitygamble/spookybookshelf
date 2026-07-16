import path from "node:path";
import { fileURLToPath } from "node:url";
import { DateTime } from "luxon";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function(eleventyConfig) {
  // 1. Assets Passthrough
  eleventyConfig.addPassthroughCopy('src/assets');

  // 2. Global permalink handling
  eleventyConfig.addGlobalData("permalink", () => {
    return (data) => {
      return `${data.page.filePathStem}.html`;
    };
  });

  // 3. Human-readable date filter (e.g., "July 15, 2026")
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toLocaleString(DateTime.DATE_FULL);
  });

  // 4. Double-extension collector (handles old .html and new .html/.md from Decap)
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.{html,md}");
  });

  // 5. Build directory settings
  return {
    dir: {
      input: 'src',
      output: 'public',
      includes: '_includes',
    }
  };
};