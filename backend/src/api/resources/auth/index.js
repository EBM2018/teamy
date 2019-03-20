// /routes/api/user.route.js
const express = require('express');

const router = express.Router();
const UserController = require('./authController');

// Authorize each API with middleware and map to the Controller Functions

router.post('/registration', UserController.createUser)
router.post('/login/', UserController.loginUser)
router.get('/login-form', UserController.loginForm);
router.get('/createForm', UserController.createForm);

module.exports = router
