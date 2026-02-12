// PRIMITIVOS

// 1. String: Es una cadena de texto y puede declararse con comillas simples, dobles o backticks (``)

let saludo = "Hola, mundo"

console.log(saludo)        
console.log(typeof saludo)

let nombre = 'Jonathan'
let mensaje = `Hola, ${nombre}, bienvenido a JavaScript`

console.log(mensaje)

// 2. Number: Incluye tanto números enteros como decimales

let edad = 25

console.log(edad)
console.log(typeof edad)

let precio = 19.99

console.log(precio)

    // 2.1. Infinity: Es un valor numérico especial que representa el infinito y pertenece al tipo Number

    let numeroInfinito = Infinity

    console.log(numeroInfinito)
    console.log(numeroInfinito + 10)

    // También puede surgir de una operación matemática

    let resultado = 10 / 0

    console.log(resultado)

    // 2.2. NaN: Significa “Not a Number”, pero sigue siendo de tipo Number
    
    let valorNoNumerico = NaN

    console.log(valorNoNumerico)
    console.log(typeof valorNoNumerico)

    // Un caso más común donde aparece NaN es al hacer una operación inválida

    let resultado1 = 0 / 0

    console.log(resultado)

    // Una forma correcta de comprobarlo

    let dato = "hola" * 3

    console.log(isNaN(dato))

/* 3. BigInt: Se usa para manejar números enteros extremadamente grandes que superan el límite de Number
⚠️ Ojo: los BigInt no se pueden mezclar directamente con Number en operaciones matemáticas */

let numeroGrande = 123456789012345678901234567890n

console.log(numeroGrande)
console.log(typeof numeroGrande)

// También se puede crear un bigint con la función BigInt()

let otroNumeroGrande = BigInt("900719925474099312345")

console.log(otroNumeroGrande)

// 4. Symbol: Se usa para crear identificadores únicos que no colisionan con otras propiedades

let idUnico = Symbol('id')

console.log(idUnico)
console.log(typeof idUnico)

// Un ejemplo práctico usando Symbol como clave de un objeto

let claveSecreta = Symbol('clave')

let usuario = {
  nombre: 'Jonathan',
  [claveSecreta]: 12345
}

console.log(usuario[claveSecreta])

// 5. Boolean: Solo puede tener dos valores, true o false

let estaActivo = true

console.log(estaActivo)
console.log(typeof estaActivo)

// Otro ejemplo usando una condición

let esMayorDeEdad = 18 >= 18

console.log(esMayorDeEdad)

// 6. Null: Representa la ausencia intencional de un valor, aunque typeof null devuelva object por un error histórico de JavaScript

let respuesta = null

console.log(respuesta)
console.log(typeof respuesta)

console.log(typeof null) // object

// 7. Undefined: Indica que una variable fue declarada pero aún no tiene un valor asignado

// Lo da JavaScript

let valor

console.log(valor)
console.log(typeof valor)

// También se puede asignar explícitamente

let otroValor = undefined

console.log(otroValor)


// COMPLEJOS

// 1. Object: Los objetos se usan para agrupar datos y funcionalidades, y los arreglos también son de tipo object

let persona = {
  nombre: 'Jonathan',
  edad: 38,
  activo: true
}

console.log(persona)
console.log(typeof persona)

let numeros = [1, 2, 3, 4]

console.log(numeros)
console.log(typeof numeros)

/* 2. Array: Es una estructura que permite almacenar múltiples valores en una sola variable
👉 Dato extra: aunque es un array, typeof devuelve "object" */

let colores = ['rojo', 'verde', 'azul']

console.log(colores)
console.log(typeof colores)

// Un ejemplo accediendo a un elemento del array

let primerColor = colores[0]

console.log(primerColor)

// 3. Function: Es un bloque de código reutilizable que se ejecuta cuando es llamado

function saludar(nombre) {
  return `Hola, ${nombre}`
}

console.log(saludar('Jonathan'))

// Otro ejemplo con números

function sumar(a, b) {
  return a + b
}

console.log(sumar(3, 5))

