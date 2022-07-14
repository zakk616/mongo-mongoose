//jshint esversion:6

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/peopleDB", {
  useNewUrlParser: true,
});

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
  name: "Ali Ahmed",
  age: 15,
});

const p3 = new Person({
  name: "Babul",
  age: 21,
});

// save the people
Person.insertMany([p1, p2, p3], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully saved people!");
    showPeople();
  }
});

// show all people
function showPeople() {
  Person.find({}, function (err, people) {
    if (err) {
      console.log(err);
    } else {
      people.forEach((person) => {
        console.log(person.name);
      });
    }
  });
}

// update a person
Person.updateOne({ name: "Ali Ahmed" }, { name: "Ali" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated people!");
    showPeople();
  }
});


// delete a person
Person.deleteOne({ name: "Ali" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deleted Person!");
    showPeople();
  }
});

// mongoose.connection.close();