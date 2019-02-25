Structure de la base de données :

Table user:

id:int;
name:"";
last_name:"";
is_prof:Boolean;
list_group:[{id_repar:int ,id_group: int]; 
//contient la liste des groupes dans lesquels se trouve un élève; vaut null si c'est un prof

Table Prof_group: // table permettant de lier un prof à ses différentes répartitions
id_repartition_group:int 
id_prof_group:int;

Table repartition: //table comprenant toutes les répartitions;

id_repartition:int;
label_repartition:"";
list_elev_repartition:[
    {"name_group" : "Group1", "list_id_eleve" : [1, 2,3]};
    {"name_group": "Group2", "list_id_eleve" [4, 5, 6]}
];
date:"";
}
