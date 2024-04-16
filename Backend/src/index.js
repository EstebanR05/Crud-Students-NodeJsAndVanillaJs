//get librarys
const express = require('express');
const mongoose = require('mongoose');
const studentRoute = require('./routes/StudentRoute.js');

//variables
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParse = require('body-parser');

//using express
app.use(bodyParse.json());
app.use('/', studentRoute);

//using mongoose for implement the base of date
mongoose.connect(urlMongo, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

//port when start the proyect    
app.listen(PORT, () => console.log("Server listening on port:", PORT));
