const studentService = require('../services/studentService.js');

const getAllController = async (req, res) => {
    return await studentService.getAllService(req, res);
}

const createStudentController = async (req, res) => {
    return await studentService.createStudentService(req, res);
}

module.exports = { getAllController, createStudentController };