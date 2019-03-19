const fs = require('fs');
const jwt = require('jsonwebtoken');

exports.verifyToken = function (token){
    var verifyOptions = {expiresIn: 3600, algorithm: 'RS256'};
    const publicKEY = fs.readFileSync('./public.key', 'utf-8');
    // try {
        return jwt.verify(token, publicKEY, verifyOptions);
    // }
    // catch (e) {
    //     throw Error('Invalid token or no token found');
    // }
};