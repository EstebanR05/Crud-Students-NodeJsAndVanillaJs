//urls
const generalUrl = 'http://localhost:3000';
const urlGetAll = `${generalUrl}/getAllStudents`;
const urlGetById = `${generalUrl}/getById/`;
const urlCreate = `${generalUrl}/createStudents`;
const urlUpdate = `${generalUrl}/updateStudents/`;
const urlDelete = `${generalUrl}/delete/`;

//modal
var modal = new bootstrap.Modal(document.getElementById('modalId'), { Keyboard: false });

//start aplications
var Aplication = new function () {
    //values forms create
    this.name = document.getElementById('name');
    this.lastName = document.getElementById('lastName');
    this.email = document.getElementById('email');
    this.phone = document.getElementById('phone');
    this.address = document.getElementById('adress');

    //values forms update
    this.nameUpdate = document.getElementById('nameUpdate');
    this.lastNameUpdate = document.getElementById('lastNameUpdate');
    this.emailUpdate = document.getElementById('emailUpdate');
    this.phoneUpdate = document.getElementById('phoneUpdate');
    this.addressUpdate = document.getElementById('adressUpdate');

    //table
    this.students = document.getElementById('students');

    //id update
    this.idUpdate;

    //methods
    this.read = () => {
        var datas = "";
        fetch(urlGetAll)
            .then(r => r.json())
            .then((result) => {
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
            }).catch(console.log);
    };

    this.createValues = () => {
        var sendData = {
            name: this.name.value,
            lastName: this.lastName.value,
            email: this.email.value,
            phone: this.phone.value,
            adress: this.address.value
        };

        fetch(urlCreate, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(sendData) })
            .then(response => response.json())
            .then(result => { this.read() })
            .catch(console.log);
    }

    this.showModal = (id) => {
        modal.show();

        //change the id update
        this.idUpdate = id;

        //getValues iputs modal
        fetch(urlGetById + id)
            .then(r => r.json())
            .then((result) => {
                this.nameUpdate = result.name;
                this.lastNameUpdate = result.lastName;
                this.emailUpdate = result.email;
                this.phoneUpdate = result.phone;
                this.addressUpdate = result.adress;
            }).catch(console.log);
    }

    this.saveModal = () => {
        this.updateValues(this.idUpdate);
        modal.hide();
    }

    this.updateValues = (id) => {
        let valueSend = {
            id: id,
            name: this.nameUpdate.value,
            lastName: this.lastNameUpdate.value,
            email: this.emailUpdate.value,
            phone: this.phoneUpdate.value,
            adress: this.addressUpdate.value
        };

        fetch(urlUpdate + id, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(valueSend) })
            .then(response => response.json())
            .then(result => { this.read() })
            .catch(console.log);
    }

    this.deleteValues = (id) => {
        fetch(urlDelete + id, { method: "DELETE", headers: { "Content-Type": "application/json" } })
            .then(response => response.json())
            .then(result => { this.read() })
            .catch(console.log);
    }
}

Aplication.read();