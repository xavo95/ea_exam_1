'use strict';

var studentController = require('../../controllers/studentController');

var addStudents = function (req, res) {
    var name = req.body.name;
    var age = req.body.age;
    if (name === null || name === undefined || name === '') {
        return res.status(503).send({message: 'Invalid name'});
    }
    if (age === null || age === undefined || age < 18) {
        return res.status(503).send({message: 'Invalid age'});
    }
    var callback = function (err) {
        if (err) {
            return res.status(503).send({message: 'Error performing the query: ' + err});
        } else {
            return res.status(200).send({message: 'Student added successfully'});
        }
    };
    studentController.addStudent(callback, name, age);
};

var getStudents = function (req, res) {
    var callback = function (err, students) {
        if (err) {
            return res.status(503).send({message: 'Error performing the query: ' + err});
        } else if (!students) {
            return res.status(404).send({message: 'There is no students on database'});
        } else if (students.length === 0) {
            return res.status(404).send({message: 'There is no students on database'});
        } else {
            return res.status(200).send(students);
        }
    };
    studentController.getStudents(callback);
};

var getStudentByName = function (req, res) {
    var name = req.params.name;
    if (name === null || name === undefined || name === '') {
        return res.status(503).send({message: 'Invalid name'});
    }
    var callback = function (err, students) {
        if (err) {
            return res.status(503).send({message: 'Error performing the query: ' + err});
        } else if (!students) {
            return res.status(404).send({message: 'There is no students on database'});
        } else if (students.length === 0) {
            return res.status(404).send({message: 'There is no students on database'});
        } else {
            return res.status(200).send(students);
        }
    };
    studentController.getStudentByName(callback, name);
};


module.exports.addStudents = addStudents;
module.exports.getStudents = getStudents;
module.exports.getStudentByName = getStudentByName;