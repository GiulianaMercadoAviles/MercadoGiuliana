const Personaje = {
    "id": 140,
    "name": "Genital Washer",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Post-Apocalyptic Earth",
      "url": "https://rickandmortyapi.com/api/location/8"
    },
    "location": {
      "name": "Post-Apocalyptic Earth",
      "url": "https://rickandmortyapi.com/api/location/8"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/140.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/23"
    ],
    "url": "https://rickandmortyapi.com/api/character/140",
    "created": "2017-12-27T18:47:44.566Z"
  }

  /*console.log (Personaje);

console.log (Personaje.origin.url);

const jugador = {
    "nombre": "Nahuel",
    "apellido": "Barrios",
    "apodo": "perrito",
    "edad": 28,
    "clubes": ['San Lorenzo', 'U. Catolica'],
    "activo": true,
    "sueldo": 1000000,99,
}

console.log (jugador.clubes [0],);*/

console.log ("El personaje " + Personaje.name + " esta " + Personaje.status)

document.getElementById("personaje").innerHTML = "El personaje " + Personaje.name + " esta " + Personaje.status
