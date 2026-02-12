// Tipos

// 1. Entero y Decimal

const entero = 42
const decimal = 3.14

console.log(typeof entero, typeof decimal)

// 2. Notacion cientifica

const cientifico = 5e3

console.log(typeof cientifico)

// 3. Infinitos y NaN (Not a Number)

const infinito = Infinity
const noEsUnNumero = NaN

console.log(typeof infinito)
console.log(typeof noEsUnNumero)


// Operaciones aritmeticas

// 1. Suma, Resta, Multiplicacion y Division

const suma = 3 + 4
const resta = 4 - 4
const multiplicacion = 4 * 7
const division = 16 / 2

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)

// 2. Modulo y Exponenciacion

const modulo = 15 % 8
const exponenciacion = 2 ** 3

console.log(modulo)
console.log(exponenciacion)

// Precision

const resultado = 0.1 + 0.2

console.log(resultado)
console.log(resultado.toFixed(1)) // cantidad de decimales
console.log(resultado === 0.3) // === compara tipo y valor de dato

// Operaciones Avanzadas

const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)