function leerCookie(nombre) {
    var lista = document.cookie.split(";");
    micookie = new String ;
    for (i in lista) {
        var busca = lista[i].search(nombre);
        if ( busca > -1 ){
            micookie = lista[i] ;
        }
    }
    var igual = micookie.indexOf("=");
    var valor = micookie.substring(igual+1);
    return valor;
}
