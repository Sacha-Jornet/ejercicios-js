//  FUNCIONES:

/* Function nombre (Parametro, parametros...) {
    // codigo a ejecutar.
    console.log(algo) // No se toma como un valor retornado
    return algo; // Si se toma como un valor retornado. Significa que del otro lado alguien recibira un dato.
} */


// el parametro es cuando recive y cuando paso es argumento.
function llamarJaimito (dinero, bolsa){
    console.log('La compra fue exitosa.');
    let compra = 'leche';
    return compra;
}

let reciboalgo = llamarJaimito("dinero", "bolsa");

console.log(reciboalgo)

//---------------------------------

function sumando (sumar){
    console.log("Exito en la operacion");
    let sumados = (30 + 20) / 5
    return sumados
}

let resultado = sumando("sumar")
console.log(resultado)

//---------------------------------

function TraerDelSuper(producto1, producto2) {
    console.log ("La compra fue exitosa");
    return `Te compre ${producto1} y tambien ${producto2}`;
}


let hijo = TraerDelSuper( "queso", "leche")
console.log (hijo);

let tio = TraerDelSuper("vino","salame")
console.log(tio)

// --------------------------------

// ACTIVIDADES DE FUNCIONES CON CHAT GPT.

//---------------------------------

function saludar(nombre) {
    return "hola como estas, " + nombre;
}

console.log(saludar("Lucia"));

//---------------------------------

// Crear una función que reciba dos números y devuelva su suma.

function sumaNumeros(Num1, Num2) {
    return (Num1 + Num2)
}

let result = sumaNumeros(30, 20);
console.log(result)

//---------------------------------

//  Crear una función que reciba un número y diga si es par o impar.

function pares (numerosPares) {
    if (numerosPares % 2 == 0) {
        return "Es par"
    }   else { // (else if) es lo q suplanta al elif.
        return "Es impar"; 
    }
}
    
let resul = pares (83)
console.log(resul)

//---------------------------------

// Crear una función que reciba un texto y un número, y devuelva el texto repetido esa cantidad de veces.

function repetido (texto, veces) {
    return texto.repeat(veces);
}

let multipli = repetido("Hola, ", 3);
console.log(multipli);

//---------------------------------

// Crear una función que reciba dos números y devuelva el mayor.

function numeroMayor (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
    return "num1 es el mayor" }
    else if (num2 > num3) {
    return "num2 es el mayor"}
    else {
        return "num3 es el mayor";
    }
}

let nume = numeroMayor(450,100,650)
console.log(nume)

//---------------------------------

// Crear una función que reciba un número y devuelva su doble.

function elDoble (num1){
    return (num1 *2)
}

let doblando = elDoble(80)
console.log(doblando)

//---------------------------------

// Crear una función que reciba una palabra y devuelva cuántas letras tiene.

function letrasx (palabra){
    return palabra.length;
}

let letra = letrasx("!Hola Mundo¡")
console.log(letra)

//---------------------------------

// Crear una función que diga siempre "¡JavaScript es genial!"

function fija () {
    return "!Hola Mundo¡";
}

let pala = fija ("Hola¡")
console.log(pala)

//---------------------------------

// Crear una función que reciba tu edad actual y devuelva la edad que vas a tener el año que viene.

function edadActual (edad) {
    return (edad + 1)
}

let edade = edadActual (34)
console.log(edade)

//---------------------------------

//  Recibir base y altura, y devolver el área.

function baseXaltura (base, altura) {
    return ( (base * altura) / 2 )
}

let rectangulo = baseXaltura(5.23,10.01)
console.log(rectangulo)

//---------------------------------

// Unir dos palabras con un espacio entre ellas.

function unirPala (palabra1, palabra2){
    return (`${palabra1} ${palabra2}`)
}

let palas = unirPala("Gato", "perro")
console.log(palas)

//---------------------------------

// Función que convierta Celsius a Fahrenheit
// Fórmula: F = C * 1.8 + 32

function CelsiusAfahrenheit (celsius){
    return (`f = ${celsius * 1.8 + 32}`)
}

let CaF = CelsiusAfahrenheit (23.25)
console.log(CaF)

//---------------------------------

//  Función que verifique si un número es positivo

function numeroPositivo (numero) {
    if( numero > 0) {
        return "El numero es positivo" 
}   
    else if (numero < 0) {
        return "El numero es negativo"
    }

    else {
        return "El numero es ( Cero )"
}
}

let positiv = numeroPositivo(-58)
console.log(positiv)

//---------------------------------

// Función que diga si una persona puede votar
// Condición: debe tener 18 años o más.

function Puede_o_no_votar (edad) {
    if (edad >= 18) {
        return "Puede votar es mayor de edad."
}   else {
        return "No puede votar es menor"
} }
let puedesvotar = Puede_o_no_votar (17)
console.log(puedesvotar)

//---------------------------------

// Función que devuelva el triple de un número

function tripleDnumero (numero) {
    return ( numero * 3)
}

let triplon = tripleDnumero (40)
console.log(triplon)

//---------------------------------

// Función que devuelva si una letra es vocal

function letravocal (palabra){
    // Convierte la palabra a minúsculas para comparación sin distinción de mayúsculas/minúsculas | .toLowerCase() Convierte cualquier string a minúsculas.
    palabra = palabra.toLowerCase();
    // Verifica si la palabra está incluida en el string "aeiou" (vocales) | .includes() Verifica si un string contiene un carácter o substring.
    return "aeiou".includes(palabra);
}
let palabrita = letravocal("F")
console.log(palabrita)

//---------------------------------

/* Función que saluda con hora del día
Objetivo: Recibe un nombre y una hora (número) y devuelve un saludo como:

"Buenos días" si hora < 12

"Buenas tardes" si hora < 18

"Buenas noches" si hora ≥ 18 */

function horaYsaludo (nombre, hora) {
    if ( hora < 12){
        return `!Buenos días¡ ${nombre}`
}   else if ( hora < 18){
        return `!Buenas tardes¡ ${nombre}`
}   else{
        return `!Buenas  noches¡ ${nombre}`
}
}
let horasaludo = horaYsaludo ("Laura", 8.30)
console.log(horasaludo)

//---------------------------------
// EJERCICIOS POR CONSOLA CON PROMPT y ALERT.
// Estos solo salen en el htm con ventana emergente.
//---------------------------------

// Saludar al usuario

/* function saludarUsuario () {
    let nombre = prompt("Ìntroduce tu nombre aqui: ");
    alert(`Hola ${nombre}, ¿ como estas hoy ?`);
}

let nombres = saludarUsuario("miguel"); */

//---------------------------------

// Calcular la suma de dos números ingresados

/* function numerosingre () {
    let num1 = parseFloat(prompt("Introduce tu primer numero: "));
    let num2 = parseFloat(prompt("Introduce tu segundo numero: "));
    let suma = num1 + num2;
    alert(`La suma es ${suma}`)
}
let numerillos = numerosingre() */

//---------------------------------

//

let cadena = "!Hola Mundo¡";
console.log ( cadena [ cadena.length -4 ] )









































