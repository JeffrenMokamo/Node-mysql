const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/inscription', (req, res) => {
    res.render('inscription')
})

router.get('/connexion', (req, res) => {
    res.render('connexion')
})

module.exports = router;