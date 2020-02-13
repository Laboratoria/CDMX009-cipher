
import cipher from './cipher.js';
/*
let inputText= "Este es un texto de prueba";
let offset = 1; 
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
//encodeStatus.addEventListener("change", cipherSelectedStatus);
encodeStatus.addEventListener("change", cipherSelectedStatus);
let decodeStatus = document.getElementById("decodeButton");
//decodeStatus.addEventListener("change", cipherSelectedStatus);
decodeStatus.addEventListener("change", cipherSelectedStatus);

let offsetStatus = document.getElementById("offset");
offsetStatus.addEventListener("input", offsetValidate);

let inputTextStatus = document.getElementById("inputTextarea");
inputTextStatus.addEventListener("input", inputTextValidate);

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

}

function bluetoothSwitch() {
    if (bluetoothSwitchStatus.checked === true){
        console.log("ON");
        document.getElementById("contacts").disabled = false;
    }else{
        console.log("OFF");
        let statusElement = document.getElementsByClassName("btStatus");
        disabledElements(statusElement);
    }
    console.log(bluetoothSwitchStatus.checked);
}

function contactsSelect() {
    if(contactsSelectStatus.value != "contactsTitle"){
        console.log("select entra");
        let statusElement = document.getElementsByClassName("contactInit");
        ableElements(statusElement);
        console.log("regresa");
    }else{
        let statusElement = document.getElementsByClassName("contactsStatus");
        disabledElements(statusElement);
    }
}

function offsetValidate() {
    console.log(offsetStatus.value);
    if(isNaN(offsetStatus.value)){
        let sendButtonStatus = document.getElementById("sendButton");
        sendButtonStatus.disabled = true;
        document.getElementById("offsetWarning").innerHTML = "El offset debe ser un número.";    
    }else{
        document.getElementById("offsetWarning").innerHTML = "";
    }
    encodeDecode();
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
    encodeDecode();
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
    if (encodeStatus.checked && offsetStatus.value != ""){
        ableElements(statusElement);
        inputText = inputTextStatus.value;
        outputTextStatus.value = cipher.encode(offset,inputText);
        console.log(offset);
        console.log(cipher.encode(offset,inputText));
    }else if(decodeStatus.checked && offsetStatus.value != "") {
        ableElements(statusElement);
        let sendButtonStatus = document.getElementById("sendButton");
        sendButtonStatus.disabled = true;
        //let testText = "FTUF FT VO UFYUP EF QSVFCB";
        //inputTextStatus.value = testText;
        inputText = inputTextStatus.value;
        outputTextStatus.value = cipher.decode(offset,inputText);
        console.log(cipher.decode(offset,inputText));
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

//PENDIENTE
function cleanElements() { 
    console.log("entra al clean");
    let cleanElement = document.getElementsByClassName("BtStatus");
    console.log("longitud es de: " + cleanElement.length);
    for(let i; i<cleanElement.length; i++){
        console.log("es el elemento: " + cleanElement[i]);
        if(cleanElement[i].tagName == "input"){
            if(cleanElement[i].type == "text"){
                
                cleanElement[i].value = ""; 
            }else{
                cleanElement[i].checked = false;
            }
        }else if(cleanElement[i].tagName == "select"){
            cleanElement[i].value = "contactsTitle";
        }else if(cleanElement[i].tagName == "textarea"){
            cleanElement[i].value = "";
        }else{
            break;
        }
    }
    
    /*
    for(let i=0; i<statusElement.length; i++){
        statusElement[i].disabled = false;
    }*/
}