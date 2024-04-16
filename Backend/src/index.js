//get librarys
const express = require('express');
const studentRoute = require('./routes/StudentRoute.js');

//variables
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParse = require('body-parser');

//using express
app.use(bodyParse.json());

//endPoints
app.use('/', studentRoute);

//port when start the proyect    
app.listen(PORT, () => console.log("Server listening on port:", PORT));