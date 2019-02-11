var nbGroupes = parseInt(prompt('Choisissez un nombre de groupes'));

var classe = ['Cyril','Nathan','Hugo','Valentin', 'Axel', 'Gabin','Simon','Max','Hamza','Florian','Nans','Quentin','Baptiste L.','Felix','Arthur','Baptiste D.'];

function repartitionEleves(nbGroupes,longueur,dejaajoute,tab){
    var tailleGroupeMax=Math.trunc(longueur/nbGroupes);
    var indice=1;
    while(indice<nbGroupes+1){
        while(tab[indice-1].length<tailleGroupeMax){
            var idEl = getRandomInt(longueur);
            //On choisit au hasard un élève, s'il n'est pas déjà dans un groupe, on le place dans le premier groupe disponible;
            if (dejaajoute[idEl]===0){
                tab[indice-1].push(classe[idEl]);
                dejaajoute[idEl]=indice;
            }
        }
        indice++;
    }
}

function compositionGroupes(nbGroupes,tab){
    for(indGroupe=0; indGroupe<nbGroupes;indGroupe++){  
        console.log("Le groupe n°" + indGroupe + " est composé de : " +  afficherEleves(tab[indGroupe]));
    }
}

function afficherEleves(groupe){
    var eleves=groupe[0];
    for(var i=1; i<groupe.length;i++){
        eleves+=', ' + groupe[i];
    }
    return eleves;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}  

function createVariables(k){        // fonction qui va permettre de créer une variable (un tableau) pour chaque groupe que le professeur veut créer
    var accounts = [];
    for (var i = 0; i < k; i++) {
        accounts.push([]);
    } 
    return accounts;
}

var indice = 1;

function finaliserGroupes(dejaajoute,tab){        //on répartit équitablement les élèves entre les groupes, puis on ajoute les élèves sans groupe aux groupes restants
    for(i=0;i<dejaajoute.length;i++){
        if(dejaajoute[i]===0){
            tab[indice-1].push(classe[i]);
            indice++;
        }
    }
}

function creationGroupeAuto(nbGroupes,classe){
    var longueur = classe.length;
    var dejaajoute = [];       // tableau qui permet, pour chaque élève, d'indiquer s'il a déjà été ajouté dans un groupe
    var tab = createVariables(nbGroupes);
    for(var i=0; i<longueur; i++){
        dejaajoute.push(0);
    }
    repartitionEleves(nbGroupes,longueur,dejaajoute,tab);
    console.log(tab);
    finaliserGroupes(dejaajoute,tab);
    compositionGroupes(nbGroupes,tab);
}

creationGroupeAuto(nbGroupes,classe);
