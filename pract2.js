// 3 chicos entran a una heladeria a comprar un helado pero hay un problema: Los precios no estan al lado de cada producto con su respectivo helado. ellos quieren comprar el helado mas caro que puedan con la plata que tienen, asi que... veamos como podemos ayudarlos.


// ROBERTO : $ 1.5
// PEDRO : $ 1.7
// COFLA : $ 3

// lOS PRECIOS DE LOS HJELADOS :

/* 
Palito de helado de agua: $ 0.6
Palito de helado de crema: $ 1
Bombon helado heladix: $ 1.6
bombon helado heladovich: $ 1.7
bombon helado helardo: $ 1.8
Pote de helado con confites: $ 2.9
Pote de 1/4 KG: $ 2.9
 */

// Crear Soluciones:

// 1- Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro que puedan comprar.

// 2- Si hay 2 o mas con el mismo precio, mostrar ambos.

// 3- Cofla quiere saber cuanto es el vuelto.

//-----------------------------------------//



// Variables de los helados.

palitoAgua = 0.6
palitoCrema = 1
bombonHeladix = 1.6
bombonHeladovich = 1.7
bombonHelardo = 1.8
poteConfites = 2.9
poteKg = 2.9

let cofla = prompt("Cofla ingresa el monto que tienes disponible: ");
let pedro = prompt("Pedro ingresa el monto que tienes disponible: ");
let roberto = prompt("Roberto ingresa el monto que tienes disponible: ");


//  Cofla

if (cofla >= 0.6 && cofla < 1) {
    alert("Helado de agua.");
    alert(`Y te sobra ${cofla - 0.6}`);
}
else if (cofla >= 1 && cofla < 1.6) {
    alert("Helado palito de Crema.");
    alert(`Y te sobra ${cofla - 1}`);
}
else if (cofla >= 1.6 && cofla < 1.7) {
    alert("Helado Heladix.");
    alert(`Y te sobra ${cofla - 1.6}`);
}
else if (cofla >= 1.7 && cofla < 1.8) {
    alert("Helado Heladovich.");
    alert(`Y te sobra ${cofla - 1.7}`);
}
else if (cofla >= 1.8 && cofla < 2.9) {
    alert("Helado helardo.");
    alert(`Y te sobra ${cofla - 1.8}`);
}
else if (cofla >= 2.9) {
    alert("Helado con confites o helado de 1/4 Kg.");
    alert(`Y te sobra ${cofla - 2.9}`);
}
else {
    alert("No puedes comprar nigun Helado.");
}


// PEDRO

if (pedro >= 0.6 && pedro < 1) {
    alert("Helado de agua.");
}
else if (pedro >= 1 && pedro < 1.6) {
    alert("Helado palito de Crema.");
}
else if (pedro >= 1.6 && pedro < 1.7) {
    alert("Helado Heladix.");
}
else if (pedro >= 1.7 && pedro < 1.8) {
    alert("Helado Heladovich.");
}
else if (pedro >= 1.8 && pedro < 2.9) {
    alert("Helado helardo.");
}
else if (pedro >= 2.9) {
    alert("Helado con confites o helado de 1/4 Kg.");
}
else {
    alert("No puedes comprar nigun Helado.")
}


// ROBERTO

if (roberto >= 0.6 && roberto < 1) {
    alert("Helado de agua.");
}
else if (roberto >= 1 && roberto < 1.6) {
    alert("Helado palito de Crema.");
}
else if (roberto >= 1.6 && roberto < 1.7) {
    alert("Helado Heladix.");
}
else if (roberto >= 1.7 && roberto < 1.8) {
    alert("Helado Heladovich.");
}
else if (roberto >= 1.8 && roberto < 2.9) {
    alert("Helado helardo.");
}
else if (roberto >= 2.9) {
    alert("Helado con confites o helado de 1/4 Kg.");
}
else {
    alert("No puedes comprar nigun Helado.")
}

