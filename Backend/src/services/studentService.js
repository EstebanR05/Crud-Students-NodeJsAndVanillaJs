import studentSchema from '../schema/studentSchema.js';

const getAllService = async (req, res) => {
    try {
        res.send("hello");
    } catch (error) {
        handleError(res, error, "error in the server");
    }
}

const createStudentService = async (req, res) => {
    try {
        res.send("hello");
    } catch (error) {
        handleError(res, error, "error in the server");
    }
}

const updateStudentsService = async (req, res) => {
    try {
        res.send("hello");
    } catch (error) {
        handleError(res, error, "error in the server");
    }
}

const deleteByIdService = async (req, res) => {
    try {
        res.send("hello");
    } catch (error) {
        handleError(res, error, "error in the server");
    }
}

const handleError = (res, error, message) => {
    console.error(message, error);
    res.status(500).json({ error: message })
}

module.exports = { getAllService, createStudentService, updateStudentsService, deleteByIdService };