let secretkey1 = document.getElementById("secretkey1");
let textarea2 = document.getElementById("textarea2");
let textarea = document.getElementById("textarea");


function cifrado(){
	const textoIngresado = textarea2.value;
	textarea.value = textoIngresado.split('').map(c=>{
		let mayus = (c === c.toUpperCase()) ? true : false;
		let valorEntero = c.toLowerCase().charCodeAt(0);
		if(valorEntero >= 97 && valorEntero <= 122)
			{
				const valorDesplazamiento = parseInt(secretkey1.value);

				if(valorEntero + valorDesplazamiento > 122)
					valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento - 1;
				else
					valorEntero = valorEntero + valorDesplazamiento;
			}

			let textarea = String.fromCharCode(valorEntero);
			return mayus ? textarea.toUpperCase() : textarea;
		}).join('');
}

textarea2.addEventListener("keyup",textarea);
secretkey1.addEventListener("change", textarea);
