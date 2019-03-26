L'authentification est répartie entre 4 fichiers principalement à l'heure actuelle :

/backend/src/api/resources/auth/index.js
Dans ce fichier, les routes pour le login et l'inscription de l'utilisateur sont définies

/backend/src/api/resources/auth/authController.js
4 méthodes sont définies au sein de ce fichier:
    - loginForm, permet de générer le formulaire qui sera utilisé pour envoyer les informations de connection à la page --> une solution plus
    propre sera bientot implémentée, lorsqu'on réalisera la connexion avec le front, cependant le fonctionnement sera similaire : on remplit les infos dans le formulaire, et elles sont transmises à la fonction loginUser, qui prendra le relai

    - createForm, comme précédemment mais pour l'inscription d'un nouvel utilisateur, transmis à createUser

    - createUser --> redirige vers createToken.js, vers la fonction createUser de même nom dans ce fichier

    - loginUser --> redirige vers createToken.js, vers la fonction loginUser dans ce fichier

/backend/src/services/auth/createToken.js

2 méthodes définies au sein de ce fichier :

    - createUser, qui enregistre les données d'un nouvel utilisateur au sein de la base de données

    - loginUser, qui compare le mot de passe de l'utilisateur avec celui qui est stocké au sein de la base de données. Si le résultat est positif, il génère un token contenant des informations utiles de l'utilisateur, à l'aide de la clé privée, et le retourne

/backend/src/services/auth/verify.js

Comporte une méthode verifyToken, qui permet de vérifier la validité du token, à l'aide de la clé publique


