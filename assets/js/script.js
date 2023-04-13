let teclado = document.querySelector('.calculadora__teclado');
// let botones = document.querySelectorAll('button');
let pantalla = document.getElementById('pantalla');
pantalla.innerText = '';
teclado.addEventListener('click', (e) => {
	let boton = e.target;
	let tecla = boton.innerText;
	// Si es que boton presionado tiene la clase '.numeros'...
	if (boton.matches('.numeros')) {
		pantalla.innerText += tecla;
	} else if (boton.matches('.operadores')) {
		if (boton.innerText == '=') {
			let resultado = eval(pantalla.innerText);
			pantalla.innerText = resultado;
		} else if (boton.innerText == 'AC') {
			pantalla.innerText = '';
		} else {
			pantalla.innerText += tecla;
		}
	}
});
