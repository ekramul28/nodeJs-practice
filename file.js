const fs = require("fs");

//reading a file text

const readText = fs.readFileSync("./texts/read.txt", "utf-8");
console.log(readText);
const writeFile = fs.writeFileSync(
  "./texts/write.txt",
  readText + "this is my written text"
);
