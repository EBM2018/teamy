var express = require('express');

var router = express.Router();
var User = require('../src/services/user/model');

// router.use('/user', '../src/api/resources/user'); (on ne peut pas ajouter)

var UserService = require('../Authentification/services/user.services.js');

var user1 = {
    name: "Lara",
    last_name: "Dine",
    mail: "ldine@centrale.centralelille.fr",
    isprof: false,
    pwd: "Raclette",
};

var user2 = {
    name: "Lara",
    last_name: "Clette",
    mail: "laraclette@centrale.centralelille.fr",
    isprof: false,
    pwd: "Raclette",
};

UserService.createUser(user1);
UserService.createUser(user2);
console.log(User.find({}, {projection: {name: 'Lara'}}));

module.exports = router;