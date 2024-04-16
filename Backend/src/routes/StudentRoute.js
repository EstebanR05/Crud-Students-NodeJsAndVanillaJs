const express = require('express');
const studentController = require('../controller/StudentController.js');

const router = express.Router();

router
    .get('/getAllStudents', studentController.getAllController)
    .post('/createStudents/:name/:lastName/:email', studentController.createStudentController);
    //.put('/updateStudents/:id/:name/:lastName/:email', studentController.updateStudentsController);

module.exports = router;    