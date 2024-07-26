//urls
const generalUrl = 'http://localhost:3000';

//modal
var modal = new bootstrap.Modal(document.getElementById('modalId'), { Keyboard: false });

//start aplications
var Aplication = new function () {
    //values forms
    this.name = document.getElementById('name');
    this.lastName = document.getElementById('lastName');
    this.email = document.getElementById('email');
    this.phone = document.getElementById('phone');
    this.address = document.getElementById('adress');

    //table
    this.students = document.getElementById('students');

    //id update
    this.id;

    //methods
    this.read = async () => {
        var datas = "";
        const result = await getAllStudents();

        result.map((student, index, array) => {
            datas += "<tr>";

            datas += `<td>${student.name}</td>`;
            datas += `<td>${student.lastName}</td>`;
            datas += `<td>${student.email}</td>`;
            datas += `<td>${student.phone}</td>`;
            datas += `<td>${student.adress}</td>`;
            datas += '<td>'
                + '<div class="btn-group" role="group" aria-label="Button group name">'
                + `<button type="button" class="btn btn-sm btn-dark mr-3 ml-3" onclick="Aplication.showModal(${student.id})">Edit</button>`
                + `<button type="button" class="btn btn-sm btn-danger mr-3 ml-3" onclick="Aplication.deleteValues(${student.id})">Delete</button>`
                + '</div>'
                + '</td>';

            datas += "</tr>";
        });

        return this.students.innerHTML = datas;
    };

    this.showModal = async (id) => {
        modal.show();

        if (id != null) {
            const result = await getStudentsById(id);
            this.id = id;
            this.name.value = result.name;
            this.lastName.value = result.lastName;
            this.email.value = result.email;
            this.phone.value = result.phone;
            this.address.value = result.adress;
        }
    }

    this.submit = async () => {
        let bodyParams = {
            name: this.name.value,
            lastName: this.lastName.value,
            email: this.email.value,
            phone: this.phone.value,
            adress: this.address.value
        };

        if (this.id) {
            await updateService(this.id, bodyParams);
        } else {
            await createService(bodyParams);
        }

        modal.hide();
        this.read();
    }

    this.deleteValues = async (id) => {
        await deleteService(id);
        this.read();
    }
}

//services
const getAllStudents = async () => {
    const url = `${generalUrl}/getAllStudents`;
    return await fetch(url).then(r => r.json());
}

const getStudentsById = async (id) => {
    const url = `${generalUrl}/getById/`;
    return await fetch(url + id).then(r => r.json());
}

const createService = async (params) => {
    const url = `${generalUrl}/createStudents`;
    return await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(params) }).then(response => response.json());
}

const updateService = async (id, params) => {
    const url = `${generalUrl}/updateStudents/`;
    return await fetch(url + id, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(params) }).then(response => response.json());
}

const deleteService = async (id) => {
    const url = `${generalUrl}/delete/`;
    return await fetch(url + id, { method: "DELETE", headers: { "Content-Type": "application/json" } }).then(response => response.json());
}

//messeng alert 
// const handleError = (error) => {
//     Swal.fire({ title: 'Error!', text: error, icon: 'warning' });
// }

// const handleSuccess = (message) => {
//     Swal.fire({ title: 'Success!', text: message, icon: 'success' });
// }

Aplication.read();