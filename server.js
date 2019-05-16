"use strict";

const express = require('express');
const cartItems = require("./cart-items.js");
const app = express();
app.use(express.json());

app.use("/",cartItems);

const port = 3000;
// runs the server
app.listen(port, ()=> console.log(`listening on port: http://localhost:${port}`));