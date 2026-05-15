// Selecciono los inputs (barritas) por su id
const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');
const alphaInput = document.getElementById('alpha');

// Selecciono los elementos de texto donde se mostrará el valor por su id
const redText = document.getElementById('red-text');
const greenText = document.getElementById('green-text');
const blueText = document.getElementById('blue-text');
const alphaText = document.getElementById('alpha-text');

// Creo variables para almacenar los valores de los colores
let red = redInput.value;
let green = greenInput.value;
let blue = blueInput.value;
let alpha = alphaInput.value;

// Inicializo el texto con los valores por defecto
redText.textContent = red;
greenText.textContent = green;
blueText.textContent = blue;
alphaText.textContent = alpha;

// Función para actualizar el color de fondo del body
const updateColor = (red, green, blue, alpha) => {
  const rgbaColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  document.body.style.backgroundColor = rgbaColor;
};

// Event Listeners para cada barrita

redInput.addEventListener('input', (e) => { // Uso el evento 'input' para que cambie el color automáticamente mientras voy arrastrando la barrita
  red = e.target.value; // Indico el elemento que causa el evento con 'e.target'
  redText.textContent = red;
  updateColor(red, green, blue, alpha);
});

greenInput.addEventListener('input', (e) => {
  green = e.target.value;
  greenText.textContent = green;
  updateColor(red, green, blue, alpha);
});

blueInput.addEventListener('input', (e) => {
  blue = e.target.value;
  blueText.textContent = blue;
  updateColor(red, green, blue, alpha);
});

alphaInput.addEventListener('input', (e) => {
  alpha = e.target.value;
  alphaText.textContent = alpha;
  updateColor(red, green, blue, alpha);
});