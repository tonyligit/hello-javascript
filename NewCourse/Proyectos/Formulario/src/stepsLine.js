import validarCantidad from './validaciones/validarCantidad';
import validarNombre from './validaciones/validarNombre';
import validarCorreo from './validaciones/validarCorreo';
import {formulario} from './formulario';

const linea = document.getElementById('linea-pasos');

linea.addEventListener('click', (e) => {
	// Chequeamos si el click esta en el step o fuera, si es fuera devuelve false
	if (!e.target.closest('.linea-pasos__paso')) {
		console.log('fuera el circulo del step')
		return false;
		// e es el objeto del evento (por ejemplo, un click).
        // e.target es el elemento exacto que fue clickeado.
		//.closest(selector) Es un método que sube por los ancestros del elemento hasta encontrar uno que coincida con el selector sino devuelve null.
	}
	
	// Obtenemos el paso al que queremos navegar y el actual
	const pasoANavegar = e.target.closest('.linea-pasos__paso');
	const currentStepId = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso')
		.dataset.paso;

	// Validamos si el step actual esta correctamente rellenado, sino devuelve false
	if (currentStepId === 'cantidad') {
		if (!validarCantidad(formulario)) {
			return false;
		}
	} else if (currentStepId === 'datos') {
		if (!validarNombre(formulario) || !validarCorreo(formulario)) return false;
	}

	// Solo queremos poder dar click a los que tienen CHECK.
	if (pasoANavegar.querySelector('.linea-pasos__paso-check--checked')) {
		// quitamos el icono de activo al step actual
		const pasoActual = linea.querySelector('.linea-pasos__paso-check--active');
		if (pasoActual) {
			pasoActual.classList.remove('linea-pasos__paso-check--active');
		}

		// Obtenemos el id del paso a navegar.
		const id = pasoANavegar.dataset.paso;

		//Nos aseguramos que el boton sea SIGUIENTE,con el icono correcto y que este activo
		const btnFormulario = document.querySelector('.formulario__btn');
		btnFormulario.querySelector('span').innerText = 'Siguiente';
		// Nos aseguramos de ocultar el icono de banco.
		btnFormulario
			.querySelector('[data-icono="banco"]')
			.classList.remove('formulario__btn-contenedor-icono--active');
		// Nos aseguramos de mostrar el icono del siguiente.
		btnFormulario
			.querySelector('[data-icono="siguiente"]')
			.classList.add('formulario__btn-contenedor-icono--active');
		// Nos aseguramos de que no tenga la clase de disabled.
		btnFormulario.classList.remove('formulario__btn--disabled');

		// Mostramos el body del step
		document.querySelector(`.formulario__body [data-paso="${id}"]`).scrollIntoView({
			inline: 'start',
			behavior: 'smooth',
		});

		// Agregamos la clase de active al nuevo paso.
		linea.querySelector(`[data-paso="${id}"] span`).classList.add('linea-pasos__paso-check--active');
	}
});
