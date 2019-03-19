L'authentification est répartie entre 4 fichiers principalement à l'heure actuelle :

/backend/src/api/resources/auth/index.js
Dans ce fichier, les routes pour le login et l'inscription de l'utilisateur sont définies

/backend/src/api/resources/auth/authController.js
4 méthodes sont définies au sein de ce fichier:
    - loginForm, permet de générer le formulaire qui sera utilisé pour envoyer les informations de connection à la page --> une solution plus
    propre sera bientot implémentée, lorsqu'on réalisera la connexion avec le front, cependant le fonctionnement sera similaire : on remplit les infos dans le formulaire, et elles sont transmises à la fonction loginUser, qui prendra le relai

    - createForm, comme précédemment mais pour l'inscription d'un nouvel utilisateur, transmis à createUser

    