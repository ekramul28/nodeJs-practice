const fs = require("fs");

//reading  text asynchro

fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error reading text");
  }
  //   console.log(data);

  fs.writeFile("./texts/read2.txt", data, "utf-8", (err) => {
    if (err) {
      throw Error("Error writing text");
    }
  });
});

console.log("tasting asynchronous");
