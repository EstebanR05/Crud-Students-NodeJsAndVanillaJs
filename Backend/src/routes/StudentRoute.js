import express from 'express';
import { getAll, createStudent, updateStudentById, deleteStudenttById } from '../controller/StudentController.js';

const router = express.Router();

router
    .get('/getAllStudents', getAll)
    .post('/createStudents/:name/:lastName/:email', createStudent)
    .put('/updateStudents/:id/:name/:lastName/:email', updateStudentById)
    .delete('/delete/:id', deleteStudenttById);

export default router;

/*
    for use the routes in the navigator
       1. http://localhost:3000/getAllStudents
       2. http://localhost:3000/getAllStudents
       3. http://localhost:3000/createStudents/esteban/restrepo/e05072003@gmail.com
       4. http://localhost:3000/updateStudents/1/esteban/restrepo/e05072003@gmail.com
       5. http://localhost:3000/delete/1
*/
