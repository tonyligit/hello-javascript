/*
	Las funciones son bloques de código que nos permiten repetir acciones sin tener que duplicar código.
	Un ejemplo muy común de donde se utilizan es cuando presionamos un boton, invocamos una funcion y ejecuta el codigo.
*/

// 📌 Forma #1
function saludo1() {
	console.log('Hola! Saludo1');
}

/* 📌 Invocamos la funcion
	Podemos invocar las funciones dentro de nuestro código, o con diferentes eventos.
	Por ejemplo cuando el usuario de click en un boton.
	
	Nota: Los parentesis son lo que invoca la función. Si no usamos parentesis solo tenemos una referencia de la función.
*/
saludo1(); // Invocamos la funcion
const variable = saludo1; // Guardamos la funcion en una variable

// 📌 Forma #2 - Asignando una funcion a una variable.
const saludo2 = function () {
 	console.log('Hola! Saludo2');
 };
saludo2();

// 📌 Forma #3 - Función de tipo flecha
const saludo3 = () => {
	console.log('Hola!');
};
saludo3();
