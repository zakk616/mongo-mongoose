//jshint esversion:6

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

// create a schema for our fruits
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

// create a model for fruits
const Fruit = mongoose.model("Fruit", fruitSchema);

// create a new fruit
const fruit = new Fruit({
  name: "Apple",
  rating: 7.5,
  review: "Delicious",
});

// save the fruit
//fruit.save();

// create a schema for our people
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// create a model for people
const Person = mongoose.model("Person", personSchema);

// create a new people
const p1 = new Person({
  name: "Ali",
  age: 21,
});

const p2 = new Person({
  name: "Ahmed",
  age: 15,
});

const p3 = new Person({
  name: "Babul",
  age: 21,
});

// save the people
// Person.insertMany([p1, p2, p3], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved people!");
//   }
// });

// show all people
Person.find({}, function (err, people) {
  if (err) {
    console.log(err);
  } else {
    people.forEach((person) => {
      console.log(person.name);
    });
    mongoose.connection.close();
  }
});
