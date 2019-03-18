// /routes/api/user.route.js
var express = require('express');

var router = express.Router();
var UserController = require('./authController');

console.log('authentRoute');
// Authorize each API with middleware and map to the Controller Functions

router.get('/registration', UserController.createUser);
router.get('/login/', UserController.loginUser);
router.get('/login-form', UserController.loginForm);
// on ne fait pas de suppression, et on n'a pas besoin d'accéder à la liste utilisateurs

// Export the Router

// var user1 = {
//     name: 'Lara',
//     last_name: 'Bine',
//     pwd: 'Hamster',
// };

// UserController.createUser(user1);
module.exports = router;