// PRACTICAS DEL LENGUAJE EN GRAL:

//Declará dos variables a = 5 y b = 3. Mostrá la suma, resta, multiplicación y división de ambas.

a = 5
b = 3

const suma = (a + b);
console.log(suma);

const resta = (a - b);
console.log(resta);

const multiplicacion = (a * b);
console.log(multiplicacion);

const division = (a / b);
console.log(division);


// Pedile al usuario su nombre y saludalo con un alert() que diga "Hola, [nombre]".

/* const nombre = prompt("Ingrese su nombre: ");
alert(`Buen dia señor ${nombre} espero tenga muy buen dia hoy.`) */


// Pedile dos números al usuario y decile si el primero es mayor, menor o igual al segundo.

/* const num1 = parseInt(prompt("Ingrese su primer numero: "));
const num2 = parseInt(prompt("Ingrese su segundo numero: "));

if (num1 > num2) {
    alert(`${num1} es mayor a ${num2}`);
} else if (num1 < num2) {
    alert(`${num2} es mayor a ${num1}`);
} else {
    alert(`El ${num1} es igual a ${num2}`);
}; */

// Creá una variable contador = 10. Incrementala y decrementala usando los operadores ++ y --.

let contador = 10

console.log("incremento: ", ++contador)
console.log("Decremento: ", --contador)
console.log("Decremento: ", --contador)
console.log("Decremento: ", --contador)
console.log("incremento: ", ++contador)

// Creá un array con 3 frutas. Mostrá la primera fruta con console.log().

let frutas = ["manzana", "banana", "pera"];
console.log("Primer fruta: ", frutas[0])
console.log("Segunda fruta: ", frutas[1])
console.log("Tercer fruta: ", frutas[2])

// Mostrá los números del 1 al 5 usando un for.

for (let n = 0; n <= 5; n++) {
    console.log(n);
}

// Concatená dos strings y mostralos: Hola y Mundo.

let saludo = "!Hola"
let causa = "Mundo¡"

console.log(saludo + " " + causa)
console.log(`${saludo} ${causa}`)

// Creá una función que reciba un nombre y devuelva un saludo.

/* function saludo(nombre) {
    return(`Hola ${nombre}, como estas?`);
}

let saluda = saludo("juan");
document.write(saluda); */

// Pedile al usuario su edad. Si tiene 18 o más, mostrá un mensaje que diga "Sos mayor de edad". Si no, mostrá "Sos menor de edad".

const edad = parseInt("Ingrese su edad aqui: ")
if (edad >= 18) {
    // alert("Es mayor de edad.")
} else {
    // alert("Usted no es mayor de edad.")
}


// Bucle for básico (números del 1 al 5)

for (s = 1; s < 6; s++) {
    console.log(s)
}

// Bucle while (números del 1 al 5)

let x = 1;
while (x <= 5) {
    console.log(x);
    x++
}

// Flechas horizontales (→) con for

let flecha = ""
for (let i = 1; i <= 5; i++) {
    flecha += "->";
}
console.log(flecha)

// Bucle for con números pares del 2 al 10

for (let d = 2; d <= 10; d += 2) {
    console.log(d)
}

// Bucle while con cuenta regresiva (del 5 al 1)

let k = 5

while (k > 0) {
    console.log(k)
    --k
}

// Bucle con suma acumulada

let sumando = 0;
for (let f = 1; f <= 5; f++) {
    sumando += f;
}
console.log("Suma total:", sumando);

// Bucle que repite una palabra
// Repetí la palabra "Hola" 3 veces en consola.

for (let p = 1; p <= 3; p++) {
    console.log("hola")
}

// Contar del 1 al 3

for (let z = 1; z <= 3; z++) {
    console.log(z)
}

// Mostrar 5 veces "Hola"

for (let l = 1; l <= 5; l++) {
    console.log("hola")
}

// Números pares del 2 al 10

for (let p = 2; p <= 10; p += 2) {
    console.log(p)
}

// Cuenta regresiva del 5 al 1

for (let t = 5; t >= 0; t--) {
    console.log(t)
}

// Mostrar asteriscos en una fila

let fila = "";
for (let s = 1; s <= 5; s++) {
    fila += "*"
}
console.log(fila);

// Triángulo de asteriscos

let triangulo = "";
for (let d = 1; d <= 4; d++) {
    triangulo += "*"
    console.log(triangulo);
}

// Mostrar letras una por una

let palabra = "Hola Mundo"
for (let l = 0; l <= palabra.length; l++) {
    console.log(palabra[l]);
}

// Sumar números del 1 al 4

