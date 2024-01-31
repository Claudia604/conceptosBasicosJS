// mostrar comentarios desde el archivo de js
console.log("Mensaje por consola");

// mostrar un mensaje en el archivo html
document.write(
  '<p class="text-center text-primary">Primer mensaje en el documento HTML</p>'
);

// ventanas emergentes
alert("Ejemplo de una alerta");

// declarar e  inicializar una variable
// inicializar o asignar un valor se usa =
// crear o declarar una variable (var - let - const)
// var ya no se usa

let regaloNavidad = "Iphone 15 Pro max";

// concatenar: unir el texto con el texto de una variable se usa +
document.write("Regalo de navidad 2023: " + regaloNavidad + "<br>");

// modificar el contenido de una variable creada con la palabra let
regaloNavidad = "Rtx 4090 Rog Strix";
document.write("Regalo de navidad 2023: " + regaloNavidad);

const urlUniverse = "https://universe.rollingcodeschool.com/";

document.write("<br>Pagina de Universe: " + urlUniverse);

let precioSinImpuestos = 1100;
let impuestos = 600;

//() dan prioridad, en sumas se puede usar
// OPCION 1 document.write("<br>El precio del Iphone 15 es: $" + (precioSinImpuestos + impuestos) + " USD");

// OPCION 2 document.write("<br>El precio del Iphone 15 es: $" + (1100 + 600) + " USD");

// OPCION 3
let resultado = precioSinImpuestos + impuestos;
document.write("<br>El precio del Iphone 15 es: $" + resultado + " USD");

// Ejercicio del trabajo practico
// prompt: es familia del alert, es una ventana emergente que esta creada con un imput, con un lugar para que el usuario agregue un dato
// parseInt('50') transforma un texto a un numero entero
// parseFloat('50.3') transfotma un texto a un numero decimal
let gradosCelsius = parseInt(prompt('Ingrese un valor en grados centigrados'));
console.log
let gradosFahrenheit = (gradosCelsius * 9) / 5  + 32
document.write('<br>' + gradosCelsius + '°C grados celsius equivale a ' + gradosFahrenheit + '°F grados farenheit')
document.write('<br>Otro ejemplo :' +(gradosCelsius + 50))