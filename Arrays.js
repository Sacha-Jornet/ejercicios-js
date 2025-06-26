// ARRAYS

let frutas = ["banana","manzana","pera"];

console.log(frutas[2])


// ARRAYS ASOCIATIVOS (objetos) CLAVE/VALOR, 

let pc = {
    nombre : "Ryzen md",
    procesador : "5600xt",
    ram : "32gb",
    espacio : "1tb"

};

console.log (pc["ram"])

// forma de ejecucion

let nombre = pc["nombre"]
let procesador = pc["procesador"]
let ram = pc["ram"]
let espacio = pc["espacio"]

let frase = `El nombre de mi pc es: ${nombre} </b> <br>
            El procesador es: ${procesador} </b> <br>
            La ram es: ${ram} </b> <br>
            El espacio es de: ${espacio} </b>` ;

console.log(frase)
document.write(frase);

















