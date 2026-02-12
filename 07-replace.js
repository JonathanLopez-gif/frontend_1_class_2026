// Forma recomendada (con regex global)

let text1 = `Hello world from JavaScript!`

let result1 = text1.replace(/ /g, `-`)

/* NOTA: 
/ / → busca espacios
g → reemplaza todos (global) */

console.log(result1)

// Mejor opción (reemplaza cualquier espacio en blanco)

let text2 = `Hello   world   from JavaScript!`

let result2 = text2.replace(/\s+/g, `-`)

/* NOTA:
\s → cualquier espacio en blanco
+ → uno o más seguidos */

console.log(result2)

