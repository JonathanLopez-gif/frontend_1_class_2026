/* 
while (condition) {
    code
}  
*/

{
// 1️⃣ Números del 10 al 1

// Declaramos la variable inicial en 10
let numero = 10

// Mientras el número sea mayor o igual a 1
while (numero >= 1) {

  // Mostramos el número en el navegador agregándolo al body
  document.body.innerHTML += numero + "<br><br>"

  // Restamos 1 al número en cada iteración
  numero--
}

// 2️⃣ Números pares del 2 al 20

// Inicializamos la variable en 2 (primer número par)
let number = 2

// Mientras el número sea menor o igual a 20
while (number <= 20) {

  // Mostramos el número en pantalla
  document.body.innerHTML += number + "<br><br>"

  // Aumentamos de 2 en 2 para mantener solo números pares
  number += 2
}

// 3️⃣ Suma secuencial del 1 al 100

// Inicializamos el contador en 1
let num = 1

// Inicializamos la variable acumuladora en 0
let suma = 0

// Mientras el número sea menor o igual a 100
while (num <= 100) {

  // Sumamos el valor actual al acumulador
  suma += num

  // Incrementamos el número en 1
  num++
}

// Mostramos el resultado final en el navegador
document.body.innerHTML += `La suma es: ${suma}`
}


