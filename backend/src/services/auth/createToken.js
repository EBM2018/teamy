const jwt = require('jsonwebtoken');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const User = require('../user/model');
// var config = require('../../../src/config/index');

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
  });
  try {
    const savedUser = await newUser.save();
    console.log(savedUser);
  } catch (e) {
    throw Error("Echec de l'ajout d'un nouvel utilisateur");
  }
  //     // cle de hashage utilisee par defaut : HS256, mais cle symetrique
  //     // utiliser RS256 a la place
  //     var token = jwt.sign({id: savedUser._id}, {algorithm: 'RS256'},
  //     config.secret,
  //     {expiresIn: 3600}); // 3600 secondes, correspond à 1h
  //     return token;
};

// demande d'authentification de l'utilisateur
exports.loginUser = async function log(user) {
  // on cherche l'utilisateur dans la bdd avec findOne
  try {
    const userData = await User.findOne({ mailAddress: user.mailAddress });
    const pwdIsValid = bcrypt.compareSync(user.hashPassword, userData.hashPassword);
    console.log(pwdIsValid);
    if (pwdIsValid) {
      // generation du token
      const payload = {
        name: userData.name,
        last_name: userData.last_name,
        mailAddress: userData.mailAddress,
      };
      const privateKEY = fs.readFileSync('./private.key', 'utf8', (error) => {
        if (error) throw error;
      });
      const signOptions = { expiresIn: 3600, algorithm: 'RS256' };
      const token = jwt.sign(payload, privateKEY, signOptions);
      return token;
    }
    return null;
  } catch (e) {
    throw Error("Problème lors de l'authentification de l'utilisateur");
  }
};

// try {
//         var pwdIsValid = true;
//         if (!pwdIsValid) throw Error("Mauvais mot de passe");
//         var token = jwt.sign({id: userData._id}, {algorithm: 'RS256'},
//         config.secret,
//         {expiresIn: 3600}); // 3600 secondes, correspond à 1h
//         console.log('token' + token);
//         return token;
//         } catch (e) {
//         throw Error("Problème lors de l'authentification de l'utilisateur");
//     }
// };
