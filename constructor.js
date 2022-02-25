// funcion constructora

function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

var autos = [];
for (var i = 0; i < 30; i++) {
  autos.push(new auto("Toyota", `Model ${i}`, 2020 + i));
}
for (var vehiculo of autos) {
  console.log(vehiculo);
}

// var autoNuevo = new auto("Tesla", "Model 3", 2020);
