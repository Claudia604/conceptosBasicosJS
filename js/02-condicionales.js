// son las condiciones
const edad = parseInt(prompt("Ingrese su edad"));
// if(condicion logica){todo el codigo que quiero ejecutar si se cumple la condicion}
if (edad >= 18 && edad <= 71) {
  alert("Puede tener un permiso para conducir");
} else if (edad < 18) {
  alert("Sos menor de edad, no puedes tener un permiso para conducir");
} else {
  alert("No puede manejar");
}
// else(lo que quiero ejecutar si no se cumple la condicion logica)