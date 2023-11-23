const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

dotenv.config({
    path: './.env'
})

const port = process.env.PORT || 5000;

const dbConnect = mysql.createConnection({
    host: 'localhost',
    database: process.env.DATABASE,
    user: 'root',
    password: ''
})

dbConnect.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('connexion réussie');
    }
})

const publicDir = path.join(__dirname, './public');
app.use(express.static(publicDir));

app.set('view engine', 'hbs');

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log(`Le serveur est lancé dans le port ${port}`);
})