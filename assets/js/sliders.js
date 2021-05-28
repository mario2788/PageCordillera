function Sliders( clssContent, clssElements ){
    let slider = document.querySelector( clssContent )
    let sliderIndividual = document.querySelectorAll( clssElements )
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
        slider.style.transform = "translate("+(-width*contador)+"px)";
        // slider.style.transform = "translate("+(-300*contador)+"px)";
        slider.style.transition = "transform .8s";
        contador++;

        if(contador == sliderIndividual.length){
            setTimeout(function(){
                slider.style.transform = "translate(0px)";
                slider.style.transition = "transform 0s";
                contador=1;
            },1500)
        }
    }
}

Sliders( ".slider1", ".ElementSlider1" ) ;
Sliders( ".slider2", ".ElementSlider2" ) ;
Sliders( ".slider3", ".ElementSlider3" ) ;