let sumar = 0;
for (let s = 1; s <= 4; s++) {
    sumar += s;
}
console.log(sumar);

// Bucle while del 1 al 3

let g = 0;
while (g <= 6) {
    console.log(g)
    g++;
}

// Contar del 0 al 4 con paso de 1

for (let g = 0; g <= 4; g++) {
    console.log("Contando:", g)
}

// Números pares o impares

for (let n = 1; n <= 5; n++) {
    if (n % 2 == 0) {
        console.log(`El numero ${n} es par`);
    } else {
        console.log(`El numero ${n} es impar`);
    }
}

// Clasificar edades

let edades = [8, 13, 20, 45];

for (let t = 0; t < edades.length; t++) {
    let edad = edades[t];
    if (edad >= 40) {
        console.log(`sos bastante adulto con ${edad}`)
    } else if (edad >= 18) {
        console.log(`sos mayor de edad con ${edad}`)
    } else {
        console.log(`Sos menor de edad con ${edad}`)
    }
}

// Calificaciones con letras

let notas = [10, 7, 4, 2];

for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];
    if (nota == 10) {
        console.log(`Estas aprobado con la nota mas alta ${nota} felicidades.`);
    } else if (nota >= 7)
        console.log(`Estas aprobado ${nota} felicidades.`);
    else {
        console.log(`Estas desaprovado con ${nota} deberas recuperar la amteria.`);
    }
}

// Mostrar según múltiplos

for (let m = 1; m <= 10; m++) {
    if (m % 3 == 0 && m % 5 == 0) {
        console.log(m, ": Múltiplo de 3 y 5");
    } else if (m % 3 == 0) {
        console.log(m, ": Múltiplo de 3");
    } else if (m % 5 == 0) {
        console.log(m, ": Múltiplo de 5");
    } else {
        console.log(m);
    }
}

//  Clasificar temperaturas

let temperaturas = [5, 15, 30];

for (let t = 0; t < temperaturas.length; t++) {
    let temp = temperaturas[t];
    if (temp < 10) {
        console.log(temp + "°C: Frio")
    } else if (temp <= 25) {
        console.log(temp + "°C: Templado")
    } else {
        console.log(temp + "°C: Calor")
    }
}

// Dado un array de temperaturas, crea una función llamada clasificarTemperaturas() que recorra el array y clasifique cada temperatura como Frío (<10°C), Templado (10–25°C) o Calor (>25°C), y lo imprima en consola.

function clasificarTemperaturas() {
    let temperaturas = [5, 15, 30];

    for (let t = 0; t < temperaturas.length; t++) {
        let temp = temperaturas[t];
        if (temp < 10) {

            console.log(temp + "°C: Frio");
        } else if (temp <= 25) {

            console.log(temp + "°C: Templado");
        } else {

            console.log(temp + "°C: Calor");
        }
    }
}

clasificarTemperaturas();


// Crea una función clasificarEdades() que recorra un array de edades y clasifique cada persona como:

// Menor de edad (<18)

// Adulto (18–64)

// Jubilado (65 o más)

function clasificaredades() { // Creamos la funcion.
    let edades = [12, 25, 30, 60, 75, 10]; // creamos el array.

    for (let e = 0; e < edades.length; e++) {
        let edad = edades[e];
        if (edad >= 55) {
            console.log(`Sos un adulto mayor con ${edad} y tienes descuento.`);
        } else if (edad >= 18) {
            console.log(`Sos mayor de edad ${edad} podes continuar`);
        } else {
            console.log(`Es menor de edad ${edad} y tiene proibido continuar`);
        }

    }
}

clasificaredades()


// Crea una función mostrarNivelesBateria() que recorra un array con niveles de batería (porcentaje) y muestre:

// "Batería baja" si es menor al 20%

// "Nivel adecuado" entre 20% y 80%

// "Batería llena" si es más del 80%

function mostrarNivelDeBateria() {
    let niveles = [10, 45, 90];

    for (let n = 0; n < niveles.length; n++) {
        let nivel = niveles[n];
        if (nivel >= 89) {
            console.log(`Su bateria esta en ${nivel} esta en un nivel optimo.`)
        } else if (nivel >= 30) {
            console.log(`Su bateria se encuentra en una carga baja ${nivel}`)
        } else {
            console.log(`Su bateria se encuentra muy baja podria presentar problemas ${nivel}`)
        }
    }
}
mostrarNivelDeBateria()

// Crea una función clasificarNumeros() que recorra un array de números y diga si cada número es par o impar.

