const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const path = require("path");

const publicPath = path.join(__dirname, "../public");

const port = process.env.PORT || 4000;

let app = express();
let server = http.createServer(app);

let io = socketIO(server);
io.on("connection", socket => {
  console.log("New user connected");

  socket.emit("newMessage", {
    from: "mike",
    text: "Hey! What's going on?",
    createdAt: 123
  });

  socket.on("createMessage", newMessage => {
    console.log("New message for you:", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("User was disconnected");
  });
});

app.use(express.static(publicPath));

console.log(publicPath);

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
