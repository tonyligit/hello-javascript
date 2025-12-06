/*
	📌 Eliminar eventos de un elemento
*/

const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const primeraCaja = document.querySelector('.caja');

const toggleClase = () => {
	primeraCaja.classList.toggle('activa');
};

// Click boton 1
boton1.addEventListener('click', () => {
	// Agregamos el evento
	console.log("Agrego")
	primeraCaja.addEventListener('click', toggleClase);
});

// Click boton 2
boton2.addEventListener('click', () => {
	// Eliminamos el evento
	console.log("Elimino")
	primeraCaja.removeEventListener('click', toggleClase);
});
