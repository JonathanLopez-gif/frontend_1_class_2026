// 1. Crea una clase que reciba dos propiedades

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

const persona1 = new Persona("Juan", 25);
console.log(persona1);

// 2. Añade un método a la clase que utilice las propiedades

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }

}

const persona2 = new Persona("Ana", 20);
console.log(persona2.saludar());       

// 3. Muestra los valores de las propiedades e invoca a la función

const persona3 = new Persona("Ana", 20);

// Mostrar valores de las propiedades

console.log("Nombre:", persona3.nombre);
console.log("Edad:", persona3.edad);

// Invocar método

console.log(persona1.saludar())

// 4. Añade un método estático a la primera clase

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }

  // Método estático

  static compararEdades(personaA, personaB) {
    if (personaA.edad > personaB.edad) {
      return `${personaA.nombre} es mayor que ${personaB.nombre}`;
    } else if (personaA.edad < personaB.edad) {
      return `${personaB.nombre} es mayor que ${personaA.nombre}`;
    } else {
      return `${personaA.nombre} y ${personaB.nombre} tienen la misma edad`;
    }
  }
}

// 5. Haz uso del método estático

// Crear instancias

const personaA = new Persona("Carlos", 30);
const personaB = new Persona("Laura", 25);

// Uso del método estático

const resultado = Persona.compararEdades(persona1, persona2);

console.log(resultado);

// 6. Crea una clase que haga uso de herencia

// Clase hija que hereda de Persona

class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad); // Llama al constructor de la clase padre
    this.curso = curso;
  }

  estudiar() {
    return `${this.nombre} está estudiando ${this.curso}.`;
  }
}

// Crear instancia de la clase hija

const estudiante1 = new Estudiante("María", 22, "JavaScript");

// Uso de métodos heredados y propios

console.log(estudiante1.saludar());   // Método heredado
console.log(estudiante1.estudiar());  // Método propio

// 7. Crea una clase que haga uso de getters y setters

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  // Getter para nombre

  get nombre() {
    return this.nombre;
  }

  // Setter para nombre

  set nombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  // Getter para precio

  get precio() {
    return this.precio;
  }

  // Setter para precio con validación

  set precio(nuevoPrecio) {
    if (nuevoPrecio > 0) {
      this.precio = nuevoPrecio;
    } else {
      console.log("El precio debe ser mayor que 0");
    }
  }
}

// Crear instancia

const producto1 = new Producto("Laptop", 1500);

// Usar getters

console.log(producto1.nombre);
console.log(producto1.precio);

// Usar setters

producto1.nombre = "Tablet";
producto1.precio = 800;

console.log(producto1.nombre);
console.log(producto1.precio);

// 8. Modifica la clase con getters y setters para que use propiedades privadas

class Producto {
  #nombre;
  #precio;

  constructor(nombre, precio) {
    this.#nombre = nombre;
    this.#precio = precio;
  }

  // Getter para nombre

  get nombre() {
    return this.#nombre;
  }

  // Setter para nombre

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  // Getter para precio

  get precio() {
    return this.#precio;
  }

  // Setter para precio con validación

  set precio(nuevoPrecio) {
    if (nuevoPrecio > 0) {
      this.#precio = nuevoPrecio;
    } else {
      console.log("El precio debe ser mayor que 0");
    }
  }
}

// 9. Utiliza los get y set y muestra sus valores

// Crear instancia

const producto1 = new Producto("Laptop", 1500);

// Mostrar valores usando getters

console.log("Nombre inicial:", producto1.nombre);
console.log("Precio inicial:", producto1.precio);

// Modificar valores usando setters

producto1.nombre = "Tablet";
producto1.precio = 1200;

// Mostrar los valores actualizados usando getters

console.log("Nombre actualizado:", producto1.nombre);
console.log("Precio actualizado:", producto1.precio);

// 10. Sobrescribe un método de una clase que utilice herencia y haz uso de super para llamar al método original
 
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

// Clase hija que hereda de Persona

class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }

  // Sobrescribir el método saludar

  saludar() {
    // Llamamos al método original de la clase padre
    const saludoPadre = super.saludar();
    return `${saludoPadre} Estoy estudiando ${this.curso}.`;
  }
}

// Crear instancia de la clase hija

const estudiante2 = new Estudiante("María", 22, "JavaScript");

// Invocar método sobrescrito

console.log(estudiante2.saludar());


// ----- RETO -----

// Crea una clase llamada "Película" con las siguientes propiedades: título, director, año de estreno y género. 
// Luego, crea un método dentro de la clase que imprima una descripción completa de la película utilizando sus propiedades.

class Pelicula {
  constructor(titulo, director, añoEstreno, genero) {
    this.titulo = titulo;
    this.director = director;
    this.añoEstreno = añoEstreno;
    this.genero = genero;
  }

  // Método que imprime una descripción completa

  descripcion() {
    return `La película "${this.titulo}" fue dirigida por ${this.director}, estrenada en ${this.añoEstreno} y pertenece al género ${this.genero}.`;
  }
}

// Crear instancia de la clase

const pelicula1 = new Pelicula("Inception", "Christopher Nolan", 2010, "Ciencia ficción");

// Usar el método para mostrar la descripción

console.log(pelicula1.descripcion());


