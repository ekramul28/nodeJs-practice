const EventEmitter = require("events");

const myEmitter = new EventEmitter();

//listener

myEmitter.on("birthday", () => {
  console.log("ok");
});

myEmitter.on("gift", () => {
  console.log("your gift");
});

myEmitter.emit("birthday");
myEmitter.emit("gift");
