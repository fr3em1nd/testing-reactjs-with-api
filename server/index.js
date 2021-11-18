const path = require("path");
const express = require("express");
const app = express(); // create express app
var mongoose = require('mongoose');

var propertySchema = mongoose.Schema({
    propertyId: Number,
    propertyName: String,
    income: Array,
    expense: Array,
  });
  
  var Property = mongoose.model('Prop', propertySchema, 'properties');

  var dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

  mongoose.connect(dbUrl,(err) => {
    console.log('mongodb not',err);
  })

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  app.get('/properties-data', (req, res) => {
    Property.find({},(err, messages)=> {
      res.send(messages);
    }).sort({'propertyId': -1});
  })

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});