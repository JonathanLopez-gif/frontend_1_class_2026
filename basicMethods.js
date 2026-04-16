// Obtener un elemento por su ID

let elementoPorId = document.getElementById('p1')

elementoPorId.innerHTML = 'HTML'

// Obtener elementos por su clase

let elementosPorClase = document.getElementsByClassName('parrafos')

elementosPorClase[1].textContent = 'CSS'

// Obtener elementos por su etiqueta

let elementosPorEtiqueta = document.getElementsByTagName('p')

elementosPorEtiqueta[2].innerHTML = 'JavaScript'


let titulo = document.getElementsByTagName('h1')

titulo[0].textContent = 'Manipulación del DOM'

// Modificar estilos de un elemento

elementoPorId.style.backgroundColor = 'black'
elementoPorId.style.color = 'white'
elementoPorId.style.borderRadius = '5px'
elementoPorId.style.textAlign = 'center'
elementoPorId.style.width = '100px'

let elementoPorId2 = document.getElementById('p2')
elementoPorId2.style.backgroundColor = 'black'
elementoPorId2.style.color = 'white'
elementoPorId2.style.borderRadius = '5px'
elementoPorId2.style.textAlign = 'center'
elementoPorId2.style.width = '100px'

// Por nodo

let elementoPorId3 = document.querySelector('#p3')
elementoPorId3.innerHTML = 'Java'

let elementoPorClase2 = document.querySelectorAll('.parrafos')
let arrayElementos = [...elementoPorClase2]
arrayElementos[1].textContent = 'Spring Boot'

let elementosPorEtiqueta2 = document.querySelectorAll('p')
elementosPorEtiqueta2[2].innerHTML = 'React'

let parrafoCero = document.createElement('p')
parrafoCero.classList.add('parrafos')
parrafoCero.setAttribute('id', 'p0')
parrafoCero.textContent = 'Párrafo 0'
document.body.appendChild(parrafoCero)