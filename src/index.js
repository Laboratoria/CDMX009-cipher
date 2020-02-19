    window.onload = () => {

    //variable de mi boton "entendido" con el nombre de id "boton"
    //nota: se le tiene que poner un div id al comienzo de cada pagina para
    //poderla meter en eventos y poder pasar a la siguiente pagina

    const boton = document.getElementById("boton");

    boton.addEventListener("click", function() {
    console.log("Has hecho clic en el botón");
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display= "block";

    });


    /*pantalla cifrado*/

    const cifrado = document.getElementById("page-encode");//se liga a href

    cifrado.addEventListener("click", function() {
      document.getElementById("text-encode").style.display = "none";
      document.getElementById("text-encode").style.display= "block";
      document.getElementById("text-decode").style.display= "none";
    });

    /*variables para funcionamiento de botones cifrar*/

    const btnTextEncode = document.getElementById('btn_encode');
    btnTextEncode.addEventListener("click", function() {
        //enlaza a caja de texto html y css
        let textEncode = document.getElementById("box-msg-encode").value;
        //Enlaza offset a html y css
        let number_offset = document.getElementById("offset_ci").value;
        document.getElementById("msg-encode-check").innerHTML = window.cipher.encode(textEncode, number_offset);
    });


    /*pantalla descifrado*/

    const descifrado = document.getElementById("page-decode");//se liga a href

    descifrado.addEventListener("click", function() {

      document.getElementById("text-decode").style.display = "none";
      document.getElementById("text-decode").style.display = "block";
      document.getElementById("text-encode").style.display = "none";
    });

    /*variables para funcionamiento de botones descifrar*/

    const btnTextDecode = document.getElementById("btn_decode");
    btnTextDecode.addEventListener("click", function() {
      //enlaza a caja de texto html y css
      let textDecode = document.getElementById("box-msg-decode").value;
      //Enlaza offset a html y css
      let number_offset = document.getElementById("offset_des").value;
      document.getElementById("msg-decode-check").innerHTML = window.cipher.decode(textDecode, number_offset);
    });

}
