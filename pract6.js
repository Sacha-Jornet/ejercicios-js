
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

/* 
Array anidado (menú de comidas por día)
Objetivo: Practicar bucle anidado con arrays bidimensionales.

Consigna: Mostrá los platos por día de la semana. Usá dos bucles: uno para los días y otro para los platos.

const menu = [
            ["Lunes", "Milanesa", "Puré"],
            ["Martes", "Pastas", "Salsa Bolognesa"],
            ["Miércoles", "Pizza", "Ensalada"],
            ["Jueves", "Empanadas", "Fideos"],
            ["Viernes", "Hamburguesa", "Papas Fritas"]
        ];

        for (let i = 0; i < menu.length; i++) {
            document.write(`<br><b> El menu del dia:</b> ${menu[i][0]} <br>`)
            for (let j = 1; j < menu[i].length; j++) {
                document.write(`<b>Plato:</b> ${menu[i][j]} <br>`)
            }

        };

*/

// ---------------------- 0 --------------------- //

/* 
Contar cuántos positivos hay en un array
Objetivo: Bucle for con contador personalizado.

Consigna: Contar cuántos números positivos hay en el siguiente array.


const datos = [-3, 7, 0, -1, 5, 2, -8];

for (let i = 0; i < datos.length; i++){
    if (datos[i] > 0 ){
        document.write("<b> Numeros positivos :</b> ", `( ${datos[i]} ) .`, "<br>")
    }
}
    
*/

// ---------------------- 0 --------------------- //

/* Matriz numérica de 3x3
        Objetivo: Construir matriz usando for anidado.
        
        Consigna: Mostrá en consola una matriz de 3x3 con los números del 1 al 9.
        

        let contador = 1;
        for (let f = 0; f < 3; f++) {
            let linea = "";
            for (let c = 0; c < 3; c++) {
                linea += contador + "";
                contador++;
            }
            document.write(linea.trim(), "<br>");
        }
*/

// ---------------------- 0 --------------------- //

/* 
        Sumar todos los elementos de un array anidado
        Objetivo: Recorrer arrays bidimensionales y acumular una suma.
        
        Consigna: Sumá todos los números de la siguiente matriz numeros.
        

        const numeros = [
            [2, 4, 6],
            [1, 3, 5],
            [7, 8, 9]
        ];

        let suma = 0;

        for (let f = 0; f < numeros.length; f++) {
            for (let c = 0; c < numeros[f].length; c++) {
                suma += numeros[f][c];
            }
        }
        document.write(`Suma total: ${suma}`)

*/

// ---------------------- 0 --------------------- //

/* 
Buscar el mayor número de un array
Objetivo: Recorrer array y usar una variable para guardar el valor más alto.

Consigna: Encontrá el número más grande del siguiente array valores.


const valores = [14, 3, 22, 9, 41, 7, 30];

let valorAlto = valores[0];

for ( i = 1; i < valores.length; i++){
    if (valores[i] > valorAlto){
        valorAlto = valores[i];

    }
}
document.write(`Máximo valor: ${valorAlto}`);
*/

// ---------------------- 0 --------------------- //

        /* 
        Buscar el menor número de un array
        Objetivo: Reutilizar la lógica anterior para hallar el mínimo.
        
        Consigna: Encontrá el número más chico del siguiente array valores.
        

        const valores = [14, 3, 22, 9, 41, 7, 30];

        let minimoValor = valores[0];

        for (let i = 1; i < valores.length; i++) {
            if (valores[i] < minimoValor) {
                minimoValor = valores[i]; // si el proceso anterior da true de que x numero es menor q x numero aqui hace q dentro de minimovalor se remplace o se remplacen los numeros en el interior de la variable hasta quedar con el numero minimo del array.

                valorAlto = valores[i]:
                - Si la condición es true, actualiza valorAlto con el nuevo número más grande.
                - Siguiendo el ejemplo: Ahora valorAlto valdrá 7. 
            }
        }
        document.write(`Mínimo valor: ${minimoValor}`);

*/

// ---------------------- 0 --------------------- //

