import express from 'express';
import studentController from '../controller/StudentController.js';

const router = express.Router();

router
    .get('/getAllStudents', studentController.getAllController)
    .post('/createStudents/:name/:lastName/:email', studentController.createStudentController)
    .put('/updateStudents/:id/:name/:lastName/:email', studentController.updateStudentsController)
    .delete('/delete/:id', studentController.deleteStudentController);

module.exports = router;    