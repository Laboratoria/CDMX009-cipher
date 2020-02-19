
import cipher from './cipher.js';

/*let inputText= "AaZz09Ññ";
let offset = -1; 
console.log(cipher.encode(offset,inputText));
console.log(cipher.decode(offset,inputText));

console.log(cipher);*/

let bluetoothSwitchStatus = document.getElementById("bluetoothSwitch");
bluetoothSwitch(bluetoothSwitchStatus);
bluetoothSwitchStatus.addEventListener("click", bluetoothSwitch);

let contactsSelectStatus = document.getElementById("contacts");
contactsSelect(contactsSelectStatus);
contactsSelectStatus.addEventListener("change", contactsSelect);

let encodeStatus = document.getElementById("encodeButton");
encodeStatus.addEventListener("change", cipherSelectedStatus);
let decodeStatus = document.getElementById("decodeButton");
decodeStatus.addEventListener("change", cipherSelectedStatus);

let offsetStatus = document.getElementById("offset");
offsetStatus.addEventListener("input", offsetValidate);

let inputTextStatus = document.getElementById("inputTextarea");
inputTextStatus.addEventListener("input", encodeDecode);

let cleanButtonStatus = document.getElementById("cleanButton");
cleanButtonStatus.addEventListener("click", cleanElements);

let questionStatus = document.getElementById("question");
questionStatus.addEventListener("mouseover", questionMsg);

let infoStatus = document.getElementById("info");
infoStatus.addEventListener("mouseover", infoMsg);


/*
function inputTextValidate(){
   
    if(/[^ a-zA-ZÁÉÍÓÚü]+/.test(inputTextStatus.value)){
        console.log("¡Escribe bien!");
        let sendButtonStatus = document.getElementById("sendButton");
        sendButtonStatus.disabled = true;
        document.getElementById("inputWarning").innerHTML = "No se pueden cifrar números ni caracteres especiales.";       
    }else{
        console.log("pues, valida?");
        document.getElementById("inputWarning").innerHTML = "";
        encodeDecode(); 
    }
    encodeDecode(); 
}*/

function bluetoothSwitch() {
    
    if (bluetoothSwitchStatus.checked === true){
        console.log("ON");
        document.getElementById("contacts").disabled = false;
        
    }else{
        console.log("OFF");
        let statusElement = document.getElementsByClassName("btStatus");
        cleanElements();
        disabledElements(statusElement);
        let contactsSelectStatus = document.getElementById("contacts");
        contactsSelectStatus.value = "contactsTitle";
    }
    console.log(bluetoothSwitchStatus.checked);
}

function contactsSelect() {
    if(contactsSelectStatus.value != "contactsTitle"){
        console.log("select entra");
        let statusElement = document.getElementsByClassName("contactInit");
        cleanElements();
        ableElements(statusElement);
        console.log("regresa");
    }else{
        let statusElement = document.getElementsByClassName("contactsStatus");
        disabledElements(statusElement);
    }
}

function offsetValidate() {
    console.log(offsetStatus.value);
    //let sendButtonStatus = document.getElementById("sendButton");
    //sendButtonStatus.disabled = true;
    console.log("paso disabled");
    if(isNaN(offsetStatus.value)){
        //sendButtonStatus.disabled = true;
        document.getElementById("offset").style.borderColor = "red";
        document.getElementById("warning").style.color = "red";
        document.getElementById("warning").innerHTML = "El offset debe ser un número.";    
    }else{
        //sendButtonStatus.disabled = true;
        document.getElementById("offset").style.borderColor = "";
        document.getElementById("warning").innerHTML = "";
        encodeDecode();
    }
    
}

function cipherSelectedStatus() {
    console.log("entra a la función");
    cleanElements();
    if(encodeStatus.checked){
        console.log("Es code");
    }else if(decodeStatus.checked){
        console.log("Es decode");
    }else{
        console.log("no es ninguna");
    }
    offsetValidate();
    //encodeDecode();
}

function encodeDecode(){
    
    let encodeStatus = document.getElementById("encodeButton");
    let decodeStatus = document.getElementById("decodeButton");
    let offsetStatus = document.getElementById("offset");
    let offset = parseInt(offsetStatus.value);
    let statusElement = document.getElementsByClassName("codeCheck");
    let inputTextStatus = document.getElementById("inputTextarea");
    let outputTextStatus = document.getElementById("outputTextarea");
    let inputText;
    let sendButtonStatus = document.getElementById("sendButton");
    sendButtonStatus.disabled = true;
    if (encodeStatus.checked && offsetStatus.value != ""){
        ableElements(statusElement);
        sendButtonStatus.disabled = true;
        inputText = inputTextStatus.value;
        outputTextStatus.value = cipher.encode(offset,inputText);
        console.log(offset);
        console.log(cipher.encode(offset,inputText));
        if(inputText != ""){
            sendButtonStatus.disabled = false;
            sendButtonStatus.addEventListener("click", cleanElements);
            //sendButtonStatus.disabled = true;
        }else{
            console.log("esperando");
        }
    }else if(decodeStatus.checked && offsetStatus.value != "") {
        ableElements(statusElement);
        let sendButtonStatus = document.getElementById("sendButton");
        sendButtonStatus.disabled = true;
        //sendButtonStatus.disabled = true;
        //let testText = "FTUF FT VO UFYUP EF QSVFCB";
        //inputTextStatus.value = testText;
        inputText = inputTextStatus.value;
        outputTextStatus.value = cipher.decode(offset,inputText);
        console.log(cipher.decode(offset,inputText));
    }else{
        console.log("sale");
    }

}

function disabledElements(statusElement) {
    for(let i=0; i<statusElement.length; i++){
        statusElement[i].disabled = true;
    }
}

function ableElements(statusElement) {
    for(let i=0; i<statusElement.length; i++){
        statusElement[i].disabled = false;
    }
}

function cleanElements() { 
    console.log("entra al clean");
    let cleanElement = document.getElementsByClassName("btStatus");
    console.log("longitud es de: " + cleanElement.length);
    
    for (let i=0; i < cleanElement.length; i++){
        console.log("entra al for del clean");
        console.log("es el elemento: " + cleanElement[i].type);
        if(cleanElement[i].tagName == "INPUT"){
            if(cleanElement[i].type == "text"){
                console.log("si es text")
                cleanElement[i].value = ""; 
            }else{
                //cleanElement[i].checked = false;
                console.log("es el else")
            }
        //}else if(cleanElement[i].tagName == "SELECT"){
           // cleanElement[i].value = "contactsTitle";
        }else if(cleanElement[i].tagName == "TEXTAREA"){
            cleanElement[i].value = "";
        }else if(cleanElement[i].tagName == "BUTTON"){
            console.log("parece que fue button");
            cleanElement[i].disabled = true;
        }else{
            console.log("parece que fue select");
        }
    }

}


function questionMsg(){
    document.getElementById("warning").innerHTML = "Elije a quien quieres mandar un mensaje."; 
    document.getElementById("warning").style.color = "rgba(3,0,39,1)";
    setTimeout(function(){ document.getElementById("warning").innerHTML = "" ; }, 3000);
}

function infoMsg(){
    document.getElementById("warning").innerHTML = "Manda y recibe mensajes encriptados."; 
    document.getElementById("warning").style.color = "rgba(3,0,39,1)";
    setTimeout(function(){ document.getElementById("warning").innerHTML = "" ; }, 3000);
}