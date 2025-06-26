
// 1 - Usa un bucle for para imprimir los números del 1 al 10 en la consola.

/* 
for ( let i= 1; i <= 10; i++) {
    document.write(`Numeros: ${i} <br>`);
};
*/


// 2 - Mostrar solo números pares del 2 al 20

/* for ( let i = 2; i <= 20; i++) {
    if (i % 2 == 0)
        document.write(i, "<br>")
}
 */

// ---------------------- 0 --------------------- //

/* 
3 - Sumar los primeros 100 números:

Consigna:
Usa un bucle for para sumar todos los números del 1 al 100 e imprimir el resultado.

Resultado esperado: 5050 

let suma = 0;

for (let i = 1; i <= 100; i++) {
    suma += i; // Internamente la suma se calcula asi (Suma = 100*101/2 = 5050).
};

document.write(`suma : ${suma}`); 

*/

// ---------------------- 0 --------------------- //

/*
Contar hacia atrás del 10 al 1
Consigna: Imprimir los números del 10 al 1, en orden descendente.
*/
/* 
for ( let i = 10; i >= 1; i--) {
    document.write(`numeros: ${i}`);
};
 */

// ---------------------- 0 --------------------- //

/* Tabla de multiplicar del 7
Consigna: Imprimir la tabla del 7 del 1 al 10. */

/* num = 0

for (let i = 1; i <= 10; i++) {
    num += i
    document.write(` 7 x ${i} = ${7 * i} <br>`);
};
 */

// ---------------------- 0 --------------------- //

/* 
Recorrer un array y mostrar sus elementos
Consigna: Imprimir cada elemento del siguiente array.
*/
/* 
const frutas = ["manzana", "banana", "pera", "naranja"];

for (let i = 0; i < frutas.length; i++) {
    document.write(`Frutas ${i+1}: ${frutas[i]} <br>`);
};
*/

// ---------------------- 0 --------------------- //

/* 
Mostrar solo nombres que empiecen con "M"
Consigna: Mostrar los nombres del array que empiezan con "M".
*/
/* 
const nombres = ["Martín", "Carlos", "Marta", "Luis", "Mariana"];

for (let i = 0; i < nombres.length; i++) {
    if ( nombres === "mM")
    document.write(`Nombres con M: ${nombres[i]}`);
};
 */

// ---------------------- 0 --------------------- //

/* 
Actividad 8: Calcular promedio de notas
Consigna: Calcular el promedio de las notas del array.
*/
/* 
const notas = [7, 8, 6, 10, 9];

let suma = 0;

for ( let i= 0; i < notas.length; i++) {
    (suma += notas[i]);
};

let promedio = suma / notas.length;
document.write(`Promedio de notas: ${promedio} <br>`)

 */

// ---------------------- 0 --------------------- //

/* 
Tablas de multiplicar del 1 al 5
Consigna: Imprimir todas las tablas de multiplicar del 1 al 5 (hasta x10).
*/

/* for (let i = 1; i <= 10; i++) {
    document.write(`Tabla del ${i} :<br> <br>`);
    for ( let x = 1; x <= 10; x++) {
        document.write(`${i} x ${x} = ${i * x} <br>`);
    }
    document.write(" <br>");
}
 */

// ---------------------- 0 --------------------- //

/* 
Dibujar una cuadrícula de asteriscos
Consigna: Usar bucles anidados para dibujar un cuadrado de 5x5 asteriscos.
*/

/* 
for (let i = 0; i < 5; i++) {
    let line = "";
    for (let x = 0; x < 5; x++) {
        line += "*";
    };
    document.write(line, "<br>");
};
*/

// ---------------------- 0 --------------------- //

/* 
Triángulo numérico creciente
Consigna: Mostrar este patrón:
*/

/* for (let i = 0; i < 5; i+=1) {
    triengulo = "";
    for (j = 0; j < 5; j+=1) {
triengulo = "";
    };
    document.write("");
} */

// ---------------------- 0 --------------------- //

/* 
Consigna: Usá un bucle for para imprimir los números del 1 al 5.
*/

/* for (let i = 1; i <= 5; i++){
    document.write(i)
} */


/* 
Consigna: Usá un bucle for para imprimir los números del 1 al 5.
*/


/* for (let i = 1; i <= 5; i++){
    document.write(i, "<br>")
} */

// ---------------------- 0 --------------------- //

/* 
Mostrar los números pares del 2 al 10
Consigna: Usá un bucle for para mostrar los números pares del 2 al 10 inclusive.
*/

/* for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0)
        document.write(i, "<br>");
} */

// ---------------------- 0 --------------------- //

/* 
Imprimir una cuenta regresiva del 5 al 1
Consigna: Usá un for para hacer una cuenta regresiva del 5 al 1.
*/

/* for (let i = 5; i >= 1; i--) {
    document.write(i, "<br>")
}
 */

// ---------------------- 0 --------------------- //

/* 
Mostrar los cuadrados del 1 al 5
Consigna: Usá un bucle para mostrar el cuadrado de los números del 1 al 5.
*/

/* for (let i = 1; i <= 5; i++) {
    document.write(i * 2)
}; */

// ---------------------- 0 --------------------- //

/* 
Mostrar cada letra de una palabra
Consigna: Usá un for para imprimir letra por letra la palabra "Hola".
*/

/* palabra = "Hola";
for (l = 0; l < palabra.length; l++){
    document.write(palabra[l], "<br>")
} */

// ---------------------- 0 --------------------- //

/* 
Sumar los primeros 10 números
Consigna: Usá un for para sumar del 1 al 10 y mostrar el total.
*/

