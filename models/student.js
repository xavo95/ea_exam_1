'use strict';

var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true, default: 0}
});

module.exports = mongoose.model('Student', StudentSchema);