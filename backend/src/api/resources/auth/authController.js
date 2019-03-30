const bcrypt = require('bcryptjs');
const UserService = require('../../../services/auth/createToken');
const verif = require('../../../services/auth/verify');

// permet de faire la creation d'un nouvel utilisateur
exports.createUser = async function crea(req, res) {
  const keySalt = bcrypt.genSaltSync();
  const hashedPwd = bcrypt.hashSync(req.body.pwd, keySalt);
  const User = {
    name: req.body.name,
    last_name: req.body.last_name,
    mailAddress: req.body.email,
    listGroup: [{
      id_repar: [],
      id_group: [],
    }],
    // isProf: req.body.isProf,
    salt: keySalt,
    isProf: req.body.isProf,
    hashPassword: hashedPwd,
  };
  try {
    const createdUser = await UserService.createUser(User);
    // res.redirect('/login-form');
    // il faudrait idealement permettre la redirection de l'une des pages sur l'autre
    return res.status(200).json({ token: createdUser, message: 'Utilisateur bien ajouté à la base de données' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: "Echec de l'inscription" });
  }
};

// permet de gerer le login d'un utilisateur :
exports.loginUser = async function log(req, res) {
  const User = {
    mailAddress: req.body.email,
    hashPassword: req.body.pwd,
  };
  try {
    const loginUser = await UserService.loginUser(User);
    if (loginUser === null) {
      return res.status(400).json({ token: loginUser, message: 'Invalid password' });
    // eslint-disable-next-line no-else-return
    } else {
      return res.status(200).json({ token: loginUser, message: 'Vous êtes connectés' });
    }
    // eslint-disable-next-line no-else-return
  } catch (e) {
    return res.status(400).json({ status: 400, message: 'Invalid username'});
  }
};

// pour se connecter au formulaire

exports.verifToken = async function ver(req, res) {
  const token = {
    tok: req.body.token,
  };
  try {
    const result = await verif.verifyToken(token.tok);
    return res.status(200).send({ token: result });
  } catch (e) {
    return res.status(400).send('Invalid token');
  }
};
