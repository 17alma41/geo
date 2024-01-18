const opciones = {

    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function crearMapa(latitude, longitude){

    //leafletjs
    var map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('Estas aquí')
        .openPopup();

    var circle = L.circle([latitude, longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);    
}

function exito(posicion) {
    console.log(posicion);

    const {latitude, longitude, accuracy} = posicion.coords

    const p = document.createElement("p");
    p.innerHTML = `Latitud: ${latitude} <br> Longitud: ${longitude} <br> Precisión: ${accuracy}` 
    document.body.appendChild(p);
    crearMapa(latitude, longitude)
}
    
function error(error) {
    console.log(error);
}
    
navigator.geolocation.getCurrentPosition(exito, error, opciones);