/* 
        Suma por filas en array anidado
        Objetivo: Usar bucles anidados para sumar por separado cada fila.
        
        Consigna: Mostrá la suma de cada fila del siguiente array.
        

        const matriz = [
            [3, 5, 2],
            [10, 4, 1],
            [6, 6, 6]
        ];

        for (let f = 0; f < matriz.length; f++) {
            let sumaTotal = 0;
            for (let c = 0; c < matriz[f].length; c++) {
                sumaTotal += matriz[f][c];

            }
            document.write(`Suma de la fila: ${f + 1} : ${sumaTotal} <br>`) // el mas uno {f +1} corre la salida de 0 a 1 haciendo... Explicación sencilla:

- En programación, los índices de arrays empiezan en 0 (fila 0, fila 1, fila 2...).
- Pero al mostrar información al usuario, es más común empezar en 1 (fila 1, fila 2, fila 3...).
- Si f = 0 → f + 1 muestra "Fila 1" (en lugar de "Fila 0").
- Si f = 1 → f + 1 muestra "Fila 2", y así sucesivamente.

¿Por qué no usar f directamente?

- Porque sería confuso para el usuario final:
- Con f (índice base 0): "Fila 0", "Fila 1"... (raro para no programadores).
- Con f + 1 (base 1): "Fila 1", "Fila 2"... (formato natural).

        }
*/

// ---------------------- 0 --------------------- //

/* Dado un array de números, usá un bucle for para sumar todos los elementos y mostrar el resultado total. 

let suma = 0;
const numeros = [5, 8, 3, 10, 2];
for ( let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
document.write(`Suma total: ${suma}`)
*/

// ---------------------- 0 --------------------- //

/*
        Buscar el número mayor en un array
        Consigna:
        Recorrer un array con un for y encontrar el valor más alto.
        

        const numeros = [45, 12, 78, 34, 89, 23];

        let maximo = numeros[0];

        for (let i = 1; i < numeros.length; i++) {
            if (numeros[i] > maximo) {
                maximo = numeros[i]

            }
        }

        document.write(`maximo: ${maximo}`)

*/

// ---------------------- 0 --------------------- //

        /*
        Imprimir todos los elementos de una matriz (for anidado)
        Consigna:
        Dada una matriz de números, imprimir todos los elementos, fila por fila.

        const matriz = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        for (let fila = 0; fila < matriz.length; fila++) {
            for (let columna = 0; columna < matriz[fila].length; columna++) {
                document.write(`Elemento en [${fila}][${columna}]:`, matriz[fila][columna], "<br>");
            }
        };
*/

// ---------------------- 0 --------------------- //

        /* Sumar cada fila de una matriz
        Consigna:
        Dada una matriz, calcular y mostrar la suma de cada fila. 

        const matriz = [
            [3, 5, 2],
            [1, 7, 4],
            [6, 0, 8]
        ];

for (let fila = 0; fila < matriz.length; fila++){
    let suma = 0;
    for (let col = 0; col < matriz[fila].length; col++){
        suma += matriz[fila][col];

    }
    document.write(`Suma de fila ${fila}: `, suma, "<br>");
}
;

// ---------------------- 0 --------------------- //

        /* 
        Crear tabla de multiplicar del 1 al 5 (for anidado)
        Consigna:
        Generar e imprimir las tablas de multiplicar del 1 al 5, usando bucles anidados.
        

        document.write(`<br>-----------<br><br>`)
        for (let i = 1; i <= 10; i++) {
            document.write(`Tabla del <b>(${i})</b> <br><br>`)
            for (let j = 1; j <= 10; j++) {
                document.write(`${i} X ${j} = <b>${i * j}</b> <br>`)
            }
            document.write(`<br>-----------<br><br>`)
        };
*/

// ---------------------- 0 --------------------- //


/*
        Reemplazar números pares por 0 en un array
        Consigna:
        Recorrer un array y reemplazar los números pares por 0. Mostrar el nuevo array.
        
        
        const numeros = [4, 7, 9, 2, 10, 3];
        
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 === 0) {
                numeros[i] = 0;
        
        
            }
        }
        
        document.write("Array modificado:", numeros);
        
        */

