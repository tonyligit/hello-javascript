/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let var1 = "text3"
let vConc = "text1 a" + `text2 ${var1} ` + var1
console.log(vConc)

// 2. Muestra la longitud de una cadena de texto
console.log(vConc.length)

// 3. Muestra el primer y último carácter de un string
console.log(vConc.at(0) + vConc.at(-1))

// 4. Convierte a mayúsculas y minúsculas un string

// 5. Crea una cadena de texto en varias líneas

// 6. Interpola el valor de una variable en un string

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(vConc.replace(/ /g, ''))
console.log(vConc.replace(" ", '')) //si usamos este borra solo elprimero

// 8. Comprueba si una cadena de texto contiene una palabra concreta

// 9. Comprueba si dos strings son iguales

// 10. Comprueba si dos strings tienen la misma longitud