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
