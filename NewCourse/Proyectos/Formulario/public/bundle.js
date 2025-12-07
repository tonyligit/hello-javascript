'use strict';

const validarCantidad = (formulario) => {
	// Aceptamos cualquier digito (0-9), y un punto con decimales (opcional)
	const expRegCantidad = /^\d+(\.\d+)?$/;

	// Obtenemos el input cantidad
	const inputCantidad = formulario['cantidad-receptor'];

	// Transformamos la cantidad de una cadena de texto a numero con decimales.
	// y comprobamos si es una cantidad correcta
	if (expRegCantidad.test(inputCantidad.value)) {
		inputCantidad.classList.remove('formulario__input--error');
		return true;
	} else {
		inputCantidad.classList.add('formulario__input--error');
		return false;
	}
};

const validarNombre = (formulario) => {
	// Aceptamos cualquier digito (0-9), y un punto con decimales (opcional)
	const expRegNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

	// Obtenemos el input
	const inputNombre = formulario['nombre-receptor'];

	// Comprobamos que el nombre sea correcto.
	if (!expRegNombre.test(inputNombre.value)) {
		inputNombre.classList.add('formulario__input--error');
		return false;
	} else {
		inputNombre.classList.remove('formulario__input--error');
		return true;
	}
};

const validarCorreo = (formulario) => {
	// Expresion regular para validar un correo.
	const expRegCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

	// Obtenemos los inputs
	const inputCorreo = formulario['correo-receptor'];

	// Comprobamos que el nombre y correo sean correctos.
	if (!expRegCorreo.test(inputCorreo.value)) {
		inputCorreo.classList.add('formulario__input--error');
		return false;
	} else {
		inputCorreo.classList.remove('formulario__input--error');
		return true;
	}
};

const markStepAsChecked = (paso) => {
	document
		.querySelector(`.linea-pasos [data-paso="${paso}"] .linea-pasos__paso-check`)
		.classList.add('linea-pasos__paso-check--checked');
};

/**
 * Funcion que navega al next step.
 */
const siguientePaso = () => {
	// Creamos un array con los pasos.
	const steps = [...document.querySelectorAll('.linea-pasos__paso')];

	// Obtenemos el paso activo y su index
	const currentStep = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso');
	const currentStepIndex = steps.indexOf(currentStep);

	// chequeamos que no estamos en el ultimo step
	if (currentStepIndex < steps.length - 1) {
		// Eliminamos la clase de paso activo y la ponemos al siguiente step
		currentStep.querySelector('span').classList.remove('linea-pasos__paso-check--active');
		steps[currentStepIndex + 1].querySelector('span').classList.add('linea-pasos__paso-check--active');

		// Calculamos Id name del siguiente step
		const id = steps[currentStepIndex + 1].dataset.paso;

		//pone la parte del formulario del body into view, porque es como una linea unica (mira css), 
		// donde se ve solo el formulario seleccionado
		document.querySelector(`.formulario__body [data-paso="${id}"]`).scrollIntoView({
			inline: 'start',
			behavior: 'smooth',
		});
	}
};

const formulario = document.getElementById('formulario');

// Reiniciando scroll al cargar el formulario (Mueve el scroll horizontal completamente hacia la izquierda)
formulario.querySelector('.formulario__body').scrollLeft = 0;

// Eventlistener para comprobar los campos de formulario cuando el usuario corrige.
formulario.addEventListener('keyup', (e) => {
	if (e.target.tagName === 'INPUT') {
		if (e.target.id === 'cantidad-receptor') {
			validarCantidad(formulario);
		} else if (e.target.id === 'nombre-receptor') {
			validarNombre(formulario);
		} else if (e.target.id === 'correo-receptor') {
			validarCorreo(formulario);
		}
	}
});

const btnFormulario = document.getElementById('formulario__btn');
btnFormulario.addEventListener('click', (e) => {
	e.preventDefault();

	//chequeo cual es el step actual
	const selectedStep = document.querySelector('.linea-pasos__paso-check--active').closest('.linea-pasos__paso')
		.dataset.paso;

	if (selectedStep === 'cantidad') {
		if (validarCantidad(formulario)) {
			markStepAsChecked('cantidad');
			siguientePaso();
		}
	} else if (selectedStep === 'datos') {
		if (validarNombre(formulario) && validarCorreo(formulario)) {
			markStepAsChecked('datos');
			siguientePaso();
		}
	} else if (selectedStep === 'metodo') {
		markStepAsChecked('metodo');

		// creo formato moneda
		const opciones = { style: 'currency', currency: 'MXN' };
		const formatoMoneda = new Intl.NumberFormat('es-MX', opciones);

		// Obtenemos los valores del formulario y los pasamos a la seccion de confirmar.
		document.querySelector('[data-valor="cantidad"] span').innerText = formatoMoneda.format(
			formulario['cantidad-receptor'].value
		);
		document.querySelector('[data-valor="nombre-receptor"] span').innerText = formulario['nombre-receptor'].value;
		document.querySelector('[data-valor="correo-receptor"] span').innerText = formulario['correo-receptor'].value;
		document.querySelector('[data-valor="metodo"] span').innerText = formulario.metodo.value;

		// Cambiamos el texto del btn a 'Transferir' y lo deshabilito
		btnFormulario.querySelector('span').innerText = 'Transferir';
		btnFormulario.classList.add('formulario__btn--disabled');

		// Ocultamos el icono de siguiente y le ponemos el icono del banco.
		btnFormulario
			.querySelector('[data-icono="siguiente"]')
			.classList.remove('formulario__btn-contenedor-icono--active');

		btnFormulario.querySelector('[data-icono="banco"]').classList.add('formulario__btn-contenedor-icono--active');

		siguientePaso();

		// Eliminamos la clase de disabled despues de 4 segundos.
		setTimeout(() => {
			btnFormulario.classList.remove('formulario__btn--disabled');
		}, 4000);

	} else if (selectedStep === 'confirmacion' && !btnFormulario.matches('.formulario__btn--disabled')) {
		// Aqui se haria una peticion al servidor, una redireccion, etc.

		// Cambiamos el texto del btn a 'Transferir'
		btnFormulario.querySelector('span').innerText = 'Transfiriendo';
		// Agregamos la clase que deshabilita el boton.
		btnFormulario.classList.add('formulario__btn--disabled');

		setTimeout(() => {
			formulario.classList.add('formulario--hidden');
			document.getElementById('alerta').classList.add('alerta--active');
		}, 4000);
	} else {
		siguientePaso();
	}
});

const linea = document.getElementById('linea-pasos');

linea.addEventListener('click', (e) => {
	// Chequeamos si el click esta en el step o fuera, si es fuera devuelve false
	if (!e.target.closest('.linea-pasos__paso')) {
		console.log('fuera el circulo del step');
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
//# sourceMappingURL=bundle.js.map
