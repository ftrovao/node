const path = require("path");

console.log(path.sep);

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filPath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
