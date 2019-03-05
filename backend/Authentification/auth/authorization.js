var jwt = require('jsonwebtoken');
var config = require('../../src/config/index.js');

var authorization = function (req, res /* , next */){
    var token = req.headers['x-access-token'];
    var msg = {auth: false, message: 'No token provided.'};
    if (!token) res.status(500).send(msg);
    jwt.verify(token, config.SECRET, function (err, decoded) {
        msg.message = "Echec de l'authentification du token.";
        if (err) res.status(500).send(msg);
        return decoded;
    });
};

module.exports = authorization;