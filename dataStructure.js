const output = document.getElementById("output") // Obtiene el elemento del DOM donde se mostrará la información

const print = (text) => { // Función flecha para imprimir texto en pantalla
    output.innerHTML += text + "<br>" // Agrega el texto al HTML del div con un salto de línea
}

// Ejercicios con Set

// Ejercicio 1

const students = new Set(); // Crea un Set vacío para almacenar nombres de estudiantes

students.add("Ana"); // Agrega el nombre Ana
students.add("Luis"); // Agrega el nombre Luis
students.add("Carlos"); // Agrega el nombre Carlos

print("Students in the Set:"); // Imprime un título en el DOM

for (const student of students) { // Recorre el Set
    print(student); // Imprime cada estudiante
}

print("Total students: " + students.size); // Muestra cuántos estudiantes hay en el Set

const studentExists = students.has("Luis"); // Verifica si Luis existe en el Set

print("Does Luis exist? " + studentExists); // Imprime el resultado

// Ejercicio 2

let numbers = [5,5,6,7,7,8,9]; // Crea un array con números repetidos

const uniqueNumbers = new Set(numbers); // Convierte el array en Set para eliminar duplicados

print("Original array: " + numbers); // Imprime el array original

print("Unique numbers:"); // Título

for (const num of uniqueNumbers) { // Recorre el Set
    print(num); // Imprime cada número único
}

// Ejercicio 3

const cities = new Set(); // Crea un Set vacío para almacenar ciudades

cities.add("Bogota"); // Agrega Bogota
cities.add("Medellin"); // Agrega Medellin
cities.add("Cali"); // Agrega Cali
cities.add("Cartagena"); // Agrega Cartagena

print("Cities in the Set:"); // Imprime título

for (const city of cities) { // Recorre el Set
    print(city); // Imprime cada ciudad
}

// Reto

const removeDuplicateEmails = (emails) => { // Función flecha que recibe un array de correos
    const uniqueEmails = new Set(emails); // Convierte el array a Set para eliminar duplicados

    print("Unique emails:"); // Título

    for (const email of uniqueEmails) { // Recorre el Set
        print(email); // Imprime cada correo único
    }

    print("Total unique emails: " + uniqueEmails.size); // Muestra cuántos correos únicos hay
};

const emailList = [ // Array de correos
    "ana@email.com",
    "juan@email.com",
    "ana@email.com",
    "luis@email.com",
    "juan@email.com"
];

removeDuplicateEmails(emailList); // Ejecuta la función

// Ejercicios con Map

// Ejercicio 1

const months = new Map(); // Crea un Map vacío

months.set(1, "January"); // Agrega mes 1
months.set(2, "February"); // Agrega mes 2
months.set(3, "March"); // Agrega mes 3
months.set(4, "April"); // Agrega mes 4
months.set(5, "May"); // Agrega mes 5

print("Months in Map:"); // Título

for (const [number, name] of months) { // Recorre el Map
    print(number + " : " + name); // Imprime número y nombre del mes
}

// Ejercicio 2

const monthExists = months.has(5); // Verifica si la clave 5 existe

print("Does month 5 exist? " + monthExists); // Imprime el resultado

print("Month 5 value: " + months.get(5)); // Imprime el valor del mes 5

// Ejercicio 3

months.set("summerMonths", ["June", "July", "August"]); // Agrega una clave con un array

print("Summer months: " + months.get("summerMonths")); // Imprime el array

// Ejercicio 4

const fruitsArray = ["apple", "banana", "banana", "orange"]; // Array con duplicados

const fruitsSet = new Set(fruitsArray); // Convierte el array en Set

const dataMap = new Map(); // Crea un Map vacío

dataMap.set("fruits", fruitsSet); // Guarda el Set dentro del Map

print("Fruits stored in Map:"); // Título

for (const fruit of dataMap.get("fruits")) { // Recorre el Set dentro del Map
    print(fruit); // Imprime cada fruta
}

// Ejercicio 5

const countryCapital = new Map(); // Crea Map de países y capitales

countryCapital.set("Colombia", "Bogota"); // Agrega Colombia
countryCapital.set("Peru", "Lima"); // Agrega Peru
countryCapital.set("Chile", "Santiago"); // Agrega Chile

print("Capital of Colombia: " + countryCapital.get("Colombia")); // Imprime capital

// Ejercicio 6

const inventory = new Map(); // Crea Map de inventario

inventory.set("keyboard", 10); // Agrega teclado
inventory.set("mouse", 20); // Agrega mouse
inventory.set("monitor", 5); // Agrega monitor

print("Inventory:"); // Título

for (const [product, quantity] of inventory) { // Recorre el Map
    print(product + " : " + quantity); // Imprime producto y cantidad
}

// Ejercicio 7

const studentsAge = new Map(); // Crea Map de estudiantes y edades

studentsAge.set("Juan", 20); // Agrega Juan
studentsAge.set("Pedro", 22); // Agrega Pedro

if (studentsAge.has("Maria")) { // Verifica si Maria existe
    print("Maria age: " + studentsAge.get("Maria")); // Imprime edad
} else {
    studentsAge.set("Maria", 21); // Agrega Maria
    print("Maria added with age: " + studentsAge.get("Maria")); // Muestra edad
}

// Ejercicio 8

const studentGrades = new Map(); // Crea Map para estudiantes y notas

studentGrades.set("Ana", 4.5); // Agrega Ana
studentGrades.set("Luis", 3.8); // Agrega Luis
studentGrades.set("Carlos", 4.2); // Agrega Carlos
studentGrades.set("Maria", 4.9); // Agrega Maria

print("Students with grade greater than 4.0:"); // Título

for (const [student, grade] of studentGrades) { // Recorre el Map
    if (grade > 4.0) { // Verifica si la nota es mayor a 4
        print(student + " : " + grade); // Imprime estudiante y nota
    }
}

