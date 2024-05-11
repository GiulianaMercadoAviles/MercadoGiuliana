let array1 = [];
let array2 = [];
let personajes = [];
let inicio = 1;
let fin = 826;

function buscarnumeros1(){

let numero1 = Number(document.getElementById("numero1").value);

    if (numero1 >= inicio && numero1 <= fin) {
    
        if (array1.length < 3) {     

            if (array1.includes(numero1) == true || array2.includes(numero1) == true) {
                alert("Número ya ingresado");
            } else {

                console.log(array1.includes(numero1));
                array1.push(numero1);
                console.log(array1)

                if (array1.length == 3) {
                    alert("Ya se ingresaron 3 números");

                    let boton1 = document.getElementById("boton1");
                    boton1.disabled = true;

                    if (array2.length == 3) {
                    buscarpersonaje(array1, array2)
                    }
                } 
            }
        } else {
            alert("Error ya se han ingresado 3 números"); 
        }
    } else {
        alert("Error número no valido");
    }
}

function buscarnumeros2(){

let numero2 = Number(document.getElementById("numero2").value);

    if (numero2 >= inicio && numero2 <= fin) {

        if (array2.length < 3) {
    
            if (array1.includes(numero2) == true || array2.includes(numero2) == true) {
                alert("Número ya ingresado");
            } else {
            
                array2.push(numero2);
                console.log(array2);

                if (array2.length == 3) {
                    alert("Ya se ingresaron 3 números");

                    let boton2 = document.getElementById("boton2");
                    boton2.disabled = true;

                    if (array1.length == 3) {
                        buscarpersonaje(array1, array2)
                    }
                } 
            }
        } else {
            alert("Error ya se han ingresado 3 números"); 
        }
    } else {
        alert("Error número no valido");
    }
}

function buscarpersonaje(array1, array2) {

    let personajes = array1.concat(array2);
    
    fetch("https://rickandmortyapi.com/api/character/" + personajes)
    .then (response => response.json())
    .then (data => { 
    
        console.log(data);
        console.log(personajes);

        for (j = 0; j < array1.length; j++) {
            for (i = 0; i < data.length; i++) {
                
                if (data[i].id == array1[j]) {

                    resultado1.innerHTML += `
                    <img src="${data[i].image}">`
                }
            }
        }

        for (j = 0; j < array2.length; j++) {
            for (i = 0; i < data.length; i++) {

                if (data[i].id == array2[j]) {

                    resultado2.innerHTML += `
                    <img src="${data[i].image}">`
                }
            }
        }
    })
    .catch (error => {
        console.error("error", error)
        document.getElementById('error').innerHTML = "Error: " + error;

        if (error == "TypeError: Failed to fetch") {
            document.getElementById('error').innerHTML = "Error: No hay conexión a internet";
        }
    })
}