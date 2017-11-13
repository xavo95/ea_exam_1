'use strict';

var subjectController = require('../../controllers/subjectController');

var addSubject = function (req, res) {
    var name = req.body.name;
    var studies = req.body.studies;
    var semester = req.body.semester;
    if (name === null || name === undefined || name === '') {
        return res.status(503).send({message: 'Invalid name'});
    }
    if (studies === null || studies === undefined || studies === '') {
        return res.status(503).send({message: 'Invalid studies'});
    }
    if (semester === null || semester === undefined || semester === '') {
        return res.status(503).send({message: 'Invalid semester'});
    }
    if (semester !== 'Primavera' && semester !== 'Tardor') {
        return res.status(503).send({message: 'Invalid semester value'});
    }
    var callback = function (err) {
        if (err) {
            return res.status(503).send({message: 'Error performing the query: ' + err});
        } else {
            return res.status(200).send({message: 'Subject added successfully'});
        }
    };
    subjectController.addSubject(callback, name, studies, semester);
};

var getSubjects = function (req, res) {
    var callback = function (err, subjects) {
        if (err) {
            return res.status(503).send({message: 'Error performing the query: ' + err});
        } else if (!subjects) {
            return res.status(404).send({message: 'There is no subjects on database'});
        } else if (subjects.length === 0) {
            return res.status(404).send({message: 'There is no subjects on database'});
        } else {
            return res.status(200).send(subjects);
        }
    };
    subjectController.getSubjects(callback);
};

var getSubjectByName = function (req, res) {
    var name = req.params.name;
    if (name === null || name === undefined || name === '') {
        return res.status(503).send({message: 'Invalid name'});
    }
    var callback = function (err, subjects) {
        if (err) {
            return res.status(503).send({message: 'Error performing the query: ' + err});
        } else if (!subjects) {
            return res.status(404).send({message: 'There is no subjects on database'});
        } else if (subjects.length === 0) {
            return res.status(404).send({message: 'There is no subjects on database'});
        } else {
            return res.status(200).send(subjects);
        }
    };
    subjectController.getSubjectByName(callback, name);
};

var getSubjectByStudies = function (req, res) {
    var studies = req.params.studies;
    if (studies === null || studies === undefined || studies === '') {
        return res.status(503).send({message: 'Invalid studies'});
    }
    var callback = function (err, subjects) {
        if (err) {
            return res.status(503).send({message: 'Error performing the query: ' + err});
        } else if (!subjects) {
            return res.status(404).send({message: 'There is no subjects on database'});
        } else if (subjects.length === 0) {
            return res.status(404).send({message: 'There is no subjects on database'});
        } else {
            return res.status(200).send(subjects);
        }
    };
    subjectController.getSubjectByStudies(callback, studies);
};

var getSubjectBySemester = function (req, res) {
    var semester = req.params.semester;
    if (semester === null || semester === undefined || semester === '') {
        return res.status(503).send({message: 'Invalid semester'});
    }
    if (semester !== 'Primavera' && semester !== 'Tardor') {
        return res.status(503).send({message: 'Invalid semester value'});
    }
    var callback = function (err, subjects) {
        if (err) {
            return res.status(503).send({message: 'Error performing the query: ' + err});
        } else if (!subjects) {
            return res.status(404).send({message: 'There is no subjects on database'});
        } else if (subjects.length === 0) {
            return res.status(404).send({message: 'There is no subjects on database'});
        } else {
            return res.status(200).send(subjects);
        }
    };
    subjectController.getSubjectBySemester(callback, semester);
};

var getSubjectsSorted = function (req, res) {
    var callback = function (err, subjects) {
        if (err) {
            return res.status(503).send({message: 'Error performing the query: ' + err});
        } else if (!subjects) {
            return res.status(404).send({message: 'There is no subjects on database'});
        } else if (subjects.length === 0) {
            return res.status(404).send({message: 'There is no subjects on database'});
        } else {
            return res.status(200).send(subjects);
        }
    };
    subjectController.getSubjectsSorted(callback);
};

var addStudentToSubject = function (req, res) {
    var subject_name = req.body.subject_name;
    var student_name = req.body.student_name;
    if (subject_name === null || subject_name === undefined || subject_name === '') {
        return res.status(503).send({message: 'Invalid subject name'});
    }
    if (student_name === null || student_name === undefined || student_name === '') {
        return res.status(503).send({message: 'Invalid student name'});
    }
    var callback = function (err) {
        if (err) {
            return res.status(503).send({message: 'Error performing the query: ' + err});
        } else {
            return res.status(200).send({message: 'Student added to subject successfully'});
        }
    };
    subjectController.addStudentToSubject(callback, subject_name, student_name);
};


module.exports.addSubject = addSubject;
module.exports.getSubjects = getSubjects;
module.exports.getSubjectsSorted = getSubjectsSorted;
module.exports.getSubjectByName = getSubjectByName;
module.exports.getSubjectByStudies = getSubjectByStudies;
module.exports.getSubjectBySemester = getSubjectBySemester;
module.exports.addStudentToSubject = addStudentToSubject;