// ---------------------- 0 --------------------- //

// BUCLE WHILE

/* 
let i = 0;

while (i <= 5 ){
document.write(`variable i : ${i} <br> `);
i++
}
*/

// ---------------------- 0 --------------------- //

/*
Contar del 1 al 10 con while
Consigna:
Usá un bucle while para imprimir los números del 1 al 10.


let i =  0;
while ( i <= 10) {
    document.write(`El numero es : ${i} <br>`);
    i++
};

*/

// ---------------------- 0 --------------------- //

/*
Sumar números hasta llegar (o superar) 100
Consigna:
Dado un array de números, sumalos uno a uno usando while hasta que la suma llegue o supere 100. Mostrá el resultado final.

const numeros = [15, 20, 10, 30, 25, 5, 10];

let i = 0;
let suma = 0;

while ( i < numeros.length && suma < 100 ) {
suma += numeros[i];
i++;
}
document.write(`suma : ${suma}`);
*/

// ---------------------- 0 --------------------- //

        /*
        Validar contraseña con intento limitado
        Consigna:
        Simular un sistema de login. Mientras el usuario no escriba la contraseña correcta ("jarvis123") y tenga intentos disponibles (máximo 3), seguir pidiendo que ingrese la contraseña.
        


        let contraseña = "";
        let correcta = "jarvis123"
        let intentos = 0;

        while (intentos < 3 && contraseña !== correcta) {
            contraseña = prompt(`ingrese su contraseña:`);
            intentos++;
        }

        if (contraseña === correcta) {
            document.write(`Contraseña correcta... INGRESANDO..`);
        } else {
            document.write(`Contraseña incorrecta`)
        }
*/

// ---------------------- 0 --------------------- //

 /* Buscar un número en un array con while
        Consigna:
        Dado un número objetivo, buscá si está presente en un array usando while. Si se encuentra, mostrar su posición. Si no, indicar que no existe. 

        const numeros = [11, 23, 45, 67, 89];
        const objetivo = 45;

        let i = 0;
        let encontrado = false;

        while (i < numeros.length) {
            if (numeros[i] === objetivo) {
                encontrado = true;
                break;
            }
            i++;
        }

        if (encontrado) {
            document.write(`Número ${objetivo} encontrado en la posición ${i} <br>`)
        } else {
            document.write(`Número ${objetivo} no encontrado en el array <br>`);
        };
*/

// ---------------------- 0 --------------------- //

        /* 
        Contar cuántos números son pares en un array
        Consigna:
        Usá un while para contar cuántos elementos pares hay en un array de números. 
        

        const numeros = [2, 7, 4, 9, 6, 3, 8];
        let contador = 0;
        let i = 0;
        let pares = 0;

        while (i < numeros.length) {
            if (numeros[i] % 2 === 0) {
                pares++;

            }
            i++;
        }

        document.write(`Cantidad de números pares:", ${pares}`);
*/

// ---------------------- 0 --------------------- //

/*
Crear cuenta regresiva desde un número dado
Consigna:
Dado un número inicial, crear una cuenta regresiva con while hasta llegar a 0.


let inicial = 10;

while (inicial >= 0) {
    document.write(inicial, "<br>");
    inicial--;
}

*/

// ---------------------- 0 --------------------- //

        /*
        Repetir ingreso hasta que escriba “salir”
        Consigna:
        Usá un while para pedir al usuario un texto. El ciclo termina solo si el usuario escribe "salir".
 

        let ingresos = "";

        while (ingresos !== "salir") {
            ingresos = prompt("Escribí algo (o 'salir' para terminar):");
            document.write(`Ingresaste: ", <br> ${ingresos}`);

        }

 */

// ---------------------- 0 --------------------- //

        /*
        Buscar la primera palabra larga (más de 6 letras)
        Consigna:
        Dado un array de palabras, encontrá la primera palabra que tenga más de 6 caracteres usando while.
        

        const palabras = ["sol", "luna", "maravilla", "cielo", "estrella"];

        let p = 0;
        let encontrado = null;

        while (p < palabras.length) {
            if (palabras[p].length > 6) {
                encontrado = palabras[p];
                break;
            }
            p++;
        }

        if (encontrado) {
            document.write("Primera palabra larga encontrada: <b>", encontrado);
        } else {
            document.write("No hay palabras largas");
        }

*/

