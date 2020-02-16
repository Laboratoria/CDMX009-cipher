window.onload = () => {

    /*activado y desactivado de los enlaces de cada pestaña*/
    const pantallacifrado = document.getElementById("pantalla-encode");
    const pantalladecifrado= document.getElementById("pantalla-decode");
    const regresar = document.getElementById("regresar");
    const borrar = document.getElementById
    const regresar2= document.getElementById("regresar2");
    /*Mostrar datos para cifrar */
    pantallacifrado.addEventListener("click", function() {
       document.getElementById("mensaje-encode").style.display = 'block'; 
       document.getElementById("login").style.display = 'none'; 
     });

    /*Mostrar datos para decifrar */
    pantalladecifrado.addEventListener("click", function() {
       document.getElementById("mensaje-decode").style.display = 'block'; 
       document.getElementById("login").style.display = 'none'; 
     });

    /*Regresa a los botones de inicio desde cifrado */
    regresar.addEventListener("click", function() {
       document.getElementById("mensaje-encode").style.display = 'none'; 
       document.getElementById("mensaje-decode").style.display = 'none'; 
       document.getElementById("login").style.display = 'block'; 
     });

    /*Regresa a los botones de inicio desde cifrado */
    regresar2.addEventListener("click", function() {
       document.getElementById("mensaje-encode").style.display = 'none'; 
       document.getElementById("mensaje-decode").style.display = 'none'; 
       document.getElementById("login").style.display = 'block'; 
     });

    /*rescatando el valor del texto a codificar */
	const btnTextEncode = document.getElementById("btn_encode");
    btnTextEncode.addEventListener("click", function() {
	    let textEncode = document.getElementById("box-msg-encode").value;
	     textEncode = textEncode.toUpperCase();
	    let number_offset = document.getElementById("numero-encode").value;
	    document.getElementById("resultado-cifrado").innerHTML = window.cipher.encode(textEncode, number_offset);
    });

    /*rescatando el valor del texto a decodificar*/
    const btnTextDecode = document.getElementById("btn_decode");
    btnTextDecode.addEventListener("click", function() {
        let textDecode = document.getElementById("box-msg-decode").value;
        textDecode = textDecode.toUpperCase();
        let number_offset = document.getElementById("numero-decode").value;
        document.getElementById("respuesta-decode").innerHTML = window.cipher.decode(textDecode, number_offset);
    });
}