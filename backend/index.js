const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const products = require("./apis/products");
const carts = require("./apis/carts")

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("wellCome");
});

app.get("/products", (req, res) => {
    res.send(products);
});

app.get("/api/carts", (req, res) => {
    res.send(carts);
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server Running on http://localhost:${port}`));