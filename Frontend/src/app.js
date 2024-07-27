import {
    getAllStudents, 
    getStudentsById, 
    createService, 
    updateService, 
    deleteService 
} from '../src/studentService.js';

//modal
let modal = new bootstrap.Modal(document.getElementById('modalId'), { Keyboard: false });

//values forms
let id = null;
let name = document.getElementById('name');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let address = document.getElementById('adress');
let studentsTable = document.getElementById('studentsTable');

//methods
const read = async () => {
    var datas = "";
    const result = await getAllStudents();

    result.forEach((student) => {
        datas += "<tr>";
        datas += `<td>${student.name}</td>`;
        datas += `<td>${student.lastName}</td>`;
        datas += `<td>${student.email}</td>`;
        datas += `<td>${student.phone}</td>`;
        datas += `<td>${student.address}</td>`;
        datas += '<td>'
            + '<div class="btn-group" role="group" aria-label="Button group name">'
            + `<button type="button" class="btn btn-sm btn-dark mr-3 ml-3" onclick="showModal(${student.id})">Edit</button>`
            + `<button type="button" class="btn btn-sm btn-danger mr-3 ml-3" onclick="deleteValues(${student.id})">Delete</button>`
            + '</div>'
            + '</td>';
        datas += "</tr>";
    });

    studentsTable.innerHTML = datas;
};

const showModal = async (studentId) => {
    if (studentId != null) {
        const result = await getStudentsById(studentId);
        id = studentId;
        name.value = result.name;
        lastName.value = result.lastName;
        email.value = result.email;
        phone.value = result.phone;
        address.value = result.address;
    }

    modal.show();
};

const saveValues = async (event) => {
    event.preventDefault();

    let bodyParams = {
        name: document.getElementById('name').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        adress: document.getElementById('adress').value
    };

    if (id) {
        await updateService(id, bodyParams);
    } else {
        await createService(bodyParams);
    }

    modal.hide();
    await read();
};


const deleteValues = async (id) => {
    await deleteService(id);
    await read();
}

// Hacer las funciones globales
window.showModal = showModal;
window.deleteValues = deleteValues;
window.saveValues = saveValues;

// Inicializar lectura de estudiantes
document.addEventListener('DOMContentLoaded', (event) => {
    read();
});