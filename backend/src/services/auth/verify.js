const fs = require('fs');
const jwt = require('jsonwebtoken');

exports.verifyToken = function ver(token) {
  const verifyOptions = { expiresIn: 3600, algorithm: 'RS256' };
  const publicKEY = fs.readFileSync('./public.key', 'utf-8');
  try {
    const verifToken = jwt.verify(token, publicKEY, verifyOptions);
    return verifToken;
  } catch (e) {
    throw Error('Invalid token or no token found');
  }
};
