const express = require("express");

const app = express();
const mongoose = require("mongoose");

const Fruit = require("./models/fruits");
const Veggie = require("./models/veggies");

require("dotenv").config();
//Middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Tell express to use middleware
//Encode the url to read in a acertain way
//This is so we can use the post request to read body data
app.use(express.urlencoded({ extended: false }));

//Allows for use of res.json
app.use(express.json());

//include the method-override package place this where you instructor places it
const methodOverride = require("method-override");
//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"));

//Routes
app.use((req, res, next) => {
  console.log("I run for all routes");
  next(); //allows the next necessary route to run
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.get("/fruits", (req, res) => {
  Fruit.find({}).then((allFruits) => {
    res.render("Index", {
      fruits: allFruits,
    });
  });
});

app.get("/veggies", (req, res) => {
  Veggie.find({}).then((allVeg) => {
    res.render("VIndex", {
      veggies: allVeg,
    });
  });
});

//put this above your Show route
app.get("/fruits/new", (req, res) => {
  res.render("New");
});

app.get("/Veggies/new", (req, res) => {
  res.render("NewVeggie");
});
//seed route
//add in a lot of data at once
app.get("/fruit/seed", async () => {
  //deletteing all current data
  Fruit.deleteMany({});

  Fruit.create(OurFruiteData);
  res.redirect("/");
});

// app.post("/fruits", async (req, res) => {
//   if (req.body.readyToEat === "on") {
//     //if checked, req.body.readyToEat is set to 'on'
//     req.body.readyToEat = true; //do some data correction
//   } else {
//     //if not checked, req.body.readyToEat is undefined
//     req.body.readyToEat = false; //do some data correction
//   }

//   // const newFruit = await Fruit.create({
//   //   name: req.body.name,
//   //   color: req.body.color,
//   //   readyToEat: req.body.readyToEat,
//   // });
//   const newFruit = await Fruit.create(req.body);
//   await res.send(newFruit);
//   // Fruit.create(req.body).then((createdFruit) => {
//   //   res.send(createdFruit);
//   // });

//   // fruits.push(req.body);
//   // console.log(fruits);
//   console.log(req.body);
//   // res.json(req.body);
//   // res.send("<h1>You data has been received</h1>");
//   res.redirect("/fruits");
// });

// app.get("/fruits/:indexOfFruitsArray", async (req, res) => {
//   // res.render("Show", {
//   //   //How to pass to components as props
//   //   fruit: fruits[req.params.indexOfFruitsArray],
//   // });
//   const eachFruit = await Fruit.findById(req.params.id);
//   await res.render("Show", {
//     afruit: eachFruit,
//   });
// });

app.delete("/fruits/:id", async (req, res) => {
  Fruit.findByIdAndRemove(req.params.id).then((err, data) => {
    res.redirect("/fruits"); //redirect back to fruits index
  });
});

app.put("/fruits/:id", async (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  Fruit.findByIdAndUpdate(req.params.id, req.body).then((err, data) => {
    res.redirect("/fruits"); //redirect back to fruits index
  });
});

app.get("/fruits/:id/edit", async (req, res) => {
  // const FoundFruit = await Fruit.findById(req.params.id)
  console.log("truing to find");
  Fruit.findById(req.params.id).then((foundFruit) => {
    //find the fruit
    console.log("truing to find");
    // if (!err) {
    console.log("try to find");
    res.render("Edit", {
      fruit: foundFruit, //pass in the found fruit so we can prefill the form
    });
    // } else {
    //   res.send({ msg: err.message });
    // }
  });
});

app.post("/fruits", async (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  const newFruit = await Fruit.create(req.body);
  //await res.send(newFruit);
  //console.log(fruits);
  res.redirect("/fruits");
});

app.post("/veggies", async (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  const newVeggie = await Veggie.create(req.body);
  //await res.send(newFruit);
  //console.log(fruits);
  res.redirect("/veggies");
});

app.get("/fruits/:id", async (req, res) => {
  const eachFruit = await Fruit.findById(req.params.id);
  await res.render("Show", {
    fruit: eachFruit,
  });
});

app.get("/veggies/:id", async (req, res) => {
  const eachVeg = await Veggie.findById(req.params.id);
  console.log(eachVeg);
  await res.render("ShowVeg", {
    veggie: eachVeg,
  });
});

app.listen("3000", (req, res) => {
  console.log(`Server now listening on port 3000`);
});
// /npm install jsx-view-engine react react-dom --save
