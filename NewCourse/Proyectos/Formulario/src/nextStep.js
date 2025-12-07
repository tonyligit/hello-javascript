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

export default siguientePaso;
