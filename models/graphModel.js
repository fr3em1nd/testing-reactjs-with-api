const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const Schema = mongoose.Schema;

const graphSchema = new Schema({
    propertyId: Number,
    propertyName: Number,
    income: Object,
    expense: Object
});

 
const Graph = mongoose.model('Graph', graphSchema,'propertyData');
module.exports = Graph; 
