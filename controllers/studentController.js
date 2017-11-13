'use strict';

var Students = require('../models/student');

function addStudent(callback, name, age) {
    var student = new Students({
        name: name,
        age: age
    });
    student.save(function (err) {
        callback(err);
    });
}

function getStudents(callback) {
    Students.find({}, function (err, students) {
        callback(err, students);
    });
}

function getStudentByName(callback, name) {
    Students.findOne({name: name}, function (err, students) {
        callback(err, students);
    });
}


module.exports.addStudent = addStudent;
module.exports.getStudents = getStudents;
module.exports.getStudentByName = getStudentByName;