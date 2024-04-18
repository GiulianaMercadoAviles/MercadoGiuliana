function matchpersonajes() {
    
    let numpersonaje1 = document.getElementById("numpersonaje1").value;
    let numpersonaje2 = document.getElementById("numpersonaje2").value;

    fetch("https://rickandmortyapi.com/api/character/" + numpersonaje1 + "," + numpersonaje2)
        .then(response => response.json())
        .then(data => {
            const personaje = document.getElementById("personajeinfo")
          
            if (data[0].gender == data[1].gender) {
            personaje.innerHTML = `

                <div class="personaje1">
                    <img src="https://rickandmortyapi.com/api/character/avatar/${data[0].id}.jpeg">
                    <p id="nombre">${data[0].name}</p>
                    <p>Género: ${data[0].gender}</p> 
                </div>

                <div class="resultado">
                <img id="imagen" src="https://i.pinimg.com/564x/fd/3b/de/fd3bde6ba2d10e5395ad7ed2fdf76231.jpg">
                    <p id="parrafo">Hay Match</p>
                </div>

                <div class="personaje2">
                    <img src="https://rickandmortyapi.com/api/character/avatar/${data[1].id}.jpeg">
                    <p id="nombre">${data[1].name}</p>
                    <p>Género: ${data[1].gender}</p> 
                </div>`  
                } else personaje.innerHTML = `
                
                <div class="personaje1">
                    <img src="https://rickandmortyapi.com/api/character/avatar/${data[0].id}.jpeg">
                    <p id="nombre">${data[0].name}</p>
                    <p>Género: ${data[0].gender}</p> 
                </div>  

                <div class="resultado">
                <img id="imagen" src="https://i.pinimg.com/564x/5f/1f/a2/5f1fa2f7404401c352efa457fdf326a5.jpg">
                    <p id="parrafo">No hay Match</p>
                </div>

                <div class="personaje2">
                    <img src="https://rickandmortyapi.com/api/character/avatar/${data[1].id}.jpeg">
                    <p id="nombre">${data[1].name}</p>
                    <p>Género: ${data[1].gender}</p> 
                </div>`
            })

        .catch (error => {
            console.error("error", error)
        })

}