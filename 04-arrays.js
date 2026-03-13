// Creo contenedor donde se mostrará la información seleccionandolo por su id

let result = document.getElementById("resultado") 

// Creo constante con función flecha para imprimir texto en pantalla con salto de linea

const print = (t) => result.innerHTML += t + "<br>" 

// Array con 5 ciudades

let cities = ["Bogota","Medellin","Cali","Cartagena","Barranquilla"]

// Mostrar ciudades

for (let city of cities) 

print(city)

// Agregar ciudad al final

cities.push("Pereira")

print(`- Array despues de agregar ciudad al final: ${cities}`)

// Eliminar la primera ciudad

cities.shift()

print(`- Array despues de eliminar la primera ciudad: ${cities}`)

// Cambiar la tercera ciudad

cities[2] = "Manizales"

print(`- Array despues de cambiar la tercera ciudad: ${cities}`)

// Pedir nombres al usuario

let names = []
let enteredName

do{
  enteredName = prompt("Enter a name or type 'end'")

  if(enteredName !== "end") names.push(enteredName)

}while(enteredName !== "end")

// Mostrar cantidad de nombres

print(`Total entered names: ${names.length}`)

// Buscar nombre

let searchName = prompt("Search for a name:")

if(names.includes(searchName)){
  print("The name exists")
}else{
  print("The name doesn't exist")
}
