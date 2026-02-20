/* 
for (variable; condition; increment) {
    code
} 
*/

{
// 1️⃣ Mostrar los números del 0 al 20

for (let numero = 0; numero <= 20; numero++) {

  // Mostramos cada número en el navegador
  document.body.innerHTML += numero + "<br><br>"
}

// 2️⃣ Mostrar la tabla del 7

// Recorremos del 1 al 10 para multiplicar por 7
for (let i = 1; i <= 10; i++) {

  // Calculamos el resultado de la multiplicación
  let resultado = 7 * i

  // Mostramos la operación y el resultado
  document.body.innerHTML += `7 x ${i} = ${resultado} <br><br>`
}

// 3️⃣ Contar cuántos números impares hay del 1 al 50

// Inicializamos el contador de impares en 0
let contador = 0

// Recorremos del 1 al 50
for (let numero = 1; numero <= 50; numero++) {

  // Verificamos si el número es impar
  if (numero % 2 !== 0) {

    // Si es impar, aumentamos el contador
    contador++
  }
}

// Mostramos el total de números impares
document.body.innerHTML += `Cantidad de números impares: ${contador}`
}