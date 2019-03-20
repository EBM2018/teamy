const bcrypt = require('bcryptjs');
const UserService = require('../../../services/auth/createToken');
const UserServiceVerif = require('../../../services/auth/verify');

// permet de faire la creation d'un nouvel utilisateur (pas encore ajoute dans la bdd)
exports.createUser = async function crea(req, res) {
  const hashedPwd = bcrypt.hashSync(req.body.pwd, 8);
  const User = {
    name: req.body.name,
    last_name: req.body.last_name,
    mailAddress: req.body.email,
    // isProf: req.body.isProf,
    isProf: false,
    hashPassword: hashedPwd,
  };
  try {
    const createdUser = await UserService.createUser(User);
    console.log(createdUser.mailAddress);
    // console.log(createdUser.hashPassword);
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
    console.log(loginUser);
    if (loginUser === null) {
      return res.status(400).json({ token: loginUser, message: 'Invalid password' });
    // eslint-disable-next-line no-else-return
    } else {
      const verification = UserServiceVerif.verifyToken(loginUser);
      return res.status(200).json({ token: loginUser, message: 'Vous êtes connectés', verif: verification });
    }
    // eslint-disable-next-line no-else-return
    // else {
    //     return res.status(400).json({token: loginUser, message: "Probleme de token"});
    // }
  } catch (e) {
    return res.status(400).json({ status: 400, message: 'Invalid username' });
  }
};


// pour se connecter au formulaire

exports.loginForm = async function login(req, res) {
  return res.status(200).send(`
    <h1> Test login form </h1>
    <form method ="post" action = "/auth/login/">
    <table>
    <tr> <td> Email </td> <td> <input type="text" name="email" id="email">
    </input> </td> </tr>
    <tr> <td> Password </td><td> <input type="text" name="pwd" id="pwd">
    </input> </td> </tr>
    </table>

    <input type="submit" value="login" />
    <input type="hidden" name="next" value="next"/>
    </form>
    </form>
    `);
};

exports.createForm = async function cre(req, res) {
  return res.status(200).send(`
    <h1> Test création form </h1>
    <form method ="post" action = "/auth/registration">
    <table>
    <tr> <td> Name </td> <td> <input type="text" name="name" id="name">
    </input> </td> </tr>
    <tr> <td> Last Name </td><td> <input type="text" name="last_name" id="last_name">
    </input> </td> </tr>
    <tr> <td> Email </td> <td> <input type="text" name="email" id="email">
    </input> </td> </tr>
    <tr> <td> Password </td><td> <input type="text" name="pwd" id="pwd">
    </input> </td> </tr>
    </table>

    <input type="submit" value="Création" />
    <input type="hidden" name="next" value="next"/>
    </form>
    </form>
    `);
};
