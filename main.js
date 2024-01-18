navigator.geolocation.getCurrentPosition(exito, error);

function exito(posicion) {
  console.log(posicion);
}

function error(error) {
  console.log(error);
}