var frutas = ["Manzanas", "Platano", "Cereza", "Fresa"];

console.log(frutas);

var masFrutas = frustas.push("Uvas"); // agregar elementos al final

var ultimo = frutas.pop("Uvas"); //elimina el ultimo elemento

var nuevaLongitud = frutas.unshift("Uvas"); //agregar al principio

var borrarFruta = frutas.shift("Uvas"); //eliminar al principio

var posicion = frutas.indexOf("Cereza"); // dice la posicion donde esta el array

var estudiantes = ["Maria", "Segio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}

for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}

while (estudiantes.length > 0) {
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}
