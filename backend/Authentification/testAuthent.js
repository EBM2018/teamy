var express = require('express');

const mongoose = require('mongoose');

const config = require('../../backend/src/config/index');

mongoose.connect(config.mongodb.uri, { useNewUrlParser: true }, (error) => {
  if (error) {
    console.log(error);
  }
});

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
    pwd: "poulet",
};
console.log(User);
UserService.createUser(user1);
UserService.createUser(user2);
// var user3 = {
//     mail: "laraclette@centrale.centralelille.fr",
//     pwd: "Raclette",
// };
// UserService.loginUser(user3);
// console.log(User.connection("user").find());
// module.exports = router;