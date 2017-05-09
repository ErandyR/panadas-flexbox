//codigo para eliminar las imagenes
var botonesCerrar = document.getElementsByClassName("cerrar");

for (var i = 0; i<botonesCerrar.length; i++){
  botonesCerrar[i].addEventListener("click", eliminar)
}

function eliminar(){
    this.previousSibling.style.visibility="hidden";
    this.style.display="none"
}
