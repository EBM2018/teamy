const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../user/model');
const config = require('../../../src/config/index');

// bcrypt.compare va permettre de comparer un password avec la valeur hachee stockee en bdd
// bcrypt.hash(data,salt) va permettre de stocker la valeur hachee du mdp dans la bdd
// data est la donnée à encrypter, salt la cle de hashage

// exports va permettre d'utiliser createUser sur d'autres pages
exports.createUser = async function crea(user) {
  const newUser = new User({
    name: user.name,
    last_name: user.last_name,
    mailAddress: user.mailAddress,
    isProf: user.isProf,
    hashPassword: user.hashPassword,
    hash_salt: user.salt,
  });
  try {
    const savedUser = await newUser.save();
    console.log(savedUser);
  } catch (e) {
    throw Error("Echec de l'ajout d'un nouvel utilisateur");
  }
};

// demande d'authentification de l'utilisateur
exports.loginUser = async function log(user) {
  // on cherche l'utilisateur dans la bdd avec findOne
  try {
    const userData = await User.findOne({ mailAddress: user.mailAddress });
    const pwdIsValid = bcrypt.compareSync(user.hashPassword, userData.hashPassword);
    if (pwdIsValid) {
      // generation du token
      const payload = {
        name: userData.name,
        last_name: userData.last_name,
        mailAddress: userData.mailAddress,
      };
      const signOptions = { expiresIn: 3600, algorithm: 'HS256' };
      const token = jwt.sign(payload, config.secret, signOptions);
      console.log('token : ');
      console.log(token);
      return token;
    }
    return null;
  } catch (e) {
    throw Error("Problème lors de l'authentification de l'utilisateur");
  }
};