/* 
let suma = 0;

for ( let i = 1; i <= 10; i++){
    suma += i;
}
document.write(`Suma: [ ${suma} ]. <br>`)
 */

// ---------------------- 0 --------------------- //

/* 
Tabla de multiplicar del 3
Consigna: Usá un bucle for para imprimir la tabla del 3 (del 3×1 al 3×10).
*/

/* for (let i = 1; i <= 10; i++){
    document.write(`3 x ${i} = ${3 * i} <br>`);
} */

// ---------------------- 0 --------------------- //

/* 
Imprimir una matriz 3x3 con for anidados
Consigna: Usá bucles for anidados para imprimir las coordenadas de una matriz 3x3 (filas y columnas).
*/

/* for (let fila = 1; fila <= 3; fila++){
    for (let columna = 1; columna < 3; columna++){
        document.write(`fila ${fila}, columna ${columna} <br>`)
    }
} */

// ---------------------- 0 --------------------- //

/* Recorrer un array de frutas
Consigna: Usá un for para recorrer el array de frutas y mostrar cada una.
 */

/* const frutas = ["Manzana", "Banana", "Pera", "Naranja"];

for (let i = 0; i < frutas.length; i++) {
    document.write(i)
} */

// ---------------------- 0 --------------------- //

/* 
Sumar números de un array
Consigna: Usá un for para sumar todos los valores de un array de números.
*/

/* const numeros = [4, 7, 1, 3];

let suma = 0;
for (i= 0; i < numeros.length; i++){
    suma += numeros[i]
}

document.write(suma) */

// ---------------------- 0 --------------------- //

/* 
Mostrar pares de un array
Consigna: Usá un for para mostrar solo los números pares del array [2, 5, 8, 9, 12, 15].

 */

/* 
let array = [2, 5, 8, 9, 12, 15];

for ( let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0)
        document.write(array[i], "<br>");
}
 */

// ---------------------- 0 --------------------- //

/* 
Generar patrón de asteriscos con for anidado
Consigna: Usá for anidado para imprimir este patrón:
*/

/* 

*
* *
* * *
* * * *

*/

/* for (let i = 1; i <= 4; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += "* ";
    }
    document.write(linea.trim(), "<br>")
}
 */

// ---------------------- 0 --------------------- //

/* 
Contar cuántos elementos son mayores a 10
Consigna: Usá un for para recorrer un array de números y contar cuántos son mayores a 10.
*/

/* const numeros = [5, 12, 8, 20, 3, 15];

let contador = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        contador++;
    }
}
document.write("Cantidad mayores a 10:", contador); */

// ---------------------- 0 --------------------- //

/* 
Mostrar índice y valor de un array
Consigna: Usá un for para mostrar la posición y el valor de cada elemento del array ["Rojo", "Verde", "Azul"].
*/

/* 
const colores = ["Rojo", "Verde", "Azul"];

for (let i = 0; i < colores.length; i++){
    document.write(`Índice ${i}: '${colores[i]}' <br>`)
}
*/

// ---------------------- 0 --------------------- //

/* 
Duplicar valores de un array
Consigna: Usá un for para crear un nuevo array con los valores duplicados del array original.


const numeros = [2, 4, 6];

let duplicados = [];

for (let i = 0; i < numeros.length; i++) {
duplicados.push(numeros[i] * 2)
}
document.write("Array duplicado:", duplicados)
*/

// ---------------------- 0 --------------------- //


        /* 
        Buscar un valor específico
        Consigna: Usá un for para saber si el número 9 está en el array [3, 7, 9, 2].
        

        const numeros = [3, 7, 9, 2];

        let encontrado = false;

        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] === 9) {
                encontrado = true;
                break;
            }
        }

        document.write("¿El número 9 está? ", encontrado );
*/

// ---------------------- 0 --------------------- //

/* 
Generar una tabla de multiplicar del 1 al 3
Consigna: Usá for anidados para imprimir las tablas del 1 al 3 (hasta el 1x5, 2x5, etc.)


for (let i = 1; i <= 3; i++){
    document.write(`Tabla del ${i}<br> `);
    for (let j = 1; j <= 10; j++){
document.write(`${i} x ${j} = ${ i * j } <br>`);
    }
    document.write("<br>-----<br> ")
};
*/

// ---------------------- 0 --------------------- //

/*
Imprimir números impares del 1 al 20
Objetivo: Practicar bucle for con condición if para seleccionar elementos.

Consigna: Utilizá un bucle for para mostrar en consola los números impares del 1 al 20.


for ( let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
    document.write(`El numero ${i} es impar. <br>`)
    }
};

*/

// ---------------------- 0 --------------------- //

/* 
Tabla de multiplicar (FOR anidado)
Objetivo: Usar bucles anidados para mostrar múltiples cálculos.

Consigna: Generá las tablas de multiplicar del 1 al 5. Mostrá los resultados del 1 al 10 para cada número.


for (let i = 1; i <= 10; i++){
    document.write(`<br> Tabla de multiplicar del ${i} :<br><br>`)
    for (let j = 1; j <= 10; j++){
        document.write(`${i} X ${j} = ${i * j} <br>`)
    }
}

*/

// ---------------------- 0 --------------------- //

/* 
Recorrer array y mostrar pares
Objetivo: Combinar arrays con bucle for + lógica condicional.

Consigna: Dado el array numeros, mostrarlos por consola sólo si son pares.


const numeros = [12, 7, 9, 18, 21, 28, 33];

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0) {
        document.write(`- Los numeros PARES son: [${numeros[i]}] <br>`)
    }
}

*/

// ---------------------- 0 --------------------- //




















































































































































































































































































































































































































































