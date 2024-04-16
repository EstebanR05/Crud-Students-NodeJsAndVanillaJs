const express = require('express');
const studentController = require('../controller/StudentController.js');

const router = express.Router();

router
    .get('/getAllStudents', studentController.getAll)
    .post('/getAllStudents/:name/:lastName/:email', studentController.createStudent);

module.exports = router;    