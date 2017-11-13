'use strict';

var Subjects = require('../models/subject');
var studentsController = require('./studentController');

function addSubject(callback, name, studies, semester) {
    var subject = new Subjects({
        name: name,
        studies: studies,
        semester: semester
    });
    subject.save(function (err) {
        callback(err);
    });
}

function getSubjects(callback) {
    Subjects.find({}).populate('students').exec(function (err, subjects) {
        callback(err, subjects);
    });
}

function getSubjectByName(callback, name) {
    Subjects.findOne({name: name}).populate('students').exec(function (err, subjects) {
        callback(err, subjects);
    });
}

function getSubjectByStudies(callback, studies) {
    Subjects.find({studies: studies}).populate('students').exec(function (err, subjects) {
        callback(err, subjects);
    });
}

function getSubjectBySemester(callback, semester) {
    Subjects.find({semester: semester}).populate('students').exec(function (err, subjects) {
        callback(err, subjects);
    });
}

function getSubjectsSorted(callback) {
    Subjects.find({}).populate('students').sort({name: 1}).exec(function (err, subjects) {
        callback(err, subjects);
    });
}

function addStudentToSubject(callback, subject_name, student_name) {
    studentsController.getStudentByName(function (err, student) {
        if (err) {
            callback(err);
        } else if (!student) {
            callback('There is no student with that name on database');
        } else if (student.length === 0) {
            callback('There is no student with that name on database');
        } else {
            Subjects.findOne({name: subject_name}, function (err, subject) {
                if (err) {
                    callback(err);
                } else if (!subject) {
                    callback('There is no subjects with that name on database');
                } else if (subject.length === 0) {
                    callback('There is no subjects with that name on database');
                } else {
                    var users = subject.students;
                    users.push(student._id);
                    Subjects.update({ name: subject_name }, { $set: { students: users }}, function (err, subject) {
                        callback(err);
                    });
                }
            });
        }
    }, student_name);
}


module.exports.addSubject = addSubject;
module.exports.getSubjects = getSubjects;
module.exports.getSubjectsSorted = getSubjectsSorted;
module.exports.getSubjectByName = getSubjectByName;
module.exports.getSubjectByStudies = getSubjectByStudies;
module.exports.getSubjectBySemester = getSubjectBySemester;
module.exports.addStudentToSubject = addStudentToSubject;