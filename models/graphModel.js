const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const Schema = mongoose.Schema;

const graphSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Enter a username.'],
    },
 
});

 
const Graphs = mongoose.model('Graphs', graphSchema);
module.exports = Graphs; 
