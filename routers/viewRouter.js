const express = require('express');
const authController = require('../controllers/authController');
const graphController = require('../controllers/graphController');
const router = express.Router();

router.get('/user', authController.checkUser);

router.get('/graph', graphController.getGraph);

module.exports = router; 