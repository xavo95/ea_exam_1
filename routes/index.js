'use strict';

var express = require('express');
var router = express.Router();
var exampleRouter = require('./exampleroute/example');
var studentRouter = require('./studentRoute/student');
var subjectRouter = require('./subjectRoute/subject');


router.get('/example', exampleRouter.mapIndex);

router.get('/student', studentRouter.getStudents);
router.get('/student/:name', studentRouter.getStudentByName);
router.post('/student', studentRouter.addStudents);

router.get('/subject', subjectRouter.getSubjects);
router.get('/subject/sorted/get', subjectRouter.getSubjectsSorted);
router.get('/subject/:name', subjectRouter.getSubjectByName);
router.get('/subject/studies/:studies', subjectRouter.getSubjectByStudies);
router.get('/subject/semester/:semester', subjectRouter.getSubjectBySemester);
router.post('/subject', subjectRouter.addSubject);
router.put('/subject/adduser', subjectRouter.addStudentToSubject);



module.exports.router = router;
