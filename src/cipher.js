function codificando(){
    //Declarando variables iniciales
    //const texto=("PERRO");
    //const desplazamiento= "2";
    //aquí terminan variables globales
    //let i=0;
    for (i=0;i<=texto.length;i++){
    let codificar= texto.charCodeAt();
    let parseado= parseInt(desplazamiento);
    let paso1= codificar-65+parseado;
    let paso2= (paso1)%26+65;
    let resultado= String.fromCharCode(paso2);
    //let espacios= resultado.join(" ");
    //let convirtiendo=((codificar-65+parseInt(desplazamiento))%26+65)/*.join(" ")*/;
        return resultado;
}
} 


//alert(codificando);
 //console.log();
codificando();
 