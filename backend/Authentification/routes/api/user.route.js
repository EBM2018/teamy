// /routes/api/user.route.js
var express = require('express');

var router = express.Router();
var UserController = require('../../controllers/users.controller.js');
var Authorization = require('../../auth/authorization.js');

// Authorize each API with middleware and map to the Controller Functions
router.post('/registration', UserController.createUser);
router.post('/login/', UserController.loginUser);
router.get('/', Authorization, UserController.getUsers);
router.delete('/:id', Authorization, UserController.removeUser);

// Export the Router

module.exports = router;