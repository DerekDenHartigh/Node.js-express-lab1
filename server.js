"use strict";

// requires the Express module
const express = require('express');

const students = require("./students")  // imports students from students.js file
//converts body and params into JSON

const app = express();
// define's the port
app.use(express.json());
app.use("/",students);


const port = 3000;
// runs the server
app.listen(port, ()=> console.log(`listening on port: ${port}`));