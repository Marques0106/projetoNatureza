function ocultarListas(lista){
    listaSelecionada = lista;
    if (listaSelecionada == 'listaBiomas'){
        document.getElementById("listaSobre").style.display = "none";
        document.getElementById("listaAnimais").style.display = "none";
    } else if (listaSelecionada == 'listaAnimais') {
        document.getElementById("listaSobre").style.display = "none";
        document.getElementById("listaBiomas").style.display = "none";
    } else if (listaSelecionada == "listaSobre") {
        document.getElementById("listaBiomas").style.display = "none";
        document.getElementById("listaAnimais").style.display = "none";
    } 
}


function mostrarLista(lista) {
    ocultarListas(lista);
    document.getElementById(lista).style.display = "block";
}