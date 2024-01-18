const opciones = {

    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function crearMapa(latitud, longitud){
    
    //leafletjs
    var map = L.map('map').setView([latitud, longitud], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitud, longitud]).addTo(map)
        .bindPopup('Estas aquí')
        .openPopup();

    var circle = L.circle([latitud, longitud], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);    
}

function exito(posicion) {
    console.log(posicion);
    const latitud = posicion.coords.latitude
    // console.log(latitud)
    const longitud = posicion.coords.longitude
    // console.log(longitud)
    const accuracy = posicion.coords.accuracy

    const p = document.createElement("p");
    p.innerHTML = `Latitud: ${latitud} <br> Longitud: ${longitud} <br> Precisión: ${accuracy}` 
    document.body.appendChild(p);
    crearMapa(latitud, longitud)
}
    
function error(error) {
    console.log(error);
}
    
navigator.geolocation.getCurrentPosition(exito, error, opciones);
