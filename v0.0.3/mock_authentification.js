var authent=true;

var auth1=new Object(); //élève
auth1.id=1;
auth1.first_name = "Lara";
auth1.last_name = "Clette";
auth1.is_prof=false;
auth1.listName="segpa";
auth1.idGroupe=1;

var auth2=new Object(); //prof
auth2.id=2;
auth2.first_name = "Pascal";
auth2.last_name = "Legrandfrere";
auth2.prof=true;
auth2.idrepart = 1;
auth2.labelrepart="Fil rouge";
auth2.daterepart = "25/02/2019";
auth2.groupesrepart=[{"name_group":"group1", "list_elev":"[Nathan, Hugo, Valentin, Axel]"}, {"name_group": "group2", "list_elev": "[Gabin, Simon, Max, Hamza]"},{"name_group": "group3", "list_elev":"[Florian, Nans, Quentin, Baptiste L.]"},{"name_group": "group4", "list_elev":"[Felix,Arthur,Baptiste D.,Cyril]"}];

console.log(auth1);
console.log(auth2);
