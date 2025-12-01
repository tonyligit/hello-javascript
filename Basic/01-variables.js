/*
Clase 16 - Variables
Vídeo: https://youtu.be/1glVfFxj8a4?t=3049
*/

//Nombre de los ficheros: kebapcase hola-hola.js / hola_hola.js
//Nombre de los variables: lowerCamelcase holaHola

/*
por defecto las variables, cuando están creadas, 
tienen valor de undefined si no se le asigna un valor
*/

// var 
/*(el tipo var no está aconsejado, tiene problemas, las variables declaradas 
con var son sujetas al hoisting (elevación). 
Esto significa que las declaraciones de variables se "elevan" al inicio 
de su contexto de ejecución, lo que permite que la variable sea accesible 
antes de su declaración
*/
var helloWorld = "¡Hola, JavaScript!"
console.log(helloWorld)

helloWorld = "¡Hola de nuevo, JavaScript!"
console.log(helloWorld)

// let
/*
estás variables tiene su ambito de ejecución, donde está definida, 
en cambio la variables var, que su entorno es todo el script.
Como no tienen hoisting no se pueden acceder antes de ser definidas.
*/
let helloWorld2 = "¡Hola, JavaScript 2!"
console.log(helloWorld2)

helloWorld2 = "¡Hola de nuevo, JavaScript 2!"
console.log(helloWorld2)

// const

const helloWorld3 = "¡Hola, JavaScript 3!"
console.log(helloWorld3)

// Error. porqué no se pueden reasignar un valor a las variables 
// helloWorld3 = "¡Hola de nuevo, JavaScript 2!"
// console.log(helloWorld3)