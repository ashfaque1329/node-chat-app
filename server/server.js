const express = require("express");

const path = require("path");

const publicPath = path.join(__dirname, "../public");

const port = process.env.PORT || 4000;

let app = express();

app.use(express.static(publicPath));

console.log(publicPath);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