function clasificandoPareseInpares() {
    let numeros = [2, 5, 8, 11, 0]

    for (let i = 0; i < numeros.length; i++) {
        let parInpar = numeros[i];
        if (parInpar % 2 == 0 && parInpar != 0) {
            console.log(`El numero ${parInpar} es 'PAR'.`)
        } else if (parInpar % 1 == 0 && parInpar != 0) {
            console.log(`El numero ${parInpar} es 'IMPAR'.`)
        } else {
            console.log(`El ${parInpar} es 'CERO'`)
        }
    }
}
clasificandoPareseInpares()

// Crea una función clasificarPalabras() que recorra un array de palabras y diga si son:

// "Corta" si tiene menos de 5 letras

// "Media" entre 5 y 8 letras

// "Larga" si tiene más de 8 letras


function clasificarPalabras() {
    let palabras = ["sol", "naranja", "computadora", "luz"];

    for (let p = 0; p < palabras.length; p++) {
        let palabra = palabras[p];
        let longitud = palabra.length;

        if (longitud < 5) {
            console.log(`La palabra ${palabra} tiene una longitud de ${longitud} y es corta.`);
        } else if (longitud <= 8) {
            console.log(`La palabra ${palabra} tiene una longitud de ${longitud} y es media.`);
        } else {
            console.log(`La palabra ${palabra} tiene una longitud ${longitud} larga.`);
        }
    }
}

clasificarPalabras();


// Crea una función evaluarContraseñas() que recorra un array de contraseñas y evalúe su dificultad según la cantidad de caracteres:

// Menos de 6 caracteres: “Débil”

// Entre 6 y 10: “Media”

// Más de 10: “Fuerte”

function evaluarContraseñas() {
    let contraseñas = ["abc", "segura123", "supersecreta2024", "clave"];

    for (let c = 0; c < contraseñas.length; c++) {
        let clave = contraseñas[c];
        if (clave.length < 6) {
            console.log(`Su clave ${clave} es de categoria DEBIL.`);
        } else if (clave.length <= 10) {
            console.log(`Su clave ${clave} es de categoria MEDIA.`)
        } else {
            console.log(`Su clave ${clave} es de categoria FUERTE.`)
        }
    }
}

evaluarContraseñas()


// Crea una función clasificarNombres() que recorra un array de nombres y los clasifique según su primera letra:

// Si empieza con A–M → "Grupo 1"

// Si empieza con N–Z → "Grupo 2"

function clasificarNombres() {
    let nombres = ["Ana", "Martín", "Zoe", "Carlos", "Norberto"];

    for (let n = 0; n < nombres.length; n++) {
        let nombre = nombres[n];
        let inicial = nombre.charAt(0).toUpperCase();
        if (inicial >= "A" && inicial <= "M") {
            console.log(nombre + ": Grupo 1");
        } else {
            console.log(nombre + ": Grupo 2")
        }
    }
}

clasificarNombres()


// Crea una función analizarComentarios() que recorra un array de comentarios y diga si es:

// “Muy corto” (< 10 caracteres)

// “Adecuado” (10 a 50 caracteres)

// “Demasiado largo” (> 50 caracteres)


function analizarComentarios() {
    let comentarios = [
        "Hola",
        "Muy buen producto",
        "No me gustó",
        "El servicio fue excelente, rápido y confiable.",
        "ok"
    ];

    for (let c = 0; c < comentarios.length; c++) {
        let texto = comentarios[c];
        let largo = texto.length;

        if (largo < 10) {
            console.log(`Su texto ${texto} es muy corto.`)
        } else if (largo < 40) {
            console.log(`Su texto ${texto} es adecuado.`)
        } else {
            console.log(`Su texto ${texto} es demasiado largo`)
        }
    }
}
analizarComentarios()

// Practicar el uso de bucles for, condicionales if, y operadores lógicos en JavaScript para clasificar temperaturas como "Frio", "Templado" o "Calor".

// Recorre un array de temperaturas.

// Usa una función para clasificar cada valor.

// Usa console.log() para imprimir el resultado en la terminal.

function clasificarTemp() {
    let temperaturas = [5, 15, 30]
    for (let t = 0; t < temperaturas.length; t++) {
        let temp = temperaturas[t];
        if (temp < 10) {
            console.log(`°C la temperatura ${temp} es FRIO.`)
        } else if (temp <= 25) {
            console.log(`°C la temperatura ${temp} es CALIDO.`)
        } else {
            console.log(`°C la temperatura ${temp} es CALOR ALTO.`)
        }
    }
}
clasificarTemp()


// Usar bucles, funciones, operadores unarios y lógica condicional (&&, ||, !) para determinar el rango de edad de personas.

// Recorre un array de edades.

// Usa una función clasificarEdad(edad) que:

