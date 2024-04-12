/* 
$array = ['pera', 'manzana', 'frutilla', 'sandia', 'mandarina'];

console.log($array[1])

for (i = 0; i < $array.length; i ++){
    console.log($array[i])
};

frutas.forEach (fruta => {
    console.log (fruta);
})

el forEach recorre todo el array

let frutas = ['pera', 'manzana', 'frutilla', 'sandia', 'mandarina'];

for (const fruta of frutas) {
    if(fruta == 'manzana') {
        console.log(fruta)
    }
}*/

  function buscarpersonaje() {
    
    let numpersonaje = document.getElementById("numpersonaje").value;
    console.log(numpersonaje)
    fetch("https://rickandmortyapi.com/api/character/" + numpersonaje)
        .then(response => response.json())
        .then(data => {
            const personaje = document.getElementById("personajeinfo")
            personaje.innerHTML = `
                <div class="nombre">
                <table>
                <tr>
                    <td>Nombre: ${data.name}</td>
                </tr>
                <tr>
                    <td>Estatus: ${data.status}</td>
                </tr>
                <tr>
                    <td>Especie: ${data.species}</td>
                </tr>
                <tr>
                    <td>Genero: ${data.gender}</td> 
                </tr>
                </table>
                <div>`
  })

  .catch (error => {
    console.error("error", error)
  })

  }
