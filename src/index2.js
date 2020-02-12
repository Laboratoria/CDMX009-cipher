function FormularioCifrar(){
	location.href= "uno.html";
}

function FormularioDecifrar(){
	location.href= "dos.html";
}

function EnviarCodificado(){
        let textEncode = document.getElementById("text-encode").value;
        textEncode = textEncode.toUpperCase();
        let number_offset = document.getElementById("number_encode").value;
        document.getElementById("result-encode").innerHTML = window.cipher.encode(textEncode, number_offset);
    }

function EnviarDecodificado(){
        let textDecode = document.getElementById("text-decode").value;
        textDecode = textDecode.toUpperCase();
        let number_offset = document.getElementById("number-decode").value;
        document.getElementById("result-decode").innerHTML = window.cipher.decode(textDecode, number_offset);
    }