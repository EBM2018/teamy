var UserService = require('../services/user.services.js');

// permet de faire la création d'un nouvel utilisateur (pas encore ajouté dans la bdd)
exports.createUser = async function (req, res /* , next */){ 
    
    // A quoi sert le next ?
    // req.body contient les valeurs soumises au formulaire
    var User = {
        name: req.body.name,
        mail: req.body.mail,
        // l'adresse mail servira d'identifiant
        password: req.body.password,
    };
    try {
        var createdUser = await UserService.createUser(User); 
        
        // await permet d'interrompre 
        // l'exécution d'une fonction asynchrone 
        // et attend la résolution d'une promesse
        
        return res.status(201).json({data: createdUser, message: "Elève bien ajouté" });
    }   
        catch (e) {
        return res.status(400).json({status: 400, message: "Echec de l'inscription" });
    }  
};

// permet de gérer le login d'un utilisateur :
exports.login = async function (req, res /* , next */){
    var User = {
        email: req.body.email,
        password: req.body.password,
    };
    try {
        var loginUser = await UserService.loginUser(User);
        return res.status(201).json({data: loginUser, message: "Vous êtes connectés"});
    } catch (e) {
        return res.status(400).json({status: 400, message: "Invalid username"});
    }
};

// Permet de récupérer les informations de l'utilisateur ?

exports.getUsers = async function (req, res /* next */){
    // pour vérifier l'existence des paramètres de la requête
    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 10;

    try {
        var Users = await UserService.getUsers({}, page, limit);
        // permet de retourner la liste des utilisateurs avec le mot de passe encodé et le message
        return res.status(200).json({status: 200, data: Users, message: "Liste des utilisateurs récupérée"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};