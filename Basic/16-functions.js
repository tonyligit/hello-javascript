/*
Clase 31 - Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=12829
*/

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


// Con parámetros
function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`)
}

myFuncWithParams("Tony")

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

// Por defecto
function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(undefined, 5)

// Funciones anónimas
const myFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}

myFunc2("Brais Moure")

// Arrow functions
const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc3("Brais Moure")
myFunc4("Brais Moure")

// Retorno de valores
function mult(a, b) {
    console.log("result")
    defaultSum(5, 10)
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas
function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// Funciones de orden superior (funciones que reciben otra funcion como argomento)
function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "función de orden superior")

// forEach
console.log("------------forEach section----------------")
const myArray = [1, 2, 3, 4]

const mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

const myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))