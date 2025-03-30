let nombre = "Juan"; // Cadena
let edad = 25;       // Número
let esActivo = true; // Booleano

console.log(typeof nombre); // "string"
console.log(typeof edad);   // "number"
console.log(typeof esActivo); // "boolean"

let palabra = "HENRY";

// Obtener el primer carácter
console.log(palabra.charAt(0)); // "H"

// Obtener el tercer carácter
console.log(palabra.charAt(2)); // "N"

// Intentar acceder a un índice fuera del rango
console.log(palabra.charAt(10)); // ""