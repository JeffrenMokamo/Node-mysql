// Importation des packages node js
const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');

// l'initialisation d'express
const app = express();

// Configuration du fichier .env
dotenv.config({
    path: './.env'
})

const port = process.env.PORT || 5000;

// Connection avec la base des données
const dbConnect = mysql.createConnection({
    host: 'localhost',
    database: process.env.DATABASE,
    user: 'root',
    password: ''
})

// Vérification de la connection avec la base de données 
dbConnect.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('connexion réussie');
    }
})

// On signale à express de considérer le dossier public 
const publicDir = path.join(__dirname, './public');
app.use(express.static(publicDir));

app.set('view engine', 'hbs');

// Le fichier index.hbs est envoyé à la racine de notre projet express
app.get("/", (req, res) => {
    res.render("index");
})

app.get("/inscription", (req, res) => {
    res.render("inscription");
})

//Lancement du serveur
app.listen(port, () => {
    console.log(`Le serveur est lancé dans le port ${port}`);
})