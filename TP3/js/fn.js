function person() {

    const urlrandomuser = 'https://randomuser.me/api/'

    fetch(urlrandomuser) 
        .then (response => response.json())
        .then (data => {

            const personas = document.getElementById("personainfo")
            console.log(data)

            personas.innerHTML = `
            <section class="persona">
                <div id="foto">
                    <img src="${data.results[0].picture.large}">
                </div>
                <div id="datapersona">
                    <h2>${data.results[0].name.first} ${data.results[0].name.last}</h2>
                    <h4>${data.results[0].location.country}</h4>
                    <h4>Latitud: ${data.results[0].location.coordinates.latitude}</h4>
                    <h4>Longitud: ${data.results[0].location.coordinates.longitude}</h4>
                </div>
            </section>`;

            map(data.results[0].location.coordinates.latitude, data.results[0].location.coordinates.longitude);

            conteiner = L.DomUtil.get('map');

            if (conteiner != null) {
                conteiner._leaflet_id = null;
            } 
        })
        .catch (error => {
            console.error("error", error)
            document.getElementById('error').innerHTML = "Error: " + error;
        })
    }

function map(latitude, longitude) {

    var map = L.map('map').setView([latitude, longitude], 7);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([latitude, longitude]).addTo(map);
}
