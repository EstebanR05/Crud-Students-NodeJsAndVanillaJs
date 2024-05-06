import { getAllStudentsService, getAllStudentsByIdService } from '../services/studentService.js';

export async function getAll(req, res) {
    try {
        const result = await getAllStudentsService();
        res.send(result);
    } catch (error) {
        handleError(res, error, "error in the server");
    }
}

export async function createStudent(req, res) {
    try {
        res.send("hello");
    } catch (error) {
        handleError(res, error, "error in the server");
    }
}

export async function updateStudentById(req, res) {
    try {
        res.send("hello");
    } catch (error) {
        handleError(res, error, "error in the server");
    }
}

export async function deleteStudenttById(req, res) {
    try {
        res.send("hello");
    } catch (error) {
        handleError(res, error, "error in the server");
    }
}

function handleError(res, error, message) {
    console.error(message, error);
    res.status(500).json({ error: message })
}
