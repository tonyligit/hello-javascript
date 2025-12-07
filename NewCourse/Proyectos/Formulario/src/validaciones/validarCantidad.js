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

export default validarCantidad;
