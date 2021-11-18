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
  
  var Property = mongoose.model('Property', propertySchema, 'skillAssessment');

  var dbUrl = 'mongodb://test:test14344@cluster0-shard-00-00.r70kc.mongodb.net:27017,cluster0-shard-00-01.r70kc.mongodb.net:27017,cluster0-shard-00-02.r70kc.mongodb.net:27017/test?authSource=admin&replicaSet=atlas-ly3nh7-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';

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
    Property.find({},(err, prop)=> {
      res.send(prop);
    }).sort({'propertyId': -1});
  })

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});