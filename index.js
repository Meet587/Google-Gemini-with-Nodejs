const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { generateResponse } = require("./src/controllers/index.js");
const { history } = require("./src/controllers/index.js");

dotenv.config({ path: "./.env" });
app.use(bodyParser.json());

const port = process.env.PORT || 3006;

app.get("/", (req, res) => {
  return res.send("hello world");
});
app.post("/generate", generateResponse);
app.get("/generate", (req, res) => {
  res.send(history);
});

app.listen(port, () => {
  console.log(`app is listning ${port}`);
});
