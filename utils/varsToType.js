const fs = require("fs");

const cssFiles = ["./styles/typography-token.css", "./styles/color-tokens.css"];

const cssToTs = (cssContent) => {
  const regex = /--(.*?)-(.*?):\s*(.*?);/g;
  const values = {};

  let match;
  while ((match = regex.exec(cssContent)) !== null) {
    const typeName = match[1];
    const valueName = match[2];

    if (!values[typeName]) {
      values[typeName] = new Set();
    }

    values[typeName].add(valueName);
  }

  let tsContent = "";

  for (const typeName in values) {
    tsContent += `export type ${typeName}Value =\n`;

    Array.from(values[typeName]).forEach((valueName, index, array) => {
      tsContent += `  | '${valueName}'`;

      if (index < array.length - 1) {
        tsContent += "\n";
      }
    });

    tsContent += ";\n\n";
  }

  return tsContent;
};

let result = "";

Promise.all(
  cssFiles.map((filePath) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          reject(err);
          return;
        }

        const tsContent = cssToTs(data);
        resolve(tsContent);
      });
    });
  })
)
  .then((results) => {
    result = results.join("");

    fs.writeFile("dna.d.ts", result, (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log(`Successfully generated dna.d.ts!`);
      }
    });
  })
  .catch((err) => {
    console.error("Error reading file:", err);
  });
