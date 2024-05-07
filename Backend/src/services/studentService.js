import { pool } from '../schema/studentSchema.js';

export async function getAllStudentsService() {
    const [rows] = await pool.query(`SELECT * FROM students`);
    return rows;
}

export async function getStudentByIdService(id) {
    const [rows] = await pool.query(`SELECT * FROM students WHERE id = ?`, [id]);
    return rows[0];
}

export async function createStudentService(name, lastName, email, phone, adress) {
    const [result] = await pool.query(
        `INSERT INTO students (id, name, lastName, email, phone, adress) VALUES (null, ?, ?, ?, ?, ?)`,
        [name, lastName, email, phone, adress]
    );

    const id = result.insertId;
    return getStudentByIdService(id);
}

export async function updateStudentsService(id, name, lastName, email, phone, adress) {
    await pool.query(
        `UPDATE students SET name = ?, lastName = ?, email = ?, phone = ?, adress = ? WHERE id = ?`, 
        [name, lastName, email, phone, adress, id]
    );
    return getStudentByIdService(id);
}

export async function deleteStudentsByIdService(id) {
    await pool.query(`DELETE FROM students WHERE id = ?`, [id]);
    return true;
}
