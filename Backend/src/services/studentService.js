import { pool } from '../schema/studentSchema.js';

export async function getAllStudentsService() {
    const [rows] = await pool.query(`SELECT * FROM students`);
    return rows;
}

export async function getAllStudentsByIdService(id) {
    const [rows] = await pool.query(`SELECT * FROM students WHERE id = ?`, [id]);
    return rows[0];
}

export async function createStudentService(name, lastName, email, phone, adress) {
    const [result] = await pool.query(
        `INSERT INTO students (id, name, lastName, email, phone, adress) VALUES (null, ?, ?, ?, ?, ?)`,
        [name, lastName, email, phone, adress]
    );

    return { id: result.insertId, name, lastName, email, phone, adress };
}

export async function updateStudentsService() {

}

export async function deleteStudentsByIdService() {

}
