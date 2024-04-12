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
            
            if (data.gender == "unknown") {
            personaje.innerHTML = `
                <div class="nombre">
                    <p>Nombre: ${data.name}</p>
                    <p>Estado: ${data.status}</p>
                    <p>Especie: ${data.species}</p>
                    <p>Género: ${data.gender}</p> 
                    <img src="https://rickandmortyapi.com/api/character/avatar/${data.id}.jpeg"><src>
                <div>`  
                } else personaje.innerHTML = `
                <p>Personaje no encontrado</p>`
            })

        .catch (error => {
            console.error("error", error)
        })

}