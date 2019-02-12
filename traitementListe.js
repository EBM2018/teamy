function selectClasse(){
    var list = document.getElementById('list');
    list.addEventListener('change',function(){
        var nom=list.options[list.selectedIndex].innerHTML;
        alert(nom);
        document.cookie = "nomClasse=" + nom;
    });
}