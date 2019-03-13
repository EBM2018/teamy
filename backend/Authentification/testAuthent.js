var express = require('express');

var router = express.Router();

// router.use('/user', '../src/api/resources/user'); (on ne peut pas ajouter)

var UserController = require('../Authentification/controllers/users.controller.js');

var user1 = {
    name: "Lara",
    last_name: "Dine",
    mail: "ldine@centrale.centralelille.fr",
    isprof: false,
    pwd: "Raclette",
};

console.log(user1);

UserController.createUser(user1);

module.exports = router;