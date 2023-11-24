const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

router.post('/inscription', authController.inscription)

module.exports = router;