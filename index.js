const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.get("/", (res, req) => {
    res.send("Salut");
})

app.listen(port, () => {
    console.log(`Le serveur est lancé dans le port ${port}`);
})