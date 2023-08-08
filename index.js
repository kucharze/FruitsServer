const express = require("express");

const app = express();

//Routes

//Index all fruits
app.get("/fruits", (req, res) => {
  res.send(fruits);
});

app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.send(fruits[req.params.indexOfFruitsArray]);
});

app.listen("3000", (req, res) => {
  console.log(`Server now listening on port 3000`);
});
