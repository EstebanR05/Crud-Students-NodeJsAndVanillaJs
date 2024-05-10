# Crud-Students-NodeJsAndJs

This personal project was created to challenge my logic and my way of visualizing JavaScript in a comprehensive manner.

## Backend
To start our backend project, we must ensure that Node.js version 16.16.0 LTS is installed.

### Commands
- `npm install`
- `npm start`

### Postman URLs
- **getAll:** [http://localhost:3000/getAllStudents](http://localhost:3000/getAllStudents)
- **getById:** [http://localhost:3000/getById/3](http://localhost:3000/getById/3)
- **createStudents:** [http://localhost:3000/createStudents](http://localhost:3000/createStudents)
  - Body:
    ```json
    {
      "name": "owen",
      "lastName": "mosku",
      "email": "owen@gmail.com",
      "phone": "2512451244",
      "address": "calle 5 #5-27"
    }
    ```
- **updateStudents:** [http://localhost:3000/updateStudents/3](http://localhost:3000/updateStudents/3)
  - Body:
    ```json
    {
      "name": "owen",
      "lastName": "mosku",
      "email": "owen@gmail.com",
      "phone": "2512451244",
      "address": "calle 5 #5-27"
    }
    ```
- **delete:** [http://localhost:3000/delete/1](http://localhost:3000/delete/1)

## Frontend
Our frontend project is based on Bootstrap 5, but it includes all the links from the official website, so we don't need to install dependencies. Just install Live Server and run our `index.html` or simply open our `index.js` file.

## Database
The name of the database is `students_db`. We must create it in XAMPP or any other database management system and execute the query provided within the files (`students_db.sql`).