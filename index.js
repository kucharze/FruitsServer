const express = require("express");

const app = express();

const fruits = require("./models/fruits");

//Middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Tell express to use middleware
//Encode the url to read in a acertain way
//This is so we can use the post request to read body data
app.use(express.urlencoded({ extended: false }));

//Routes
app.use((req, res, next) => {
  console.log("I run for all routes");
  next(); //allows the next necessary route to run
});

//Index all fruits
app.get("/fruits", (req, res) => {
  res.render("Index", { fruitList: fruits });
});

//put this above your Show route
app.get("/fruits/new", (req, res) => {
  res.render("New");
});

app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true; //do some data correction
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false; //do some data correction
  }
  fruits.push(req.body);
  console.log(fruits);
  res.send("<h1>You data has been received</h1>");
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
