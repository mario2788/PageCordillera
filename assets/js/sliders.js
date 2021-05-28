// elementos sliders
sliders = new Array;
sliders = document.getElementsByClassName("slider-contenedor") ;
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
// let width = sliderIndividual[0].clientWidth;
let width = document.getElementsByClassName("contenedor")[0].clientWidth ;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    for(var k = 0 ;k < sliders.length; k++){
        sliders[k].style.transform = "translate("+(-width*contador)+"px)";
        sliders[k].style.transition = "transform .8s";
    }
    contador++;

    if(contador == sliderIndividual.length/3){ // 3 conjuntos de imagenes
        setTimeout(function(){
            for(var k = 0 ;k < sliders.length; k++){
                sliders[k].style.transform = "translate(0px)";
                sliders[k].style.transition = "transform 0s";
            }
            contador=1;
        },1500)
    }
}
