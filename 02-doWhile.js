/* 
do {
    code
} while (condition)
*/

{
// 1️⃣ Mostrar los números del 1 al 100

// Inicializamos el contador en 1
let numero = 1

// El bloque se ejecuta al menos una vez
do {

  // Mostramos el número en el navegador
  document.body.innerHTML += numero + "<br><br>"

  // Incrementamos el contador en 1
  numero++

} while (numero <= 100) // Se repite mientras el número sea menor o igual a 100

// 2️⃣ Menú interactivo hasta que la opción sea 3

// Declaramos la variable opcion
let opcion

// El menú se ejecuta al menos una vez
do {

  // Mostramos el menú y capturamos la opción del usuario
  opcion = parseInt(prompt(
    "MENÚ\n" +
    "1. Ver productos\n" +
    "2. Comprar\n" +
    "3. Salir\n\n" +
    "Elige una opción:"
  ))

  // Mostramos en pantalla la opción elegida
  document.body.innerHTML += `Opción elegida: ${opcion} <br><br>`

} while (opcion !== 3) // Se repite mientras la opción NO sea 3

// Mensaje final cuando el usuario sale
document.body.innerHTML += "Has salido del menú ✔️ <br><br>"

// 3️⃣ Pedir un número mayor que 10 hasta que sea válido

// Declaramos la variable numero
let numero1

// Se ejecuta mínimo una vez
do {

  // Pedimos un número al usuario
  numero1 = parseInt(prompt("Ingresa un número mayor que 10:"))

  // Mostramos el número ingresado
  document.body.innerHTML += `Número ingresado: ${numero1} <br>`

} while (numero1 <= 10) 
// Se repite mientras el número sea menor o igual a 10
// o si el usuario no ingresó un número válido

// Mensaje cuando el número es válido
document.body.innerHTML += `<br>Número válido ✔️: ${numero1}`
}