// Menor a 13 → "Niño"

// Entre 13 y 17 → "Adolescente"

// Entre 18 y 59 → "Adulto"

// 60 o más → "Adulto mayor"

// Usa operadores unarios y lógicos.


function clasificarEdad() {
    let edades = [8, 14, 30, 65];
    for (let e = 0; e < edades.length; e++) {
        let edad = edades[e];
        if (edad < 13) {
            console.log(`Es un 'NIÑO' con (${edad})`)
        } else if (edad >= 13 && edad <= 17) {
            console.log(`Es un 'ADOLECENTE' con (${edad})`)
        } else if (edad >= 18 && edad <= 59) {
            console.log(`Es un 'ADULTO' con (${edad})`)
        } else {
            console.log(`Es un 'ADULTO MAYOR' con (${edad})`)
        }
    }
}
clasificarEdad()


// Analiza temperatura y humedad para determinar el estado del clima.

// Condiciones:

// Si temperatura < 15 o humedad > 80 → "Clima incómodo"

// Si temperatura entre 15 y 30 y humedad <= 80 → "Clima agradable"

// Si temperatura > 30 y humedad > 50 → "Calor húmedo"

function analizisDeTemperatura() { // Define una funcion y no recibe parametros.

    let clima = [
        { temp: 10, humedad: 70 },
        { temp: 25, humedad: 50 },
        { temp: 35, humedad: 60 }
    ]; // creamos un array - Cada elemento del arreglo es un objeto (parecido a un diccionario) con dos propiedades parecido al clave/valor, temperatura/Humedad.

    for (let i = 0; i < clima.length; i++) { // inicia el bucle, para recorrer todos los elementos dentro del arreglo clima - i es el indice de 0 hasta el largo del array.

        let t = clima[i].temp;
        let h = clima[i].humedad; // Dentro del bucle, se accede al objeto en la posicion i (por ejemplo {temp: 10, Humedad: 70}).
        // se guardan en variables: 
        // t --> temperatura del objeto actual.
        // h --> humedad del objeto actual.


        if (t < 15 && h > 80) {
            console.log("Clima incómodo");
        } else if (t >= 15 && t <= 30 && h <= 80) {
            console.log("Clima agradable");
        } else if (t > 30 && h > 50) {
            console.log("Calor húmedo");
        } else {
            console.log("Condiciones normales");
        }
    }
}
analizisDeTemperatura();


/* 
Array simple --> Solo índice --> arreglo[i]
Array de objetos --> Índice + propiedad (.) --> arreglo[i].propiedad

* Cuando trabajás con objetos dentro de un array, necesitás acceder a los campos por nombre, no solo con i. Eso te da más flexibilidad para manejar múltiples datos por entrada (como temp y humedad en este caso).  let { nombre, edad } = personas[i];
 */


// Recorrer un array de objetos con nombre y nota, y determinar si aprueban o reprueban.

function notasDeAlumnos() {

    let alumnos = [
        { nombre: "Ana", nota: 9 },
        { nombre: "Juan", nota: 4 },
        { nombre: "Luisa", nota: 6 }
    ];

    for (let a = 0; a < alumnos.length; a++) {
        let { nombre: m, nota: n } = alumnos[a];

        if (n >= 9) {
            console.log(`Hola ${m} tienes una nota de ${n} de las mas altas felicidades. ¡¡`)
        } else if (n >= 6) {
            console.log(`Hola ${m} tienes una nota de ${n} felicidades. ¡¡`)
        } else {
            console.log(`Hola ${m} tienes una nota de ${n} deberas recuperar.`)
        }
    }
}
notasDeAlumnos()


// Determinar si un producto está en oferta según su precio.

function ProductosEnOferta() {

    let productos = [
        { nombre: "Remera", precio: 4500 },
        { nombre: "Zapatillas", precio: 15000 },
        { nombre: "Gorra", precio: 2000 }
    ];

    for (let o = 0; o < productos.length; o++) {
        let { nombre: n, precio: p } = productos[o];

        if (p >= 8000) {
            console.log(`Este producto ${n} precio $ ${p} No esta en oferta... Lo sentimos.`)
        } else {
            console.log(`Este producto ${n} precio $ ${p} !! ESTA EN OFERTA ¡¡`)
        }
    }
}
ProductosEnOferta()

// Verificar si un número es positivo, negativo o cero

function PositivONegativo() {
    let numeros = [10, -5, 0, 7, -1];

    for (let n = 0; n < numeros.length; n++) {
        let num = numeros[n];

        if (num > 0) {
            console.log(`El numero ${num} es .POSITIVO.`)
        } else if (num < 0) {
            console.log(`El numero ${num} es .NEGATIVO.`)
        } else {
            console.log(`El numero ${num} es .CERO.`)
        }
    }
}
PositivONegativo()


