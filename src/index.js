/*función que sirve para cambiar pantallas*/

function secondPage() { /* nombre así a la función desde html (específico button onclick)*/
    let pantallas = document.getElementById("firstPage")
    pantallas.style = "display:none";
    document.getElementById("secondPage").style.display = "block";

  }
  /*Función que sirve para cambiar de color la pantalla*/

function changeBackground(color) {/*nombré así a la función desde html mas específico desde el button con atributo title*/
   document.body.style.background = color;
}

window.addEventListener("click",function() { changeBackground('#BF52FF') }); 
/*se ejecuta la función al hacer click*/