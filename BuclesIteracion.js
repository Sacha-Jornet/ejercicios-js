// BUCLE/SENTENCIA WHILE

let numero = 0;

while (numero < 10) {
    numero++;
    console.log(numero);
}

// BUCLE/SENTENCIA DO WHILE

let numero1 = 0;

do {
    numero1++;
    console.log(numero1);
}

while (numero1 <= 6);

// BREAK (Corta con el bucle while si repite infinito true.)

let numero2 = 0;

while (numero2 < 1000) {
    numero2++;
    console.log(numero2);
    if (numero2 == 20) {
        break;
    }
}
console.log("fin")

// BUCLE/SENTENCIA FOR

let i = 0; // podemos redefinir el valor de i solo dentro del bloque. por fuera ya estara asignada y no se podra.

for (let i = 0; i < 6; i++) {
    console.log(i)
}

// COMPOSICION DE FORMACION:

// Declaracion e inicializacion
// condicion
// aumento - decremento


// OPCION 2:

for (let x = 6; x >= 0; x--) {
    console.log(x)
}

// OPCION 3:

let p = 6;
for (p; p >= 0; p--) {
    console.log(p)
}

// OPCION 4:

for (t = 0; t < 20; t++) {
    console.log(t)
    if (t == 12)
        break
}

// CONTINUE (Saltea datos.)

for (let a = 1; a <= 7; a++) {
    if (a == 3) {
        continue;
    }
    console.log(a)
}

// BUCLE/SENTENCIA FOR IN (Nos devuelve la posicion del contenido o elementos del array... si colocamos en el console.log(animales[animal] nos devolvera el contenido y ya no la posicion.))

let animales = ["gato", "perro", "cobaya"];

for (animal in animales) {
    console.log(animal)
};

// BUCLE/SENTENCIA FOR OF (Nos muestra el valor de cada elemento del array, se suele usar este para los elementos y el in para la posicion.)

for (animal of animales) {
    console.log(animal)
};


//  SENTENCIA LEBEL (Nos permite asociar cualqueir bucle a un nombre)

        array1 = ["maria", "florencia", "angelica"]
        array2 = ["pedro", "luis", array1, "jorge"]


        forRancio:
        for (let array in array2) {
            if (array == 2) {

                for (let array of array1) {
                    break forRancio;
                    console.log(array)
                }
            } else {
                console.log(array2[array])
            }
        }



























