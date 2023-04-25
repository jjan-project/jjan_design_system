const fs = require("fs");
const tokenJson = require("../token.json");

const boxShadow = tokenJson.global.boxShadow;
const css = [];

for (const key in boxShadow) {
  const shadow = boxShadow[key].value;
  const cssBoxShadow = `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`;
  css.push(`.box-shadow-${key} { box-shadow: ${cssBoxShadow}; }`);
}

const cssCode = css.join("\n");

fs.writeFile("./styles/box_shadow-tokens.css", cssCode, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("Box Shadow tokens successfully generated!");
  }
});