// ---------------------- 0 --------------------- //

/*
Sumar los primeros 20 números naturales
Consigna:
Utilizá un bucle for para sumar del 1 al 20 e imprimir el resultado final.


let sumaTotal = 0;

for (let i = 1; i <= 20; i++) {
sumaTotal += i;
};
document.write(`Suma Total: <b>${sumaTotal}</b> <br>`);
*/

// ---------------------- 0 --------------------- //

/*
Mostrar números pares del 2 al 20
Consigna:
Imprimí todos los números pares entre 2 y 20 usando for.



for (let i = 2; i <= 20; i++) {
if ( i % 2 === 0){

document.write(`Numeros pares: <b>${i}</b> <br>`)
}

}

*/

// ---------------------- 0 --------------------- //

        /*
         Recorrer un array de arrays (matriz)
        Consigna:
        Mostrá todos los elementos de una matriz 2x3 utilizando for anidado.
      

        const matriz = [
            [1, 2, 3],
            [4, 5, 6]
        ];

for ( let fila = 0; fila < matriz.length; fila++) {
    for (let col = 0; col < matriz[fila].length; col++) {
        document.write(`${matriz[fila][col]} <br>`);
    }
};

  */

// ---------------------- 0 --------------------- //

        /* 
        Sumar todos los números de una matriz
        Consigna:
        Sumá todos los valores de una matriz de números.
    
        const numeros = [
            [5, 3],
            [2, 8],
            [1, 4]
        ];

        let sumaTotal = 0;

        for (let i = 0; i < numeros.length; i++) {
            for (let j = 0; j < numeros[i].length; j++) {
                sumaTotal += numeros[i][j]
}
        }

        document.write(`Suma Total : ${sumaTotal} `);
    */

// ---------------------- 0 --------------------- //

        /* 
        Buscar un valor en una matriz
        Consigna:
        Verificá si un número específico existe en una matriz.
        

        const matriz = [
            [10, 20],
            [30, 40],
            [50, 60]
        ];

        let valor = 50;
        let encontrado = false;

        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] === valor) {
                    encontrado = true;

                }
            }
        }

        document.write("¿Número encontrado?:", encontrado)
*/

// ---------------------- 0 --------------------- //

/* 
Contar del 1 al 10
Consigna:
Usá un while para imprimir los números del 1 al 10.

let i = 1;
while (i <= 10) {
document.write(i, "<br>");
i++;
}
*/

// ---------------------- 0 --------------------- //

// git push -u origin main 

// ---------------------- 0 --------------------- //

/*
Pedir contraseñas hasta acertar
Consigna:
Simulá un sistema que pida una contraseña hasta que el usuario ingrese la correcta (simulado con prompt).

const contraseña = "coballa";
let intentos = "";
let intentosFallidos = [];

while (intentos !== contraseña ) {
    intentos = prompt(`Ingrese su contraseña: `)
    intentosFallidos += intentos + "<br>";
}
document.write(`Contraseña correcta...CARGANDO....`);
document.write(`<br> tus intentos : <br>${"<br>",intentosFallidos}`);
*/

// ---------------------- 0 --------------------- //

        /* 
        Contar con condición de corte
        Consigna:
        Sumar números hasta que la suma acumulada supere 100.
        

        let suma = 0;
        let contador = 0;

        while (suma <= 100) {
            suma += 15;
            contador++;

        }

        document.write("Cantidad de sumas:", contador, "<br>");
        document.write("Suma final:", suma);
*/

// ---------------------- 0 --------------------- //

/*
Sumar todos los elementos de un array
Objetivo: Recorre un array de números con un for y suma todos sus elementos.

let suma = 0;
const numeros = [3, 7, 2, 9, 5];
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]
};
document.write("Suma total: ", suma, "<br>")
*/

