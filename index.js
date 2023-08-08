const express = require("express");

const app = express();

const fruits = require("./models/fruits");

//Middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Routes

//Index all fruits
app.get("/fruits", (req, res) => {
  res.send(fruits);
});

app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.render("Show", {
    //How to pass to components as props
    fruit: fruits[req.params.indexOfFruitsArray],
  });
});

app.listen("3000", (req, res) => {
  console.log(`Server now listening on port 3000`);
});
// /npm install jsx-view-engine react react-dom --save
