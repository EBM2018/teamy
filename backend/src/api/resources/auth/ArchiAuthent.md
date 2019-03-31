L'authentification est répartie entre 4 fichiers principalement à l'heure actuelle :

/backend/src/api/resources/auth/index.js
Dans ce fichier, les routes pour le login et l'inscription de l'utilisateur sont définies

/backend/src/api/resources/auth/authController.js
2 méthodes sont définies au sein de ce fichier:
    - createUser --> redirige vers createToken.js, vers la fonction createUser de même nom dans ce fichier
    Un salt aléatoire est généré, et est stocké dans la base de données.
    Le mot de passe est ensuite haché en utilisant la bibliothèque bcrypt.
    
    Exemple d'entrée:
    {
	"name": "Paul",
    "last_name": "Grignon",
    "email": "paulgrignon@centrale.centralelille.fr",
    "isProf": false,
    "pwd": "lapinou"
    }

    - loginUser --> redirige vers createToken.js, vers la fonction loginUser dans ce fichier

    Exemple d'entrée:
    {
    "email": "paulgrignon@centrale.centralelille.fr",
    "pwd": "lapinou"
    }

/backend/src/services/auth/createToken.js

2 méthodes définies au sein de ce fichier :

    - createUser, qui enregistre les données d'un nouvel utilisateur au sein de la base de données

    - loginUser, qui compare le mot de passe de l'utilisateur avec celui qui est stocké au sein de la base de données. Si le résultat est positif,il génère un token contenant des informations utiles de l'utilisateur, à l'aide du secret stocké en temps que variable locale, et le retourne
    Le token a une durée d'expiration d'une heure, et utilise l'algorithme 'HS256'.
    En ce qui concerne le payload (qui contient les données de l'utilisateur), il contient les champs name, last_name et mailAddress.
    {
        name:"Paul",
        last_name:"Grignon",
        mailAddress:"paul.grignon@centrale.centralelille.fr"
    }

/backend/src/services/auth/verify.js

Comporte une méthode verifyToken

Prend un token en entrée
Retourne le payload contenu dans le token (donc les informations de l'utilisateur)