// Recorrer una lista de productos y verificar si pasaron el control de calidad según su nivel de defectos.

function conterolDeCalidad() {

    let productos = [
        { nombre: "Producto A", defectos: 0 },
        { nombre: "Producto B", defectos: 2 },
        { nombre: "Producto C", defectos: 5 }
    ];

    for (let c = 0; c < productos.length; c++) {
        let { nombre: n, defectos: d } = productos[c];

        if (d == 0) {
            console.log(`${n} : p/ NO DEFECT.`)
        } else if (d <= 3) {
            console.log(`${n} : p/ ACEPT.`)
        } else {
            console.log(`${n} : p/ DEFECT.`)
        }
    }
}

conterolDeCalidad()


// Analizar el nivel de entrenamiento de personas según sus horas de entrenamiento semanal.

function EntrenamientoSemanal() {
    let personas = [
        { nombre: "Laura", horas: 10 },
        { nombre: "Martín", horas: 3 },
        { nombre: "Carla", horas: 6 }
    ];

    for (let e = 0; e < personas.length; e++) {
        let { nombre: n, horas: h } = personas[e];

        if (h >= 10) {
            console.log(`${n} usted entrena ${h}hs esta entrenando correctamente.`)
        } else if (h >= 6) {
            console.log(`${n} usted entrena ${h}hs esta entrenando a un ritmo medio.`)
        } else {
            console.log(`${n} usted entrena ${h}hs no esta entrenando bien.`)
        }
    }
}
EntrenamientoSemanal()


// Analizar si el consumo de energía está dentro de los valores normales.

function ConsumoDeEnergia() {

    let hogares = [
        { domicilio: "Calle Falsa 123", consumo: 250 },
        { domicilio: "Av. Real 456", consumo: 600 },
        { domicilio: "Pasaje Luna 789", consumo: 100 }
    ];

    for (let c = 0; c < hogares.length; c++) { // la c recorre todo el array con el for comensandod esde cero y llendo por cada elemento del array sumando uno al final con c++.
        let { domicilio: d, consumo: o } = hogares[c]; // aca estamos colocando los parametros del array o clave y valor y designamos un nombre a cada uno para reutilizarlos en el codigo, luego llamamos el array con el resultadod el bucle C q seria la variable que contiene todos los datos recorridos y desglosados.
        if (o >= 550) {
            console.log(`El domicilio ${d} Tiene consumo 'MUY ALTO'`);
        } else if (o >= 200) {
            console.log(`El domicilio ${d} Tiene consumo 'REGULAR'`);
        } else {
            console.log(`El domicilio ${d} Tiene consumo 'OPTIMO'`);
        }
    }
}
ConsumoDeEnergia()

// Dado un arreglo con temperaturas registradas en grados Celsius, clasificá cada una como "FRÍA", "TEMPLADA", "CÁLIDA" o "CALUROSA" según el valor.

function TemperaturasRegistradas() {

    let temperaturas = [5, 15, 25, 35]
    for (t = 0; t < temperaturas.length; t++) {
        let temp = temperaturas[t];

        if (temp <= 5) {
            console.log(`T° = [${temp}] = 'FRIO INTENSO'`);
        } else if (temp <= 15) {
            console.log(`T° = [${temp}] = 'FRIO'`);
        } else if (temp <= 25) {
            console.log(`T° = [${temp}] = 'CALIDO'`);
        } else {
            console.log(`T° = [${temp}] = 'CALOR'`);
        }
    }
}
TemperaturasRegistradas()

// Clasificá productos como "Barato", "Precio medio" o "Caro" según su valor.

function Clasificacion() {

    let productos = [
        { nombre: "Lápiz", precio: 15 },
        { nombre: "Cuaderno", precio: 80 },
        { nombre: "Cuaderno Digital", precio: 3500 },
        { nombre: "Lapiz Electronico", precio: 10 },
        { nombre: "Mochila", precio: 300 },
        { nombre: "Notebook", precio: 2000 }
    ];

    for (let c = 0; c < productos.length; c++) {
        let { nombre: n, precio: p } = productos[c];

        if (p >= 2000) {
            console.log(`Producto [${n} 'CARO' $${p}]`)
        } else if (p >= 80 && p <= 300) {
            console.log(`Producto [${n} 'CARO MEDIO' $${p}]`)
        } else {
            console.log(`Producto [${n} 'BARATO' $${p}]`)
        }
    }
}
Clasificacion()


