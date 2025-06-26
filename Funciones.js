// FUNCIONES: (Forma de usar y reutilizar la funcion las veces que querramos de la forma que querramos.)

function saludar() {
    respuesta = prompt("Hola como estas hoy?");
    if (respuesta == "bien") {
        alert("me alegro mucho")
    } else {
        alert("Que lastima lo lamento")
    }
}

saludar()
saludar() // Aqui colocamos o retomamos la funcion (saludar) para que funcione las veces que necesitemos y dodne querramos colocarla.

//  OTRA FORMA DE HACER LAS FUNCIONES: 

function saludar(){
    alert("hola como estas hoy ?")
    return saludar
}

let saludos = saludar()
console.log(saludos)


// FUNCIONES CON RESULTADOS DIRECTAMENTE AL DECLARARLOS AL LLAMAR A LA FUNCION.

function suma(num1, num2) {
    let suma = (num1 + num2)
    console.log(suma)
}

suma(12,32)
suma(12,20)
suma(20,30)

//----------------------------------

function resta(num1, num2){
    let resta = (num1 - num2)
    return resta
}

let restamos = resta(46, 24)
console.log(restamos)

//----------------------------------

function saludar(nombre){
    let frase = (`Hola ${nombre} como estas hoy ?`)
    return frase
}

let fr = saludar("jose")
console.log(fr)


// FUNCIONES con FLECHA. (Muy usada) (si solo tiene un parametro no hacen falta los parentesis ni llaves.)

const saludo =  nombre => {
    let fras = `Hola como estas hoy ${nombre} todo bien ??`;
    console.log(fras)
}
saludo("pedro")



















