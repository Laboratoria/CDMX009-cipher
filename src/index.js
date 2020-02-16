window.onload = () => {

    /*activado y desactivado de los enlaces de cada pestaña*/

    const linkActive = document.getElementById("link-encode");
    const linkDesactive = document.getElementById("link-decode");




   linkActive.addEventListener("click", function() {

  //      document.getElementById("link-encode").classList.add("link_active");
  //      document.getElementById("link-decode").classList.remove("link_active");
  //      document.getElementById("content-msg-encode").classList.remove("display_none");
  //      document.getElementById("content-msg-encode").classList.add("display_block");
  //    document.getElementById("content-msg-decode").classList.remove("display_block");
  //    document.getElementById("content-msg-decode").classList.add("display_none");
    });

    linkDesactive.addEventListener("click", function() {
  //      document.getElementById("link-encode").classList.remove("link_desactive");
  //    document.getElementById("link-decode").classList.add("link_desactive");
  //    document.getElementById("content-msg-decode").classList.remove("display_none");
  //    document.getElementById("content-msg-decode").classList.add("display_block");
  //    document.getElementById("content-msg-encode").classList.remove("display_block");
  //    document.getElementById("content-msg-encode").classList.add("display_none");
    });

    const btnTextEncode = document.getElementById('btn_encode');
    btnTextEncode.addEventListener("click", function() {
        //enlaza a caja de texto html y css
        let textEncode = document.getElementById("box-msg-encode").value;
        //Enlaza offset a html y css
        let number_offset = document.getElementById("offset_ci").value;
        document.getElementById("msg-encode-check").innerHTML = window.cipher.encode(textEncode, number_offset);
    });


    const btnTextDecode = document.getElementById("btn_decode");
    btnTextDecode.addEventListener("click", function() {
        //enlaza a caja de texto html y css
        let textDecode = document.getElementById("box-msg-decode").value;
        //Enlaza offset a html y css
        let number_offset = document.getElementById("offset_des").value;
        document.getElementById("msg-decode-check").innerHTML = window.cipher.decode(textDecode, number_offset);
    });
}
