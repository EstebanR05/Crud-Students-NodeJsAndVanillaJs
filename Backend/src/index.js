//get librarys
import express from 'express';
import studentRoute from './routes/StudentRoute.js';
import bodyParser from 'body-parser';

//variables
const app = express();
const PORT = process.env.PORT || 3000;

//using express
app.use(bodyParser.json());

//endPoints
app.use('/', studentRoute);

//port when start the proyect    
app.listen(PORT, () => console.log("Server listening on port:", PORT));