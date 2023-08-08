const express = require("express");

const app = express();

const fruits = [
  {
    name: "apple",
    color: "red",
    readyToEat: true,
  },
  {
    name: "pear",
    color: "green",
    readyToEat: false,
  },
  {
    name: "banana",
    color: "yellow",
    readyToEat: true,
  },
];

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
