const express = require("express");

const app = express();

const fruits = ["Appple", "Bannna", "pear"];

//Routes

//Index all fruits
app.get("/fruits", (req, res) => {
  res.send(fruits);
});

app.listen("3000", (req, res) => {
  console.log(`Server now listening on port 3000`);
});
