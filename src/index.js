import cipher from './cipher.js';


cifrar.onclick = function() {
    let nombre = document.getElementById('name').value;
    let edad = parseInt(document.getElementById('shift').value);
    let resultado = cipher.code(nombre, edad);
    let opinion = document.getElementById('opiniones').value;
    document.getElementById('opinion').textContent = (opinion);
    document.getElementById('nick').textContent = (resultado + ' ' + edad) ;
    document.getElementById('nickname').classList.add('hide');
    document.getElementById('index').classList.remove('hide');
}

descifrar.onclick = function() {
    let nombre = document.getElementById('codeName').value;
    let edad = parseInt(document.getElementById('shift3').value);
    let resultado = cipher.decode(nombre, edad);
    document.getElementById('realName').textContent = (resultado) ;
}
//Funciones para ocultar y mostrar elementos en el DOM
writeOpinion.onclick = function() {
    document.getElementById('index').classList.add('hide');
    document.getElementById('select').classList.remove('hide');
}
crearNickname.onclick = function() {
    document.getElementById('select').classList.add('hide');
    document.getElementById('nickname').classList.remove('hide');
}
revelarNickname.onclick = function() {
    document.getElementById('select').classList.add('hide');
    document.getElementById('revelar').classList.remove('hide');
}

console.log(cipher);

//listener en el boton y llamamos a obtenerDatos
