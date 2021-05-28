
    var start = 0;
    setInterval(function(){
        colores(start);
    },2500); // ms

    function colores(){
        elemtsColor = new Array;
        elemtsColor = document.getElementsByClassName("variarColor") ;
        color = new Array ;
        //color = ['#64a3da17','#2b55ce17','#2bce6417','#ce2b7e17','#79161617','#9e7f7f17','#552d9417','#4eb9e217'];
        color = ['#64a3da17','#2b55ce17'];
        function getColor(index_c){
            if(index_c > color.length){
                index_c = 0 ;
            }
            return color[index_c] ;
        }
        for(var index=0 ; index<elemtsColor.length ; index++ ){
            elemtsColor[index].style.background = getColor( start+index );
        }
        start++ ;
        if( start >= color.length ){
            start = 0;
        }
    }
    colores();
