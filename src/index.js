/*import cipher from './cipher.js';

console.log(cipher);*/

let bluetoothSwitchStatus = document.getElementById("bluetoothSwitch");
bluetoothSwitch(bluetoothSwitchStatus);
bluetoothSwitchStatus.addEventListener("click", bluetoothSwitch);

let contactsSelectStatus = document.getElementById("contacts");
contactsSelect(contactsSelectStatus);
contactsSelectStatus.addEventListener("change", contactsSelect);

function bluetoothSwitch() {
    if (bluetoothSwitchStatus.checked == true){
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
        let statusElement = document.getElementsByClassName("contactsStatus");
        ableElements(statusElement);
    }else{
        let statusElement = document.getElementsByClassName("contactsStatus");
        disabledElements(statusElement);
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