// Clasificá a los corredores según su tiempo de carrera.

function ClasiCorredores() {
    let corredores = [
        { nombre: "Mario", tiempo: 9.8 },
        { nombre: "Sofía", tiempo: 12.3 },
        { nombre: "Carlos", tiempo: 15.0 }
    ];

    for (let c = 0; c < corredores.length; c++) {
        let { nombre: n, tiempo: t } = corredores[c];

        if (t < 10) {
            console.log(`Atleta: ${n} = TIEMPO = ${t} 'ELITE' `);
        } else if (t < 13) {
            console.log(`Atleta: ${n} = TIEMPO = ${t} 'PROFESIONAL' `);
        } else {
            console.log(`Atleta: ${n} = TIEMPO = ${t} 'AMATEUR' `);
        }
    }
}
ClasiCorredores()

// Dado un arreglo con niveles de batería en porcentaje, clasificá cada uno como:

// "Crítico" (< 10%)

// "Bajo" (10–29%)

// "Medio" (30–69%)

// "Alto" (70–100%)

const PorcentajeDeBateria = () => {
    let niveles = [5, 25, 55, 85]

    niveles.forEach(nivel => {
        if (nivel < 10) {
            console.log(`Nivel : ${nivel} % => 'CRITICO'`);
        } else if (nivel < 30) {
            console.log(`Nivel : ${nivel} % => 'BAJO'`);
        } else if (nivel < 70) {
            console.log(`Nivel : ${nivel} % => 'MEDIO'`);
        } else {
            console.log(`Nivel : ${nivel} % => 'ALTO'`);
        }
    });
};
PorcentajeDeBateria()


// Dado un arreglo de estudiantes con nombre y promedio, clasificá el rendimiento como:

// "Excelente" (>=9)

// "Bueno" (>=7)

// "Suficiente" (>=6)

// "Insuficiente" (<6)

const RendimientoAlumnos = () => {
    const estudiantes = [
        { nombre: "Ana", promedio: 9.5 },
        { nombre: "Leo", promedio: 7.2 },
        { nombre: "Cata", promedio: 6.0 },
        { nombre: "Roberto", promedio: 4.8 }
    ];

    // for {let e = 0; e < estudiantes.length; e++} {
    // let {nombre: n, promedio: p} = estudiantes[e];

    // let {nombre, promedio} = estudiantes[e];

    estudiantes.forEach(({ nombre, promedio }) => {

        if (promedio >= 9) {
            console.log(`${nombre}: Excelente (${promedio})`);
        } else if (promedio >= 7) {
            console.log(`${nombre}: Muy Bueno (${promedio})`);
        } else if (promedio >= 6) {
            console.log(`${nombre}: Bueno (${promedio})`);
        } else {
            console.log(`${nombre}: Insuficiente (${promedio})`);
        }
    }); // }
};
RendimientoAlumnos()


// Dado un array de personas con sus edades, imprimir si son "Menores", "Adultos" o "Mayores".

const edadesPers = () => {
    const personas = [
        { nombre: "Sofía", edad: 15 },
        { nombre: "Carlos", edad: 28 },
        { nombre: "Norma", edad: 67 },
        { nombre: "Martín", edad: 18 }
    ];

    personas.forEach(({ nombre: n, edad: e }) => {

        if (e < 18) {
            console.log(`${n} = 'ES MENOR DE EDAD' Edad:${e}`)
        } else if (e < 60) {
            console.log(`${n} = 'ES ADULTO' Edad:${e}`)
        } else {
            console.log(`${n} = 'MAYOR DE EDAD' edad:${e}`)
        }
    });
};
edadesPers();

// Dado un array de productos con su stock, mostrar si están "Agotados", "Pocos disponibles" o "En stock".

const StockDeProduct = () => {

    const productos = [
        { nombre: "Notebook", stock: 0 },
        { nombre: "Mouse", stock: 4 },
        { nombre: "Teclado", stock: 12 },
        { nombre: "Monitor", stock: 6 }
    ];

    productos.forEach(({ nombre: n, stock: s }) => {

        if (s <= 4 && s >= 0) {
            console.log(`El producto ${n} esta 'BAJO DE STOCK (${s})Unid.'`);
        } else if (s <= 12 && s <= 6) {
            console.log(`El producto ${n} esta 'MEDIO DE STOCK (${s})Unid.'`);
        } else {
            console.log(`El producto ${n} esta 'ALTO EN STOCK (${s})Unid.'`);
        }
    });
};
StockDeProduct()

//  Dado un array de números, indicar si cada uno es par o impar.

