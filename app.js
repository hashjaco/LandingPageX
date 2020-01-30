"use strict";

const express = require("express");
const path = require("path");

const log = console.log;
const app = express();
const PORT = 8081;

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.send("Sending home page");
});



app.listen(PORT, () => {
  log(`Server started on port ${PORT}`);
});
