// Función para imprimir en pantalla
const print = text => {
    document.body.innerHTML += text + "<br>"
}

// 1. Promedio de notas

const calculateAverage = grades => {

    let sum = 0

    for(let i = 0; i < grades.length; i++){
        sum += grades[i]
    }

    let average = sum / grades.length

    if(average >= 3.0){
        print(`Average: ${average} - Passed 👍`)
    }else{
        print(`Average: ${average} - Failed 👎`)
    }

    return average
}

calculateAverage([3,4,5,2])

// 2. Saludo

const greet = name => {
    print(`Hello ${name}, Welcome! 🤗`)
}

greet("Jonathan")

// 3. Suma

const addNumbers = (num1, num2) => num1 + num2

print(`Add: ${addNumbers(5,3)}`)

// 4. Resta

const subtractNumbers = (num1, num2) => num1 - num2

print(`Subtract: ${subtractNumbers(10,4)}`)

// 5. Mayor de dos números

const getGreaterNumber = (num1, num2) => {

    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}

print(`Greater number: ${getGreaterNumber(8, 12)}`)

// 6. Contar vocales

const countVowels = word => {

    let vowels = "aeiouAEIOU"
    let counter = 0

    for(let i = 0; i < word.length; i++){

        if(vowels.includes(word[i])){
            counter++
        }

    }

    return counter
}

print(`Vowels: ${countVowels(JavaScript)}`)

// 7. Buscar valor en array

const valueExists = (array, value) => {

    if(array.includes(value)){
        print("Value exists")
    }else{
        print("Value doesn't exist")
    }

}

valueExists([1,2,3,4], 3)

// 8. Tabla de multiplicar

const multiplicationTable = number => {

    for(let i = 1; i <= 10; i++){
        print(`${number} x ${i} = ${number * i}`)
    }

}

multiplicationTable(5)

// 9. Factorial con while

const factorial = number => {

    let result = 1
    let i = 1

    while(i <= number){
        result *= i
        i++
    }

    return result
}

print(`Factorial: ${factorial(5)}`)

// 10. Par o impar

const evenOrOdd = number => {

    if(number % 2 === 0){
        print("Even")
    }else{
        print("Odd")
    }

}

evenOrOdd(7)

// 11. Sistema de estudiantes con menú

let students = [] // array donde se guardarán los nombres de los estudiantes

const addStudent = name => { // función que recibe un nombre
    students.push(name) // agrega el nombre recibido al array students
}

const showStudents = () => { // función para mostrar todos los estudiantes

    print("<b>Student list:</b>") // imprime un título en pantalla

    for(let i = 0; i < students.length; i++){ // recorre el array desde 0 hasta el último estudiante
        print(students[i]) // imprime cada estudiante del array
    }

}

const findStudent = name => { // función que recibe un nombre para buscarlo

    if(students.includes(name)){ // verifica si el nombre existe dentro del array
        print("Student found") // muestra mensaje si el estudiante existe
    }else{ // si no se cumple la condición anterior
        print("Student not found") // muestra mensaje indicando que no existe
    }

}

const studentMenu = () => { // función que ejecuta el menú del programa

    let option // variable para guardar la opción elegida por el usuario

    do{ // inicia un ciclo que se repetirá hasta que el usuario decida salir

        option = prompt( // muestra el menú y guarda la opción digitada
`
1 Add student
2 Show students
3 Find student
4 Exit
`)

        if(option == 1){ // verifica si el usuario eligió agregar estudiante

            let name = prompt("Enter student name") // pide al usuario el nombre del estudiante
            addStudent(name) // llama la función para agregar el estudiante

        }

        else if(option == 2){ // verifica si el usuario eligió mostrar estudiantes
            showStudents() // llama la función que imprime la lista
        }

        else if(option == 3){ // verifica si el usuario eligió buscar estudiante

            let name = prompt("Enter student name to search") // pide el nombre a buscar
            findStudent(name) // llama la función para buscar el estudiante

        }

    }while(option != 4) // el ciclo se repite mientras la opción no sea 4 (salir)

}

// 12. Calculadora con do...while

const calculator = () => { // función que ejecuta la calculadora

    let option // variable para guardar la opción elegida
    let num1 // variable para el primer número
    let num2 // variable para el segundo número

    do{ // inicia un ciclo que se repetirá hasta elegir salir

        option = prompt(// muestra el menú de operaciones
`
1 Add
2 Subtract
3 Multiply
4 Divide
5 Exit
`)

        if(option >= 1 && option <= 4){ // verifica si la opción es una operación matemática

            num1 = Number(prompt("Enter first number")) // pide el primer número y lo convierte a número
            num2 = Number(prompt("Enter second number")) // pide el segundo número y lo convierte a número

        }

        if(option == 1){ // verifica si eligió sumar
            print(`Result: ${num1 + num2}`) // muestra el resultado de la suma
        }

        else if(option == 2){ // verifica si eligió restar
            print(`Result: ${num1 - num2}`) // muestra el resultado de la resta
        }

        else if(option == 3){ // verifica si eligió multiplicar
            print(`Result: ${num1 * num2}`) // muestra el resultado de la multiplicación
        }

        else if(option == 4){ // verifica si eligió dividir
            print(`Result: ${num1 / num2}`) // muestra el resultado de la división
        }

    }while(option != 5) // el ciclo continúa hasta que el usuario elija la opción 5 (salir)

}
