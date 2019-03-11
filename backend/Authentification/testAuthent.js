var express = require('express');

var router = express.Router();

router.use('/user', '../src/api/resources/user');
router.use('/profGroup', '../src/api/resources/profGroup');
router.use('/repartition', '../src/api/resources/repartition');

var UserController = require('../Authentification/controllers/users.controller.js');

var user1 = {
    name: "Lara",
    last_name: "Dine",
    mail: "ldine@centrale.centralelille.fr",
    isprof: false,
    pwd: "Raclette",
};

UserController.createUser(user1);

module.exports = router;