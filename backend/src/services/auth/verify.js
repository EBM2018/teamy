const jwt = require('jsonwebtoken');
const config = require('../../../src/config/index');

exports.verifyToken = function ver(token) {
  console.log('Enter loop');
  const verifyOptions = { expiresIn: 3600, algorithm: 'HS256' };
  try {
    const verifToken = jwt.verify(token, config.secret, verifyOptions);
    console.log(verifToken);
    return verifToken;
  } catch (e) {
    throw Error('Invalid token or no token found');
  }
};
