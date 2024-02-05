const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.send(`
    Hello Microsoft
  `);
});

app.get("/follow", (req, res) => {
  res.send(`
   Hello Microsoft, but from follow path
  `);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