// ---------------------- 0 --------------------- //

        /*
        Imprimir los elementos de una matriz (array de arrays)
        Objetivo: Usar bucles for anidados para imprimir todos los valores de una matriz.
        
        const matriz = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

for ( let fila = 0; fila < matriz.length; fila++) {
    for (col = 0; col < matriz[fila].length; col++) {
        document.write(`Elemento <b>[${fila}][${col}]</b>: `, "<b>", matriz[fila][col], "</b>", "<br>")
    }
}
*/

// ---------------------- 0 --------------------- //

/*
Contar cuántos números son pares en un array
Objetivo: Usar un bucle for para contar cuántos números del array son pares.

const lista = [4, 7, 10, 15, 22, 9, 6];

let contador = 0;

for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
contador++;
}
}
document.write(`Pares: ${contador} <br>`)
*/

// ---------------------- 0 --------------------- //

 /* 
        Buscar un número en una matriz
        Objetivo: Usar bucles anidados para buscar un número en una matriz. Mostrar si se encuentra o no.
        

        const matriz = [
            [3, 5, 7],
            [1, 9, 0],
            [4, 6, 8]
        ];

        let numeroBuscado = 9;
        let encontrado = false;

        for (let fila = 0; fila < matriz.length; fila++) {
            for (let col = 0; col < matriz[fila].length; col++) {
                if (matriz[fila][col] === numeroBuscado) {
                    encontrado = true;
                    document.write(`Número ${numeroBuscado} encontrado en [${fila}][${col}] <br>`);
                }
            }
        }

        if (!encontrado) {
            document.write(`Número ${numeroBuscado} no encontrado`);
        };

*/

// ---------------------- 0 --------------------- //

/*
Contador descendente con bucle while
Objetivo: Usar un bucle while para mostrar un contador que va de 10 a 1.

let contador = 10;

while (contador >= 1) {
    document.write(`contador : ${contador} <br>`)
contador--;
}
*/

// ---------------------- 0 --------------------- //

/*
Sumar elementos de un array usando while
Objetivo: Usar while en lugar de for para recorrer un array y sumar sus elementos.

const numeros = [3, 6, 2, 8, 5];

let sumaTotal = 0;
let num = 0;

while (num < numeros.length) {
    sumaTotal += numeros[num]
num++;
}
document.write(`suma : ${sumaTotal} <br>`)
*/

// ---------------------- 0 --------------------- //

       /*
        Buscar nombre en array con bucle while
        Objetivo: Buscar un nombre dentro de un array usando while. Detener si se encuentra.
        

        const nombres = ["Ana", "Luis", "Carlos", "Valeria", "Pablo"];
        let buscar = "Pablo";

        let nom = 0;
        let encontrado = false;

        while (nom < nombres.length && !encontrado) {
            if (nombres[nom] === buscar) {
                encontrado = true;
                
                document.write(`${buscar} fue encontrado en la posición  ${nom}`);
            }
            nom++;
        }
        if (!encontrado) {
            document.write(`${buscar} no se encontró`);
        }

*/

// ---------------------- 0 --------------------- //

/*
Multiplicar todos los elementos de un array
Objetivo: Multiplicar todos los elementos de un array usando un bucle for.


const numeros = [2, 4, 3];

let producto = 1;

for ( let i = 0; i < numeros.length; i++){

    producto *= numeros[i];
}
document.write ("Producto total:", producto);

*/

// ---------------------- 0 --------------------- //

        /*
        Mostrar elementos en diagonal de una matriz
        Objetivo: Usar un solo for para recorrer la diagonal principal de una matriz cuadrada.
        

        const matriz = [
            [5, 1, 2],
            [3, 9, 4],
            [7, 6, 8]
        ];

for (let i = 0; i < matriz.length; i++) {
    document.write(`Diagonal [${i}][${i}]: `, matriz[i][i], "<br>");
}
*/

// ---------------------- 0 --------------------- //

/*
Imprimir array al revés
Objetivo: Imprimir los elementos de un array de atrás hacia adelante con un for.
*/

const nombres = ["Mario", "Lucía", "Ana", "Pedro"];

for (let i = nombres.length -1; i >= 0;  i--) {
    document.write("Nombre:", nombres[i], "<br>")
}


























































































































































































































































































