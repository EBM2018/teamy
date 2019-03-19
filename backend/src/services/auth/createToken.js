var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fs = require('fs');
var User = require('../user/model');
var config = require('../../../src/config/index');

// bcrypt.compare va permettre de comparer un password avec la valeur hachée stockée en bdd
// bcryot.hash(data,salt) va permettre de stocker la valeur hachée du mdp dans la bdd
// data est la donnée à encrypter, salt la clé de hashage

// exports va permettre d'utiliser createUser sur d'autres pages
exports.createUser = async function (user){
    var hashedPwd = bcrypt.hashSync(user.pwd, 8);
    console.log('Mdp haché ' + hashedPwd);
    // On va ajouter directement dans la bdd
    // Il ne faudra pas oublier de rajouter dans 
    // un autre temps la liste des groupes auxquels l'utilisateur appartient
    var newUser = new User({
        name: user.name,
        last_name: user.last_name, 
        email: user.email,
        isProf: user.isProf,
        pwd: hashedPwd,
    });
    console.log('Name ' + newUser.name);
    console.log('Last_name ' + newUser.last_name);
    console.log('email ' + newUser.email);
    console.log('isProf ' + newUser.isProf);
    console.log('pwd ' + newUser.hashedPwd);


    var savedUser = await newUser.save();
    console.log(savedUser);
    // sauvegarde de l'utilisateur  dans la bdd
    // try {
    //     var savedUser = await newUser.save; 
    //     // await permet d'attendre la résolution de la tâche
    //     // dans le cas présent, on attend que l'utilisateur ait été sauvé 
        
    //     // clé de hashage utilisée par défaut : HS256, mais clé symétrique 
    //     // utiliser RS256 à la place
    //     var token = jwt.sign({id: savedUser._id}, {algorithm: 'RS256'}, 
    //     config.secret,
    //     {expiresIn: 3600}); // 3600 secondes, correspond à 1h   
    //     return token;
    // } catch (e){
    //     throw Error("Echec de l'ajout d'un nouvel utilisateur");
    // }
};

// demande d'authentification de l'utilisateur
exports.loginUser = async function (user) {
    
        // on cherche l'utilisateur dans la bdd avec findOne
        try {
        var userData = await User.findOne({ email: user.email});
        // var pwdIsValid = bcrypt.compareSync(user.pwd, userData.pwd);
        console.log('utilisateur trouvé');
        if (userData.pwd === user.pwd){
            console.log('bon mdp');
            var payload = {
                name: userData.name,
                last_name: userData.last_name,
                email: userData.email,
            };
            var privateKEY = fs.readFileSync('./private.key', 'utf8', function (err, data){
                if (err) throw err;
                console.log(data);
            });
            var signOptions = {expiresIn: 3600, algorithm: 'RS256'}; 
            var token = jwt.sign(payload, privateKEY, signOptions);
            console.log('Token - ' + token);
            return token;
        }
        // eslint-disable-next-line no-else-return
        else {
            console.log('Faux mdp');
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