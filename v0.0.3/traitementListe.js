let csvToJson=require('convert-csv-to-json');
var csvInput='Classe1.csv';

function ajoutListe(csvInput){
    let json = csvToJson.getJsonFromCsv("Classe1.csv");
    for(let i=0; i<json.length; i++){
        console.log(json[i]);
    }
    return json;
}

var json = ajoutListe(csvInput);

function selectClasse(){
    var list = document.getElementById('list');
    list.addEventListener('change',function(){
        var nom=list.options[list.selectedIndex].innerHTML;
        alert(nom);
        document.cookie = "nomClasse=" + nom;
    });
}


function convertJsonIntoArray(json){
    var tab=[];
    for(let i=0; i<json.length;i++){
        tab.push(json[i].first_name);
    }
    console.log(tab);
    return tab;
}

var listeEleves = convertJsonIntoArray(json);