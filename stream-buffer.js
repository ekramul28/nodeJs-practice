const http = require("http");
const fs = require("fs");

const server = http.createServer();

//listener
server.on("request", (req, res) => {
  console.log(req.url);
  if (req.url === "/read-file" && req.method === "GET") {
    //streaming file reading

    const readableStream = fs.createReadStream("./texts/read.txt");

    readableStream.on("data", (buffer) => {
      res.statusCode = 200;
      res.write(buffer);
    });
    readableStream.on("end", () => {
      res.statusCode = 200;
      res.end("end");
    });
    readableStream.on("error", () => {
      res.statusCode = 500;
      res.end("something is rong");
    });
  }
  //   console.log(req);
  //   res.end("hello from world ");
});

server.listen(5000, () => {
  console.log("server is listening on port 5000");
});
