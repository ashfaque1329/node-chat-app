var socket = io();
socket.on("connect", () => {
  console.log("Connected to server");
  socket.emit("createMessage", {
    from: "ash",
    text: "Yup"
  });
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

socket.on("newMessage", newMessage => {
  console.log(newMessage);
});
