'use strict';

var mongoose = require('mongoose');

var SubjectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    studies: {type: String, required: true},
    semester: {type: String, required: true},
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Subject', SubjectSchema);