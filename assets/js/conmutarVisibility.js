// ocultar ventana emergente
function visibility(IdElement) {
	if ( document.getElementById(IdElement).style.display == "block"){
		document.getElementById(IdElement).style.display = "none" ;
	}else{
		document.getElementById(IdElement).style.display = "block" ;
	}
};
