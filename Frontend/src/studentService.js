const generalUrl = 'http://localhost:3000';

export const getAllStudents = async () => {
    const url = `${generalUrl}/getAllStudents`;
    return await fetch(url).then(r => r.json());
}

export const getStudentsById = async (id) => {
    const url = `${generalUrl}/getById/`;
    return await fetch(url + id).then(r => r.json());
}

export const createService = async (params) => {
    const url = `${generalUrl}/createStudents`;
    return await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(params) }).then(response => response.json());
}

export const updateService = async (id, params) => {
    const url = `${generalUrl}/updateStudents/`;
    return await fetch(url + id, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(params) }).then(response => response.json());
}

export const deleteService = async (id) => {
    const url = `${generalUrl}/delete/`;
    return await fetch(url + id, { method: "DELETE", headers: { "Content-Type": "application/json" } }).then(response => response.json());
}