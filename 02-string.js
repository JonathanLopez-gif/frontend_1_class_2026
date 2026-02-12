let string1 = 'Hola, mundo'
let string2 = "JavaScript es genial"
let string3 = `${string1} feliz :)`
let string4 = string1 + ' ' + string2

console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)

let frase = 'JavaScript es Extremadamente Genial'

// 🔥 Métodos de String

// ⭐ Uso diario / imprescindibles

frase.length // Cantidad de caracteres
frase.toLowerCase() // Convierte a minúsculas
frase.toUpperCase() // Convierte a mayúsculas
frase.trim() // Elimina espacios al inicio y final
frase.split(separador) // Divide el string en un arreglo
frase.includes(texto) // Verifica si contiene un texto
frase.replace(viejo, nuevo) // Reemplaza texto
frase.replaceAll(viejo, nuevo) // Reemplaza todas las coincidencias
frase.slice(inicio, fin) // Extrae una parte del texto

// 👍 Muy usados

frase.indexOf(texto) // Posición de la primera coincidencia
frase.lastIndexOf(texto) // Posición de la última coincidencia
frase.startsWith(texto) // Verifica cómo inicia
frase.endsWith(texto) // Verifica cómo termina
frase.substring(inicio, fin) // Extrae texto
frase.repeat(n) // Repite el texto n veces
frase.concat(texto) // Une strings
frase.padStart(longitud, relleno) // Rellena al inicio
frase.padEnd(longitud, relleno) // Rellena al final

// 🧩 Uso ocasional

frase.charAt(posición) // Obtiene un carácter
frase.at(posición) // Obtiene carácter (admite negativos)
frase.search(expresión) // Busca con regex (Regular Expression)
frase.match(expresión) // Coincidencias con regex

// 🧪 Poco usados / casos específicos

frase.trimStart() // Elimina espacios iniciales
frase.trimEnd() // Elimina espacios finales
frase.charCodeAt(posición) // Código Unicode del carácter
frase.localeCompare(texto) // Comparación por idioma
frase.normalize() // Normaliza Unicode
frase.toString() // Convierte a string
frase.valueOf() // Valor primitivo
frase.matchAll(expresión) // Todas las coincidencias
