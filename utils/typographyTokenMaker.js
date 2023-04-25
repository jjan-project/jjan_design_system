const fs = require("fs");
const jsonData = require("../token.json");

const { lineHeights, fontWeights, fontSize, letterSpacing, header, body } =
  jsonData.global;

const addNewLine = (content) => {
  return content + "\n";
};

const createGlobalTokens = () => {
  let globalTokens = ":root {\n";

  Object.keys(lineHeights).forEach((key) => {
    globalTokens += `  --text-line-height-${key}: ${lineHeights[key].value}px;\n`;
  });

  globalTokens = addNewLine(globalTokens);

  Object.keys(fontWeights).forEach((key) => {
    const value = fontWeights[key].value === "Bold" ? "bold" : "normal";
    globalTokens += `  --text-font-weight-${key}: ${value};\n`;
  });

  globalTokens = addNewLine(globalTokens);

  Object.keys(fontSize).forEach((key) => {
    globalTokens += `  --text-font-size-${key}: ${fontSize[key].value}px;\n`;
  });

  globalTokens = addNewLine(globalTokens);

  Object.keys(letterSpacing).forEach((key) => {
    const valueWithoutPercentage = letterSpacing[key].value.replace("%", "");
    globalTokens += `  --text-letter-spacing-${key}: ${valueWithoutPercentage}%;\n`;
  });

  globalTokens += "}\n\n";

  return globalTokens;
};

const extractNumber = (str) => {
  const regex = /\d+/;
  const match = str.match(regex);
  return match ? match[0] : null;
};

const createCssClass = (className, style) => {
  let cssClass = `.${className} {\n`;
  cssClass += `  font-size: var(--text-font-size-${extractNumber(
    style["fontSize"]
  )});\n`;
  cssClass += `  font-weight: var(--text-font-weight-${extractNumber(
    style["fontWeight"]
  )});\n`;
  cssClass += `  line-height: var(--text-line-height-${extractNumber(
    style["lineHeight"]
  )});\n`;
  cssClass += `  letter-spacing: var(--text-letter-spacing-${extractNumber(
    style["letterSpacing"]
  )});\n`;

  cssClass += "}\n\n";

  return cssClass;
};

const createCssFile = () => {
  let cssContent = createGlobalTokens();

  Object.keys(header).forEach((key) => {
    cssContent += createCssClass(key, header[key].value);
  });

  Object.keys(body).forEach((key) => {
    cssContent += createCssClass(key, body[key].value);
  });

  fs.writeFile("./styles/typography-token.css", cssContent, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Typography tokens successfully generated!");
    }
  });
};

createCssFile();
