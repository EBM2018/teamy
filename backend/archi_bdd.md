# Architecture de la base de données :

## User :
```
 - id_ : int;
 - name : String;
 - last_name : String;
 - + Connexion columns
```
## List_Prof

**Une liste par prof**
```
 - id_ : int;
 - label : String;
 - list_student : list(User_id);
 - Group : list({
 
		"id_" : int; 
		
		"group_label":String;
		
		"config": list({
				"id_config": int;
				
				"label_config": String;
				
				"repartition : {"group_1_name": [id_student, ...] ; "group_2_name": [id,...] };
				
				"tags" : list(Strings);
				
				"date" : Date
				
				});
		})
```
