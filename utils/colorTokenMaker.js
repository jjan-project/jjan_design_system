const fs = require("fs");
const tokenJson = require("../token.json");

function transformTokens(obj, prefix = "") {
  let css = "";

  for (const key in obj) {
    const value = obj[key].value;
    const type = obj[key].type;
    if (value && type && type === "color") {
      css += `--color-${prefix}${key}: ${value};\n`;
    } else if (type && type !== "color") {
      return css;
    } else {
      css += transformTokens(obj[key], `${prefix}${key}-`);
    }
  }

  return css;
}

const cssContent = `:root {\n${transformTokens(tokenJson.global)}}`;

fs.writeFile("./styles/color-tokens.css", cssContent, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("Color tokens successfully generated!");
  }
});
