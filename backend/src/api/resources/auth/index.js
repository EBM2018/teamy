// /routes/api/user.route.js
var express = require('express');

var router = express.Router();
var UserController = require('./authController');

// Authorize each API with middleware and map to the Controller Functions

router.post('/registration', UserController.createUser);
router.post('/login/', UserController.loginUser);
router.get('/login-form', UserController.loginForm);
router.get('/createForm', UserController.createForm);

module.exports = router;