<<<<<<< HEAD
# Structure de la base de données :

## Table user:
```
id:int;
name: String;
last_name: String;
is_prof: Boolean;
list_group:[{id_repar:int ,id_group: int]; 
```
contient la liste des groupes dans lesquels se trouve un élève; vaut null si c'est un prof

## Table Prof_group: 
```
id_repartition_group:int 
id_prof_group:int;
```
table permettant de lier un prof à ses différentes répartitions

## Table repartition: 
```
id_repartition:int;
label_repartition:String;
list_elev_repartition:[
        {"name_group" : "Group1", "list_id_eleve" : [1, 2,3]};
        {"name_group": "Group2", "list_id_eleve" [4, 5, 6]}
    ];
date:Date;
```
table comprenant toutes les répartitions;
=======
# Backend :

## Purposes :

API de Gestion des groupes d'étudiants de Centrale Lille. 
L'API distribue les informations sur les élèves, les professeurs, et leur cours. 

## Run Locally : 

### Without a docker-compose :

1. [install mongodb](https://docs.mongodb.com/manual/installation/)
2. In one CLI, run mongod : 
    
    ```(bash)
    $ sudo mongod
    ```
3. Create the local env. variables : 
    
    ```(bash)
    # assuming the mongodb port is 27017, as set by default
    $ export MONGODB_URI=mongodb://localhost:27017/teamy
    ```
4. run the app ! 
    
    ```(bash)
    $ npm start
    ```
    
 ### With a local docker-compose : 
 
 *shout out to [@Lenophie](https://github.com/Lenophie) for its tutorial :*
 
* [Install Docker CE](https://docs.docker.com/install/)
* [Install docker-compose](https://docs.docker.com/compose/install/)
* Complete the env variable in the docker-compose.local : currently the are no such variables.
* Run `sudo docker-compose -f ../docker-compose.local.yml up --build` dans le dossier `backend`
    * For a modification to be taken into account, docker-compose must be killed and restarted.
   
>>>>>>> fd7313efbe977b8078f07d0ddaeb24da9488f37e
