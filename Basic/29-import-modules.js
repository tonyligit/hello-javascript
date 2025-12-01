/*
Clase 44 - Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=21480
*/

//para importar modulos una opcion es crear un fichero package.json con este contenido
//{
//    "type": "module"
//}

// Importación de módulos

import { add, PI, name, Circle } from "./28-export-modules.js"

import defaultImport from "./28-export-modules.js" //por defecto importa la funcion que esta en el otro fichero como default (substract) y le puedes cambiar de nombre

// Funciones

console.log(add(5, 10))

// Propiedades

console.log(PI)
console.log(name)

// Clases

let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))

// Importación por defecto

console.log(defaultImport(5, 10))

// let myClass = new defaultImport()
// myClass.func()

// Proyecto modular

// import { MyImport } from "./directory/file.js"