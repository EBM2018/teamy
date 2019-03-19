const express = require('express');
const app = express();
var bcrypt = require('bcryptjs');
var UserService = require('../../../services/auth/createToken');
const UserServiceVerif = require('../../../services/auth/verify');

// permet de faire la création d'un nouvel utilisateur (pas encore ajouté dans la bdd)
exports.createUser = async function (req, res, next){ 
    
    // A quoi sert le next ?
    // req.body contient les valeurs soumises au formulaire
    var hashedPwd = bcrypt.hashSync(req.body.pwd, 8);
    var User = {
        name: req.body.name,
        last_name: req.body.last_name,
        email: req.body.email,
        // isProf: req.body.isProf,
        isProf: false,
        // l'adresse mail servira d'identifiant
        pwd: hashedPwd,
    };
    try {
        var createdUser = await UserService.createUser(User); 
        // res.redirect('/login-form');
        // il faudrait idéalement permettre la redirection de l'une des pages sur l'autre
        return res.status(200).json({token: createdUser, message: "Utilisateur bien ajouté à la base de données" });
    }   
        catch (e) {
        return res.status(400).json({status: 400, message: "Echec de l'inscription" });
    }
};

// permet de gérer le login d'un utilisateur :
exports.loginUser = async function (req, res, next){
    var User = {
        email: req.body.email,
        pwd: req.body.pwd,
    };
    try {
        var loginUser = await UserService.loginUser(User);
        if (loginUser === null){
            return res.status(400).json({token: loginUser, message: "Invalid password"});
        // eslint-disable-next-line no-else-return
        } else {
            var verification = UserServiceVerif.verifyToken(loginUser);
            console.log('verification: ' + verification);
            return res.status(200).json({token: loginUser, message: "Vous êtes connectés"});
        }
    }
    catch (e) {
        return res.status(400).json({status: 400, message: "Invalid username"});
    }
};

// pour se connecter au formulaire

exports.loginForm = async function (req, res, next){
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

exports.createForm = async function (req, res, next){
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
