import { getAllStudentsService, getStudentByIdService, deleteStudentsByIdService, createStudentService, updateStudentsService } from '../services/studentService.js';

export async function getAll(req, res) {
    try {
        const result = await getAllStudentsService();
        res.send(result);
    } catch (error) {
        handleError(res, error, "error in the server");
    }
}

export async function getById(req, res) {
    try {
        const id = req.params.id;
        const result = await getStudentByIdService(id);
        res.send(result);
    } catch (error) {
        handleError(res, error, "error in the server");
    }
}

export async function createStudent(req, res) {
    try {
        const { name, lastName, email, phone, adress } = req.body;
        const result = await createStudentService(name, lastName, email, phone, adress);
        res.status(201).send(result);
    } catch (error) {
        handleError(res, error, "error in the server");
    }
}

export async function updateStudentById(req, res) {
    try {
        const id = req.params.id;
        const { name, lastName, email, phone, adress } = req.body;
        const result = await updateStudentsService(id, name, lastName, email, phone, adress);
        res.status(201).send(result);
    } catch (error) {
        handleError(res, error, "error in the server");
    }
}

export async function deleteStudentById(req, res) {
    try {
        const id = req.params.id;
        await deleteStudentsByIdService(id);
        res.status(201).send({});
    } catch (error) {
        handleError(res, error, "error in the server");
    }
}

function handleError(res, error, message) {
    console.error(message, error);
    res.status(500).json({ error: message })
}
