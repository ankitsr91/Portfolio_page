const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 8765;

app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/skills", (req, res) => {
  res.send("Skills Page");
});

app.listen(port, "127.0.0.1", () => {
  console.log("Express server listening on port " + port);
});