const ParOinpar = () => {
    const numeros = [10, 3, 7, 22, 15];

    numeros.forEach((numero) => {
        if (numero % 2 == 0) {
            console.log(`El numero ${numero} es '(PAR)'.`);
        } else if (numero % 1 == 0) {
            console.log(`El numero ${numero} es '(IMPAR)'.`);
        }
    });
};
ParOinpar();

// Mostrar si el salario es "Bajo", "Medio" o "Alto".

const NivelDeSalario = () => {
    const empleados = [
        { nombre: "Juan", salario: 250000 },
        { nombre: "Lucía", salario: 500000 },
        { nombre: "Raúl", salario: 750000 },
        { nombre: "Elena", salario: 150000 }
    ];

    empleados.forEach(({ nombre: n, salario: s }) => {
        if (s >= 700000) {
            console.log(`Sueldo de: ${n} es ("MUY ALTO") | con valor de ($ ${s}) )`);
        } else if (s >= 500000) {
            console.log(`Sueldo de: ${n} es ("ALTO") | con valor de ($ ${s}) )`);
        } else if (s >= 250000) {
            console.log(`Sueldo de: ${n} es ("MEDIO") | con valor de ($ ${s}) )`);
        } else {
            console.log(`Sueldo de: ${n} es ("BAJO") | con valor de ($ ${s}) )`);
        }
    });
};
NivelDeSalario();


//  Indicar si cada nota es "Aprobada" (>=6) o "Desaprobada" (<6).

const NotasAoD = () => {
    const notas = [4, 7, 10, 3, 6, 8];

    notas.forEach((nota) => {
        if (nota >= 7) {
            console.log(`APROBADO => ${nota}`);
        } else {
            console.log(`DESAPROBADO => ${nota}`);
        }
    });
};
NotasAoD();

// Clasificación de edades (función tradicional + for)

function ClasiEdad() {
    let personas = [
        { nombre: "Sofía", edad: 15 },
        { nombre: "Carlos", edad: 28 },
        { nombre: "Lucía", edad: 67 },
        { nombre: "Martín", edad: 18 }
    ];

    for (let e = 0; e < personas.length; e++) {
        let { nombre: n, edad: d } = personas[e];

        if (d >= 50) {
            console.log(`La persona con nombre ${n} es ("ADULTO MAYOR con ${d}")`);
        } else if (d >= 18) {
            console.log(`La persona con nombre ${n} es ("ADULTO con ${d}")`);
        } else {
            console.log(`La persona con nombre ${n} es ("MENOR con ${d}")`);
        }
    }
}
ClasiEdad();

// Estado de productos según stock

function StockPro() {
    let productos = [
        { nombre: "Notebook", stock: 0 },
        { nombre: "Mouse", stock: 4 },
        { nombre: "Teclado", stock: 12 },
        { nombre: "Monitor", stock: 6 }
    ];

    for (let r = 0; r < productos.length; r++) {
        let { nombre: n, stock: s } = productos[r];

        if (s >= 12) {
            console.log(`El product : "[${n}] => ("EN STOCK - [${s}] Unid.")"`);
        } else if (s >= 1) {
            console.log(`El product : "[${n}] => ("POCO STOCK" - [${s}] Unid.)"`);
        } else {
            console.log(`El product : "[${n}] => ("SIN STOCK" - [${s}] Unid.)"`);
        }
    }
}
StockPro();

// Clasificar Números Pares e Impares
// Objetivo: Dado un array de números, recorrerlo con forEach y mostrar si cada número es par o impar.

const numerosParesOinpares = () => { // Funcion flecha/Arrow resumen de funcion normal.
    const numeros = [3, 8, 11, 4, 6, 9, 2]; // Array de numeros simple.

    numeros.forEach((numero) => { // forEach el for de siempre pero resumido y moderno.
        if (numero % 2 == 0) {
            console.log(`El numero ${numero} es "PAR`);
        } else {
            console.log(`El numero ${numero} es "IMPAR`);
        }
    });
};
numerosParesOinpares();

// Clasificar Alumnos Según Notas
// Objetivo: Usar un array de objetos donde cada alumno tiene un nombre y una nota, y mostrar una evaluación según el promedio.

const evaluacionPromedio = () => {
    const alumnos = [
        { nombre: "María", nota: 10 },
        { nombre: "Juan", nota: 5 },
        { nombre: "Sofía", nota: 7 },
        { nombre: "Tomás", nota: 8.5 }
    ];

    alumnos.forEach(({ nombre: n, nota: a }) => {
        if (a >= 9) {
            console.log(`Alumno ${n} => ${a} "EXCELENTE A+"`);
        } else if (a >= 7) {
            console.log(`Alumno ${n} => ${a} "APROBADO"`);
        } else {
            console.log(`Alumno ${n} => ${a} "REPROBADO"`);
        }
    });
};
evaluacionPromedio();

