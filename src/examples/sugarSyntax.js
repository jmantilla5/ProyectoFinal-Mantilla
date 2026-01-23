//SPREAD OPERATOR (...)

const numbers = [1, 2, 3];
const newNumbers = numbers.concat([4, 5, 6, 7, 8, 9, 10]); // [1,2,3,4,5,6,7,8,9,10]

const SugarNumbers = [...numbers, 4, 5, 6, 7, 8, 9, 10];

//DESTRUCTURING

//ARRAYS

const colors = ["Amarillo", "Violeta", "Naranja"];

const colorAmarillo = colors[0];
const colorVioleta = colors[1];
const colorNaranja = colors[2];

const [amarillo, violeta, naranja] = colors;

//OBJECTOS

const alumno = {
  nombre: "Carlos",
  edad: 25,
  ciudad: "Mendoza",
};

console.log(alumno.nombre); // Carlos

const { nombre, edad } = alumno;

//Condicionales

let mensaje;

if (edad >= 18) {
  mensaje = "Es mayor de edad";
} else {
  mensaje = "Es menor de edad";
}

//sugar
//Ternario

const SugarMensaje = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";

//concatenar datos mas string

console.log("Hola " + nombre + " ¿Cómo estás?"); // Hola Carlos ¿Cómo estás?

console.log(`Hola ${nombre} ¿Cómo estás?`); // Hola Carlos ¿Cómo estás?

//FUNCTIONS

function sumar(a, b) {
  return a + b;
}

const sumarArrow = (a, b) => a + b;
