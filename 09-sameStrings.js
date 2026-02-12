let text1 = `JavaScript `
let text2 = `JAVASCRIPT`

// Comparación estricta

console.log(text1 === text2)

// Comparación ignorando mayúsculas/minúsculas

console.log(text1.toLowerCase() === text2.toLowerCase())

// Comparación ignorando espacios al inicio y al final

console.log(text1.trim() === text2.trim())

// Comparación ignorando ambos factores

console.log(text1.trim().toLowerCase() === text2.trim().toLowerCase())
 



