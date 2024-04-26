function buscarpersonaje() {
    
    let numpersonaje = document.getElementById("numpersonaje").value;

    fetch("https://rickandmortyapi.com/api/character/" + numpersonaje)
        .then(response => response.json())
        .then(data => {
            const personaje = document.getElementById("personajeinfo")
            
            if (data.gender == "unknown") {
            personaje.innerHTML = `
                <div class="nombre">
                    <img src="https://rickandmortyapi.com/api/character/avatar/${data.id}.jpeg"><src>
                    <p>Nombre: ${data.name}</p>
                    <p>Estado: ${data.status}</p>
                    <p>Especie: ${data.species}</p>
                    <p>Género: ${data.gender}</p> 
                <div>`  
                } else personaje.innerHTML = `
                <p>Personaje no encontrado</p>`
            })

        .catch (error => {
            console.error("error", error)
        })

}