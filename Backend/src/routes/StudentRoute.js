import express from 'express';
import { getAll, createStudent, updateStudentById, deleteStudentById, getById } from '../controller/StudentController.js';

const router = express.Router();

router
    .get('/getAllStudents', getAll)
    .get('/getById/:id', getById)
    .post('/createStudents', createStudent)
    .put('/updateStudents/:id', updateStudentById)
    .delete('/delete/:id', deleteStudentById);

export default router;

/*
    for use the routes in the navigator
       1. http://localhost:3000/getAllStudents
       2. http://localhost:3000/getById/1
       3. http://localhost:3000/createStudents
       4. http://localhost:3000/updateStudents/1
       5. http://localhost:3000/delete/1
*/