// Dado un array de strings, mostrar la cantidad de letras que tiene cada palabra.

const cantidadDeLetras = () => {
    const palabras = ["Casa", "Perro", "Computadora", "Sol"];

    palabras.forEach((palabra) => {
        console.log(`(${palabra}) => [${palabra.length}] Letras.`);
    });
};
cantidadDeLetras();

// Usar un array de objetos de productos para mostrar si son accesibles, caros o muy caros según su precio.

const productAccesibles = () => {
    const productos = [
        { nombre: "Laptop", precio: 1200 },
        { nombre: "Mouse", precio: 25 },
        { nombre: "Teclado", precio: 75 },
        { nombre: "Monitor", precio: 300 }
    ];
    productos.forEach(({ nombre: n, precio: p }) => {
        if (p >= 900) {
            console.log(`[${n}] => ("$${p} 'MUY CARO'")`);
        } else if (p >= 100) {
            console.log(`[${n}] => ("$${p} 'CARO'")`);
        } else {
            console.log(`[${n}] => ("$${p} 'ACCESIBLE'")`);
        }
    });
};
productAccesibles();

// A partir de un array de personas con nombre y edad, mostrar si es niño, adolescente, adulto o adulto mayor.

const edadesPersonas = () => {
    const personas = [
        { nombre: "Lucas", edad: 15 },
        { nombre: "Martina", edad: 22 },
        { nombre: "Lucia", edad: 42 },
        { nombre: "Pedro", edad: 65 },
        { nombre: "Valentina", edad: 9 }
    ];

    personas.forEach(({ nombre: n, edad: e }) => {
        if (e >= 60) {
            console.log(`${e}años => "${n} => [ADULTO MAYOR]"`);
        } else if (e >= 30) {
            console.log(`${e}años => "${n} => [ADULTO]"`);
        } else if (e >= 18) {
            console.log(`${e}años => "${n} => [ADOLECENTE]"`);
        } else {
            console.log(`${e}años => "${n} => [MENOR]"`);
        }
    });
};
edadesPersonas();

// Entrenar lógica con un array de números (temperaturas) y clasificar cada valor según su rango.

const rangoTemp = () => {
    const temperaturas = [34, 15, 5, -3, 22, 28, 10];

    temperaturas.forEach((temperatura) => {

        if (temperatura >= 30) {
            console.log(`Temperatura: ${temperatura} => "MUY CALUROSO"`);
        } else if (temperatura >= 20) {
            console.log(`Temperatura: ${temperatura} => "TEMPLADO"`);
        } else if (temperatura >= 10) {
            console.log(`Temperatura: ${temperatura} => "FRESCO"`);
        } else {
            console.log(`Temperatura: ${temperatura} => "FRIO"`)
        }
    });
};
rangoTemp();

// Usar un array de objetos para categorizar el estado de cada pedido según su valor booleano.

const pedidosBool = () => {
    const pedidos = [
        { cliente: "Juan", entregado: true },
        { cliente: "María", entregado: false },
        { cliente: "Luis", entregado: true },
        { cliente: "Sofía", entregado: false }
    ];
    pedidos.forEach(({ cliente, entregado }) => {
        if (entregado) {
            console.log(`"${cliente}" : Pedido [ENTREGADO]`);
        } else {
            console.log(`"${cliente}" : Pedido [NO ENTREGADO]`);
        }
    });
};
pedidosBool();

// Usar un array de objetos para evaluar el stock de cada producto y clasificarlo por cantidad.

const cantidadProducto = () => {
    const productos = [
        { nombre: "Lápiz", stock: 50 },
        { nombre: "Cuaderno", stock: 5 },
        { nombre: "Lapicera", stock: 22 },
        { nombre: "Goma", stock: 20 },
        { nombre: "Cartuchera", stock: 0 }
    ];

    productos.forEach(({ nombre: n, stock: s }) => {

        if (s === 0) {
            console.log(`${n} => "SIN STOCK ${s}`);
        } else if (s >= 1 && s <= 14 ) {
            console.log(`${n} => "STOCK BAJO ${s}`);
        } else if (s >= 15 && s <= 20 ) {
            console.log(`${n} => "STOCK MEDIO ${s}`);
        } else if (s >= 21 && s <= 30) {
            console.log(`${n} => "STOCK ALTO ${s}`);
        } else {
            console.log(`${n} => "STOCK MAXIMO ${s}`);
        }
    });
};
cantidadProducto();
















































































































































