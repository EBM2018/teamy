// /routes/api/user.route.js
var express = require('express');

var router = express.Router();
var UserController = require('../../controllers/users.controller.js');
// var Authorization = require('../../auth/authorization.js');

// Authorize each API with middleware and map to the Controller Functions
router.post('/registration', UserController.createUser);
router.post('/login/', UserController.loginUser);
// on ne fait pas de suppression, et on n'a pas besoin d'accéder à la liste utilisateurs

// Export the Router

module.exports = router;