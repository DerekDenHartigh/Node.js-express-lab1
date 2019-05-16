"use strict";
const express = require("express");
const cartItemsPage = express.Router();  // Router has to be capital

let cartItems = [
    {"id": 1, "product": "banana", "price": .15, "quantity": 99},
    {"id": 2, "product": "cofee-beans", "price": 10, "quantity": 1},
    {"id": 3, "product": "dvd", "price": 5, "quantity": 4},
    {"id": 4, "product": "underpants", "price": 3, "quantity": 6},
    {"id": 5, "product": "brocoli", "price": .32, "quantity": 2},
    {"id": 6, "product": "shoe", "price": 45, "quantity": 1},
    {"id": 7, "product": "eye-patch", "price": 8, "quantity": 2},
];

cartItemsPage.get("/cartItemsPage/cart-items", (req, res) => {
    response.writeHead(200, {'content-type': "application/json"})
    console.log("here are the items in your cart:\n")
    res.send(cartItems);
    });

// accept POST request at URI: /cartItemsPage
cartItemsPage.post("/cartItemsPage", (req, res) => {
    res.send("adding item to cart");
    console.log(req.body);
    });
// accept PUT request at URI: /cartItemsPage
cartItemsPage.put("/cartItemsPage/:id", (req, res) => {
    res.send("altering cart item");
    response.write(req.params.id);
    });
// accept DELETE request at URI: /cartItemsPage
cartItemsPage.delete("/cartItemsPage", (req, res) => {
    res.send("Deleting a cart item");
    console.log(req.params.id);
    });
    
module.exports = cartItems;