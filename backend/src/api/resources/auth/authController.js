const bcrypt = require('bcryptjs');
const UserService = require('../../../services/auth/createToken');

// permet de faire la creation d'un nouvel utilisateur
exports.createUser = async function crea(req, res) {
  const keySalt = bcrypt.genSaltSync();
  const hashedPwd = bcrypt.hashSync(req.body.pwd, keySalt);
  const User = {
    name: req.body.name,
    last_name: req.body.last_name,
    mailAddress: req.body.email,
    // isProf: req.body.isProf,
    salt: keySalt,
    isProf: false,
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
      // const verification = UserServiceVerif.verifyToken(loginUser);
      return res.status(200).json({ token: loginUser, message: 'Vous êtes connectés' });
    }
    // eslint-disable-next-line no-else-return
  } catch (e) {
    return res.status(400).json({ status: 400, message: 'Invalid username' });
  }
};
