var UserService = require('../services/user.services.js');

// permet de faire la création d'un nouvel utilisateur (pas encore ajouté dans la bdd)
exports.createUser = async function (req, res, next){ 
    
    // A quoi sert le next ?
    // req.body contient les valeurs soumises au formulaire
    var User = {
        name: req.body.name,
        last_name: req.body.last_name,
        mail: req.body.mail,
        isprof: req.body.isprof,
        // l'adresse mail servira d'identifiant
        pwd: req.body.pwd,
    };

    try {
        var createdUser = await UserService.createUser(User); 
        
        // await permet d'interrompre 
        // l'exécution d'une fonction asynchrone 
        // et attend la résolution d'une promesse
        
        return res.status(201).json({data: createdUser, message: "Utilisateur bien ajouté à la base de données" });
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
        return res.status(201).json({data: loginUser, message: "Vous êtes connectés"});
    } catch (e) {
        return res.status(400).json({status: 400, message: "Invalid username"});
    }
};
