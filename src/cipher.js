function codificando(){
    //Declarando variables iniciales
    let texto=("PERRO");
    let desplazamiento= 2;
    //aquí terminan variables globales
    //let i=0;
    for (i=0;i<=texto.length;i++){
    let codificar= texto.charCodeAt();
    console.log(codificar);
    //let convirtiendo=((parseInt(codificar)-65+/*parseInt*/desplazamiento)%26+65)/*.join(" ")*/;
}
} 

//alert(codificando);
console.log(codificando());
