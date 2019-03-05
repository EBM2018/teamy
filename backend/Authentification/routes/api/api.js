var express = require('express');

var router = express.Router();
var users = require('./user.route');
router.use('/users', users);

module.exports = router;