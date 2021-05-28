// ocultar ventana emergente
function ocultarById(IdElement) {
	document.getElementById(IdElement).style.visibility= "hidden";
	if( IdElement == 'notice1'){
        document.cookie = IdElement+"="+true;
	}
	if( IdElement == 'notice2'){
		document.cookie = IdElement+"="+true;
	}
};
