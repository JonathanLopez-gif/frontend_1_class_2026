// Ejercicio 1

let person = {
    firstName: "Jonathan",
    lastName: "López",
    documentNumber: 1036929175
}

// Ejercicio 2

console.log(person)

// Ejercicio 3

person.job = "Software Developer"
console.log(person)

// Ejercicio 4

delete person.documentNumber
console.log(person)

// Ejercicio 5

let person2 = {
    firstName: "Jonathan",
    lastName: "López",
    documentNumber: 1036929175,
    study: function() {
        console.log(`Hello, I'm ${this.firstName} and I'm studying software development`)
    }
}

person2.study()
 
// Ejercicio 6

for (let property in person2) {
    console.log(property)
}

// Ejercicio 7

let person3 = {
    firstName: "Jonathan",
    lastName: "López",
    documentNumber: 1036929175,
    person4: {
        firstName: "Jacobo",
        lastName: "Piedrahíta",
    }
}







