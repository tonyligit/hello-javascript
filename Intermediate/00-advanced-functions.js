/*
Clases 2 a 11 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=346
*/

// Ciudadanos de primera clase

const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet("Brais")

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

function returnGreeting() {
    return greet
}

processGreeting(greet, "MoureDev")
const greet2 = returnGreeting()
greet2("Brais Moure")

// Arrow functions avanzadas

// - Retorno implícito
const multiply = (a, b) => a * b
console.log(multiply(2, 5))

// - this léxico
const handler = {
    name: "Brais",
    greeting: function () {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting()
handler.arrowGreeting();

// IIFE (Expresión de Función Invocada Inmediatamente) es importante poner ; a la linea anterior si no se indenta

(function () {
    console.log("IIFE clásico")
})();

(() => {
    console.log("IIFE con arrow function")
})();

// Parámetros Rest (...) //numero de parametros indefinidos

function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(10, 15))

// Operador Spread (...) //para desanpaquetar arrays, si tiene más no es un problema, si es menos no funciona

const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con Spread

// Closures (Clausuras)

function createCounter() {
    let counterVar = 0
    return function () {
        counterVar++
        console.log(`Contador: ${counterVar}`)
    }
}
//la funcion dentro de createCounte es un closure, que vamos a asignar a counter, en esta manera recuerda el valor de la variable counterVar
const counter = createCounter()
counter()  //Contador: 1
counter()  //Contador: 2
counter()  //Contador: 3
counter()  //Contador: 4

// Recursividad

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))

// Funciones parciales

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}
//sirve cuando quieres un parametro fijo y los demás los cambias de manera dinamica
const sumWith = partialSum(4)
console.log(sumWith(2, 3))
console.log(sumWith(1, 2))

// Currying

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))

// Callbacks

function processData(data, callback) {
    const result = sum(...data)
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`Mi resultado es: ${result}`)
}

processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
processData([1, 2, 3], (result) => {
    console.log(`Mi resultado en la arrow function es: ${result}`)
})