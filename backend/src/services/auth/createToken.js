var jwt = require('jsonwebtoken');
const fs = require('fs');
var bcrypt = require('bcryptjs');
var User = require('../user/model');
var config = require('../../../src/config/index');

// bcrypt.compare va permettre de comparer un password avec la valeur hachee stockee en bdd
// bcrypt.hash(data,salt) va permettre de stocker la valeur hachee du mdp dans la bdd
// data est la donnée à encrypter, salt la cle de hashage

// exports va permettre d'utiliser createUser sur d'autres pages
exports.createUser = async function (user){
    // On va ajouter directement dans la bdd
    // Il ne faudra pas oublier de rajouter dans 
    // un autre temps la liste des groupes auxquels l'utilisateur appartient
    var newUser = new User({
        name: user.name,
        last_name: user.last_name, 
        email: user.email,
        isProf: user.isProf,
        pwd: user.pwd,
    });
    try {
        var savedUser = await newUser.save();
    }
    catch (e){
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
exports.loginUser = async function (user) {
    
        // on cherche l'utilisateur dans la bdd avec findOne
        try {
        var userData = await User.findOne({ email: user.email});
        var pwdIsValid = bcrypt.compareSync(user.pwd, userData.pwd);
        if (pwdIsValid){
            // generation du token
            var payload = {
                name: userData.name,
                last_name: userData.last_name,
                email: userData.email,
            };
            var privateKEY = fs.readFileSync('./private.key', 'utf8', function (err, data){
                if (err) throw err;
            });
            var signOptions = {expiresIn: 3600, algorithm: 'RS256'}; 
            var token = jwt.sign(payload, privateKEY, signOptions);
            return token;
        }
        // eslint-disable-next-line no-else-return
        else {
            return null;
        }
    } catch (e){
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