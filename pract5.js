// PRACTICA DE SWITCH para datos fijos unitarios / para datos complejos usa if, else.

// Dado un número del 1 al 7, imprimir el día correspondiente.

const diaSemana = () => {
    const dias = [1, 3, 7, 5, 9];

    dias.forEach((dia) => {
        switch (dia) {
            case 1:
                console.log("Lunes");
                break;
            case 2:
                console.log("Martes");
                break;
            case 3:
                console.log("Miercoles");
                break;
            case 4:
                console.log("Jueves");
                break;
            case 5:
                console.log("Viernes");
                break;
            case 6:
                console.log("Sabado");
                break;
            case 7:
                console.log("Domingo");
                break;
            default:
                console.log(`Numero invalido ${dia}`)


        }
    });
};
diaSemana();


// Dado un tipo de vehículo, indicar si es terrestre, acuático o aéreo.

const tipoVehiculo = () => {
    const vehiculos = ["auto", "barco", "avión", "moto", "submarino", "camion", "helicóptero"];

    vehiculos.forEach((tipo) => {
        switch (tipo) {

            case "auto":
            case "moto":
            case "camion":
                console.log(`El vehiculo ${tipo} es [Terrestre]`);
                break;
            case "submarino":
            case "barco":
                console.log(`El vehiculo ${tipo} es [Acuatico]`);
                break;
            case "avión":
            case "helicóptero":
                console.log(`El vehiculo ${tipo} es [Aereo]`);
                break;
            default:
                console.log(`El vehiculo no es existente.`);

        }
    });
};
tipoVehiculo();


// Simular un menú de opciones usando un array de elecciones.

const menu = () => {
    const opciones = [1, 2, 3, 4, 99];

    opciones.forEach((opcion) => {
        switch (opcion) {

            case 1:
                console.log(`Opcion ${opcion} Elegiste ver PERFIL.`);
                break;
            case 2:
                console.log(`Opcion ${opcion} Elegiste ver Configuracion.`);
                break;
            case 3:
                console.log(`Opcion ${opcion} Elegiste ver Notificaciones.`);
                break;
            case 4:
                console.log(`Opcion ${opcion} Elegiste Cerrar sesion.`);
                break;
            default:
                console.log(`Opcion ${opcion} No existe.`);
        }
    });
};
menu();


// Dado un array con letras de calificación (A, B, C, D, F), imprimir el mensaje correspondiente.

const calificaciones = () => {
    const notas = ["A", "C", "F", "B", "E", "D"];

    notas.forEach((nota) => {
        switch (nota) {
            case "A":
                console.log(`[EXCELENTE] con ${nota}`);
                break;
            case "B":
                console.log(`[MUY BUENO] con ${nota}`);
                break;
            case "C":
                console.log(`[BUENO] con ${nota}`);
                break;
            case "D":
                console.log(`[REGULAR] con ${nota}`);
                break;
            case "F":
                console.log(`[REPROBADO] con ${nota}`);
                break;
            default:
                console.log(`${nota} [CALIFICACIÓN INVÁLIDA] `);
        }
    });
};
calificaciones();

// Dado un array de empleados con nombre y rol, usar switch para imprimir el área a la que pertenece cada uno.

const empleados = () => {
    const empleados = [
        { nombre: "Lucía", rol: "administración" },
        { nombre: "Carlos", rol: "ventas" },
        { nombre: "Ana", rol: "soporte" },
        { nombre: "Juan", rol: "desarrollo" },
        { nombre: "Mario", rol: "otro" }
    ];

    empleados.forEach(({ nombre: n, rol: r }) => {
        switch (r) {

            case "administración":
                console.log(`${n} esta a cargo del area de "administración"`);
                break;
            case "ventas":
                console.log(`${n} esta a cargo del area de "ventas"`);
                break;
            case "soporte":
                console.log(`${n} esta a cargo del area de "soporte"`);
                break;
            case "desarrollo":
                console.log(`${n} esta a cargo del area de "desarrollo"`);
                break;
            case "otro":
                console.log(`${n} esta a cargo del area de "otro"`);
                break;
            default:
                console.log(`${n}: Rol no clasificado`);
        }
    });
};
empleados();

// Practicar forEach, arrow functions, switch, y condiciones sobre un array simple.

// Clasificación de temperaturas según su valor
// Si la temperatura es:
// - Mayor o igual a 30 → "Muy Calor"
// - Entre 20 y 29 → "Templado"
// - Entre 10 y 19 → "Fresco"
// - Menor a 10 → "Frío"

const clasiTemp = () => {
    const temperaturas = [32, 25, 18, 5, 29, 11, 35];

    temperaturas.forEach((temp) => {
        let estado = "";
        switch (true) {

            case (temp > 30):
                estado = (`MUY CALUROSO`);
                break;
            case (temp > 20):
                estado = (`TEMPLADO`);
                break;
            case (temp > 10):
                estado = (`FRESCO`);
                break;
            default:
                estado = (`FRIO`);

        }
        console.log(`TEMPERATURAS : ${temp} => ${estado}`)
    });
};
clasiTemp();


// // Clasifica empleados según sus horas trabajadas semanales
// - Más de 40 → "Horas extra"
// - Entre 30 y 40 → "Jornada completa"
// - Menos de 30 → "Medio tiempo"

const clasiEmpleados = () => {
    const empleados = [
        { nombre: "Sofía", horas: 45 },
        { nombre: "Carlos", horas: 38 },
        { nombre: "Lucía", horas: 28 },
        { nombre: "Tomás", horas: 40 },
    ];

    empleados.forEach(({ nombre: n, horas: h }) => {
        let tipoJornada = ""
        switch (true) {
            case (h > 40):
                tipoJornada = "Horas extras";
                break;
            case (h > 30):
                tipoJornada = "Jornada completa";
                break;
            case (h > 20):
                tipoJornada = "Medio tiempo";
                break;
            case (h > 10):
                tipoJornada = "Horas reducidas";
                break;
            default:
                tipoJornada = "Horas reducidas";
        }
        console.log(`${n}: ${tipoJornada} (${h}h)`);
    });
};
clasiEmpleados();


// Clasificar productos según su precio:
// - Mayor a 1000 → "Caro"
// - Entre 500 y 1000 → "Moderado"
// - Menor a 500 → "Económico"


const caliProduct = () => {
    const productos = [
        { nombre: "Celular", precio: 1200 },
        { nombre: "Auriculares", precio: 450 },
        { nombre: "Tablet", precio: 800 },
        { nombre: "Cargador", precio: 300 },
    ];

    productos.forEach(({ nombre, precio }) => {
        let categoria = ""
        switch (true) {
            case (precio > 1000):
                categoria = "CARO";
                break;
            case (precio > 500):
                categoria = "MEDIO";
                break;
            case (precio > 100):
                categoria = "ECONOMICO";
                break;
            default:
                categoria = "No encontrado"

        }
        console.log(`${nombre}: ${categoria} $${precio}`)
    });
};
caliProduct();

// Clasificar jugadores según la cantidad de goles anotados:
// - 10 o más goles → "Goleador"
// - Entre 5 y 9 goles → "Buen rendimiento"
// - Menos de 5 goles → "Bajo rendimiento"

const clasiJugadores = () => {
    const jugadores = [
        { nombre: "Martín", goles: 12 },
        { nombre: "Pablo", goles: 4 },
        { nombre: "Lucas", goles: 7 },
        { nombre: "Ezequiel", goles: 0 },
    ];

    jugadores.forEach(({ nombre, goles }) => {
        let nivel = "";

        switch (true) {
            case (goles >= 10):
                nivel = "GOLEADOR";
                break;
            case (goles >= 5):
                nivel = "Buen rendimiento";
                break;
            default:
                nivel = "Bajo rendimiento"
        }
        console.log(`${nombre}: ${nivel} (${goles} goles)`)
    });
};
clasiJugadores();

// Clasificar personas según su edad:
// - Menores de 13 → "Niño/a"
// - Entre 13 y 17 → "Adolescente"
// - Entre 18 y 64 → "Adulto"
// - 65 o más → "Adulto mayor"

const clasifiPersonas = () => {
    const personas = [
        { nombre: "Camila", edad: 8 },
        { nombre: "Julián", edad: 15 },
        { nombre: "Lorena", edad: 34 },
        { nombre: "Héctor", edad: 70 },
    ];

    personas.forEach(({ nombre, edad }) => {
        let categoria = "";
        switch (true) {
            case (edad >= 60):
                categoria = "Es adulto mayor"
                break;
            case (edad >= 30):
                categoria = "Es adulto maduro"
                break;
            case (edad >= 18):
                categoria = "Es adulto"
                break;
            default:
                categoria = "es menor de edad"
        }

        console.log(`${nombre}: ${categoria} (${edad} años)`);
    });
};

clasifiPersonas();

/* 
Ahora, cada jugador tiene varios partidos con diferentes goles, y calculamos el total con .reduce().

- Mejora: uso de arrays internos + reduce.
 */


const clasiJugador = () => {
    const jugadores = [
        { nombre: "Martín", goles: [3, 2, 5, 4] },
        { nombre: "Pablo", goles: [1, 0, 2, 1] },
        { nombre: "Lucas", goles: [1, 4, 2] },
        { nombre: "Ezequiel", goles: [0, 0, 0] },
    ];

    jugadores.forEach(({ nombre, goles }) => {
        const totalgoles = goles.reduce((suma, gol) => suma + gol, 0);
        let nivel = "";
        switch (true) {
            case (totalgoles > 10):
                nivel = "Goleador";
                break;
            case (totalgoles > 5):
                nivel = "Buen rendimiento";
                break;
            default:
                nivel = "Bajo rendimiento";
        }
        console.log(`${nombre}: ${nivel} (${totalgoles} goles en total)`);
    });
};
clasiJugador();


// Cada estudiante registra cuántas horas estudió en diferentes días. Clasificarlos según la cantidad total de horas.

const horasDeEstudio = () => {
    const estudiantes = [
        { nombre: "Lucía", horas: [2, 3, 2, 4] },
        { nombre: "Tomás", horas: [1, 1, 0, 2] },
        { nombre: "Sofía", horas: [3, 3, 3] },
        { nombre: "Bruno", horas: [0, 1, 1] },
    ];

    estudiantes.forEach(({ nombre, horas }) => {
        const totalHoras = horas.reduce((suma, horas) => suma + horas, 0);
        let nivel = ""
        switch (true) {
            case (totalHoras > 10):
                nivel = "Estudiante dedicado";
                break;
            case (totalHoras > 5):
                nivel = "Buen esfuerzo";
                break;
            default:
                nivel = "Debe mejorar"
        }
        console.log(`${nombre}: ${nivel} (${totalHoras} horas estudiadas)`);
    });
};
horasDeEstudio();


// Cada atleta registra la distancia recorrida en diferentes entrenamientos (en km).

const distanciRecorrida = () => {
    const atletas = [
        { nombre: "Carlos", distancias: [5, 7, 10] },
        { nombre: "Micaela", distancias: [3, 2, 4] },
        { nombre: "Santiago", distancias: [1, 2, 1] },
        { nombre: "Valentina", distancias: [8, 6, 5] },
    ];

    atletas.forEach(({ nombre, distancias }) => {
        const total = distancias.reduce((suma, distancias) => suma + distancias, 0);
        let nivel = ""
        switch (true) {
            case (total > 20):
                nivel = "Atleta de alto rendimiento.";
                break;
            case (total > 10):
                nivel = "Buen rendimiento.";
                break;
            default:
                nivel = "Debe entrenar mas.";
        }
        console.log(`${nombre}: ${nivel} (${total} km recorridos)`)
    });
};
distanciRecorrida();

// Cada artista produjo una cantidad de obras en distintas semanas. Clasificarlos según la cantidad total de producción.

const totalProduccion = () => {
    const artistas = [
        { nombre: "Agustina", obras: [1, 2, 3, 4] },
        { nombre: "Nico", obras: [0, 1, 1, 0] },
        { nombre: "Clara", obras: [2, 2, 2] },
        { nombre: "Rafael", obras: [4, 5, 3] },
    ];
    artistas.forEach(({ nombre, obras }) => {
        const totalPro = obras.reduce((suma, obras) => suma + obras, 0);
        let nivel = "";
        switch (true) {
            case (totalPro >= 10):
                nivel = "Artista prolífico";
                break;
            case (totalPro >= 5):
                nivel = "Producción aceptable";
                break;
            default:
                nivel = "Producción baja";
        }
        console.log(`${nombre}: ${nivel} (${totalPro} obras creadas)`);
    });
};
totalProduccion();

// Función que evalúa la temperatura promedio de cada ciudad y le asigna una categoría

const temperaturaPromedio = () => {
    const ciudades = [
        { ciudad: "Buenos Aires", temperaturas: [22, 25, 20, 21, 23] },
        { ciudad: "Ushuaia", temperaturas: [5, 3, 4, 6] },
        { ciudad: "Salta", temperaturas: [28, 30, 27, 29] },
        { ciudad: "Mendoza", temperaturas: [15, 18, 17, 16] },
    ];

    ciudades.forEach(({ ciudad, temperaturas }) => {
        const promedio = temperaturas.reduce((suma, temperaturas) => suma + temperaturas, 0) / temperaturas.length;
        let clasificacion = ""

        switch (true) {
            case (promedio > 25):
                clasificacion = "Muy caluroso";
                break;
            case (promedio > 15):
                clasificacion = "Templado";
                break;
            default:
                clasificacion = "Frio";

        }
        console.log(`${ciudad}: ${clasificacion} (Promedio: ${promedio.toFixed(1)}°C)`) // tofixed redodnea mi codigo el numero que de la operacion 8.76 => 8.8.
    });
};
temperaturaPromedio();

// Función que evalúa el stock de productos y da una alerta según la cantidad total

const stockProductos = () => {
    const productos = [
        { producto: "Remeras", stock: [5, 2, 1] },
        { producto: "Pantalones", stock: [10, 7, 6] },
        { producto: "Camperas", stock: [1, 0, 2] },
        { producto: "Zapatillas", stock: [4, 4, 5] },
    ];
    productos.forEach(({ producto, stock }) => {
        const total = stock.reduce((suma, stock) => suma + stock, 0);
        let estado = "";
        switch (true) {
            case (total >= 20):
                estado = "Stock alto";
                break;
            case (total >= 10):
                estado = "Stock medio";
                break;
            default:
                estado = "Stock bajo";
        }
        console.log(`${producto}: ${estado} (${total} unidades totales)`);
    });
};
stockProductos();

// Función que clasifica los ingresos semanales de varios trabajadores

const clasifiIngresos = () => {
    const trabajadores = [
        { nombre: "Ana", ingresos: [1000, 950, 1100] },
        { nombre: "Lucas", ingresos: [400, 300, 500] },
        { nombre: "Marina", ingresos: [800, 850, 900] },
        { nombre: "Julián", ingresos: [200, 250, 300] },
    ];
    trabajadores.forEach(({ nombre, ingresos }) => {
        const total = ingresos.reduce((suma, ingresos) => suma + ingresos, 0);
        let nivel = "";
        switch (true) {
            case (total >= 2500):
                nivel = "Ingresos altos"
                break;
            case (total >= 1500):
                nivel = "Ingresos medios"
                break;
            default:
                nivel = "Ingresos bajos"
        }
        console.log(`${nombre}: ${nivel} ($${total} semanales)`);
    });
};
clasifiIngresos();


// Función que clasifica la actividad física de cada persona

const clasificarActividad = () => {
    const personas = [
        { nombre: "Luis", minutos: [30, 40, 20, 0, 15] },
        { nombre: "Mica", minutos: [60, 60, 60, 60, 60] },
        { nombre: "Tomás", minutos: [10, 15, 5, 0, 0] },
        { nombre: "Valeria", minutos: [25, 30, 35, 40, 30] },
    ];
    personas.forEach(({ nombre, minutos }) => {
        const total = minutos.reduce((suma, minutos) => suma + minutos, 0);
        let clasificacion = "";
        switch (true) {
            case (total >= 200):
                clasificacion = "Muy activo";
                break;
            case (total >= 100):
                clasificacion = "Activo";
                break;
            default:
                clasificacion = "No activo";
        }
        console.log(`${nombre}: ${clasificacion} (${total} minutos semanales)`);
    });
};
clasificarActividad();

// Sumar la cantidad de libros leídos por cada lector y clasificar su hábito de lectura.


// auxiliar

const clasificarLector = (totalLibros) => {
    switch (true) {
        case totalLibros >= 20:
            return "Lector voraz";
        case totalLibros >= 10:
            return "Lector constante";
        default:
            return "Lectura ocasional";
    }
};

// Función principal

const evaluarLectura = () => {
    const lectores = [
        { nombre: "Laura", libros: [5, 6, 3] },
        { nombre: "Tomás", libros: [10, 12, 9] },
        { nombre: "Sofía", libros: [2, 1, 0] },
        { nombre: "Carlos", libros: [7, 8, 6] },
    ];

    lectores.forEach(({ nombre, libros }) => {
        const total = libros.reduce((sum, n) => sum + n, 0);
        const nivel = clasificarLector(total);
        console.log(`${nombre}: ${nivel} (${total} libros leídos)`);
    });
};


evaluarLectura();


// Sumar la cantidad de libros leídos por cada lector y clasificar su hábito de lectura.

// Funcion Auxiliar.

const clasificadorLibros = (totaLibros) => {
    switch (true) {
        case totaLibros >= 20:
            return "Lector voraz";
        case totaLibros >= 10:
            return "Lector medio";
        default:
            return "Lector ocasional";
    }
};
// Funcion Principal.
const evaluarLecturas = () => {
    const lectores = [
        { nombre: "Laura", libros: [5, 6, 3] },
        { nombre: "Tomás", libros: [10, 12, 9] },
        { nombre: "Sofía", libros: [2, 1, 0] },
        { nombre: "Carlos", libros: [7, 8, 6] },
    ];
    lectores.forEach(({ nombre, libros }) => {
        const total = libros.reduce((suma, libros) => suma + libros, 0);
        const nivel = clasificadorLibros(total);
        console.log(`${nombre}: ${nivel} (${total} libros leídos)`)

    });
};
evaluarLecturas();


//  Evaluar precisión de jugadores (puntos acertados)
// Objetivo: Calcular el total de aciertos por jugador y clasificarlos.

const clasificarJugador = (totalpuntos) => {
    switch (true) {
        case totalpuntos > 25:
            return "Excelente Jugador";
        case totalpuntos > 10:
            return "Jugador medio";
        default:
            return "Jugador Novato";
    }
};
//cod.prin.
const evaluarJugadores = () => {
    const jugadores = [
        { nombre: "Julián", puntos: [4, 6, 3] },
        { nombre: "Martina", puntos: [10, 9, 8] },
        { nombre: "Lucas", puntos: [15, 12, 10] },
        { nombre: "Renata", puntos: [2, 1, 0] },
    ];
    jugadores.forEach(({ nombre, puntos }) => {
        const total = puntos.reduce((suma, puntos) => suma + puntos, 0);
        const nivel = clasificarJugador(total)
        console.log(`${nombre}: ${nivel} (${total} puntos acertados)`);
    });
};

evaluarJugadores();


// Evaluar práctica de problemas de lógica
// Objetivo: Sumar la cantidad de ejercicios resueltos por estudiante y clasificarlos.

const clasificarEstudiantes = (totalEjercicios) => {
    switch (true) {
        case totalEjercicios > 50:
            return "Nivel experto";
        case totalEjercicios > 20:
            return "Nivel medio";
        default:
            return "Nivel novato";
    }
};
// fun.prin
const SumaCantidad = () => {
    const estudiantes = [
        { nombre: "Valen", ejercicios: [10, 15, 8] },
        { nombre: "Leo", ejercicios: [20, 25, 10] },
        { nombre: "Dana", ejercicios: [5, 3, 2] },
        { nombre: "Eli", ejercicios: [30, 25, 10] },
    ];
    estudiantes.forEach(({ nombre, ejercicios }) => {
        const total = ejercicios.reduce((suma, ejercicios) => suma + ejercicios, 0);
        const nivel = clasificarEstudiantes(total);
        console.log(`${nombre}: ${nivel} (${total} ejercicios resueltos)`)

    });

};
SumaCantidad();

/* 
Ejercicio 1: Clasificar productos según su stock total
Objetivo:
Dado un array de productos, cada uno con cantidades almacenadas en distintos depósitos, calcular el stock total por producto y clasificarlo según estas reglas:
Más de 100 → "Stock alto"
Más de 50 → "Stock medio"
50 o menos → "Stock bajo"
*/
const stockClasificados = (productclasi) => {
    switch (true) {
        case productclasi >= 100:
            return "Stock alto";
        case productclasi >= 50:
            return "Stock medio";
        default:
            return "Stock bajo";
    }
};

const stockTotal = () => {
    const productos = [
        { nombre: "Papel", cantidades: [30, 20, 10] },
        { nombre: "Tinta", cantidades: [50, 60, 20] },
        { nombre: "Cartón", cantidades: [15, 10, 5] },
        { nombre: "Cajas", cantidades: [80, 40, 10] },
    ];
    productos.forEach(({ nombre, cantidades }) => {
        const total = cantidades.reduce((suma, cantidades) => suma + cantidades, 0);
        const nivel = stockClasificados(total);
        console.log(`${nombre}: ${nivel} (${total} unidades)`);
    });
};
stockTotal();

/* 
Ejercicio 2: Clasificar estudiantes por promedio de notas
Objetivo:
Dado un array de estudiantes con varias notas, calcular el promedio por estudiante y clasificarlo:
Promedio mayor a 8 → "Excelente"
Mayor a 5 → "Bueno"
5 o menos → "Necesita mejorar"
*/
const clasiEstudiantes = (promediosEstu) => {
    switch (true) {
        case promediosEstu >= 8:
            return "Excelente";
        case promediosEstu >= 5:
            return "Bueno";
        default:
            return "Necesita mejorar"
    }
};
const promedioPorEstudiantes = () => {
    const estudiantes = [
        { nombre: "Luna", notas: [9, 8, 10] },
        { nombre: "Tomi", notas: [4, 6, 5] },
        { nombre: "Sofi", notas: [10, 9, 9] },
        { nombre: "Rami", notas: [3, 4, 2] },
    ];
    estudiantes.forEach(({ nombre, notas }) => {
        const total = notas.reduce((suma, notas) => suma + notas, 0);
        const promedio = total / notas.length;
        const clasificacion = clasiEstudiantes(promedio);
        console.log(`${nombre}: ${clasificacion} (Promedio: ${promedio.toFixed(1)})`)
    });
};
promedioPorEstudiantes();

/* 
Ejercicio 3: Clasificar ciudades por cantidad de turistas anuales
Objetivo:
Dado un array de ciudades con registros de turistas anuales, sumar los turistas y clasificar:
Más de 1.000.000 → "Muy turística"
Más de 500.000 → "Moderadamente turística"
Menos o igual → "Poco turística"
*/

const clasiTuristas = (clasturis) => {
    switch (true) {
        case clasturis >= 1000000:
            return "Muy turistica";
        case clasturis >= 500000:
            return "Moderadamente turistica"
        default:
            return "Poco turistica"
    }
};
const cantidadTuristas = () => {
    const ciudades = [
        { nombre: "Buenos Aires", turistas: [500000, 400000, 300000] },
        { nombre: "Salta", turistas: [200000, 100000, 150000] },
        { nombre: "Bariloche", turistas: [600000, 700000, 300000] },
        { nombre: "Mendoza", turistas: [300000, 250000, 200000] },
    ];
    ciudades.forEach(({ nombre, turistas }) => {
        const total = turistas.reduce((suma, turistas) => suma + turistas, 0);
        const categoria = clasiTuristas(total);
        console.log(`${nombre}: ${categoria} (${total.toLocaleString()} turistas)`);
    });
};
cantidadTuristas();

/* 
Ejercicio 4: Clasificar empleados por horas trabajadas al mes
Objetivo:
Dado un array de empleados con sus horas trabajadas por semana, calcular el total mensual (4 semanas) y clasificar:
Más de 160 horas → "Sobrecarga laboral"
Entre 121 y 160 → "Carga adecuada"
120 o menos → "Carga liviana"
*/

const clasificasionHoras = (hrstrab) => {
    switch (true) {
        case hrstrab >= 160:
            return "Sobrecarga laboral.";
        case hrstrab >= 121 && hrstrab <= 160:
            return "Carga adecuada.";
        default:
            return "carga liviana.";
    }
};
const horasTrabajadas = () => {
    const empleados = [
        { nombre: "Ana", horasSemanales: [40, 42, 41, 43] },
        { nombre: "Mario", horasSemanales: [30, 28, 32, 31] },
        { nombre: "Paz", horasSemanales: [45, 46, 44, 47] },
        { nombre: "Florencia", horasSemanales: [20, 18, 12, 11] },
        { nombre: "Luis", horasSemanales: [38, 39, 37, 40] },
    ];
    empleados.forEach(({ nombre, horasSemanales }) => {
        const total = horasSemanales.reduce((suma, horasSemanales) => suma + horasSemanales, 0);
        const clasificacion = clasificasionHoras(total);
        console.log(`${nombre}: ${clasificacion} (${total} horas mensuales)`)
    });
};
horasTrabajadas();

/* 
Ejercicio 5: Evaluar rendimiento de jugadores por partido
Objetivo:
Dado un array de jugadores con los puntos que hicieron en varios partidos, calcular el total y clasificar:
Más de 80 → "MVP"
Más de 50 → "Titular seguro"
Menos o igual → "Necesita mejorar"
*/

const clasifiJugadores = (totalPuntos) => {
    switch (true) {
        case totalPuntos > 80:
            return "MVP";
        case totalPuntos > 50:
            return "Titular seguro";
        default:
            return "Necesita mejorar";
    }
};
const evaluarcionDeJugadores = () => {
    const jugadores = [
        { nombre: "Lucas", puntos: [10, 15, 30, 22] },
        { nombre: "Emma", puntos: [10, 5, 7, 8] },
        { nombre: "Nico", puntos: [25, 30, 20, 15] },
        { nombre: "Clara", puntos: [40, 22, 30, 25] },
    ];
    jugadores.forEach(({ nombre, puntos }) => {
        const total = puntos.reduce((suma, puntos) => suma + puntos, 0);
        const rendimiento = clasifiJugadores(total);
        console.log(`${nombre}: ${rendimiento} (${total} puntos en total)`);
    });
};
evaluarcionDeJugadores();

/* 
Ejercicio 6: Clasificar series según su rating promedio
Objetivo:
Dado un array de series con ratings de usuarios, calcular el promedio y clasificar:
Promedio ≥ 9 → "Imperdible"
≥ 7 → "Buena"
Menos de 7 → "Regular"
*/

const clasifiSeries = (Seriesclasifi) => {
    switch (true) {
        case Seriesclasifi >= 9:
            return "imperdible";
        case Seriesclasifi >= 7:
            return "Buena";
        default:
            return "Regular";
    }
};

const promedioDeSeries = () => {
    const series = [
        { titulo: "Dark", ratings: [10, 9, 9.5, 10] },
        { titulo: "You", ratings: [6.5, 7, 6.8, 7.2] },
        { titulo: "Breaking Bad", ratings: [9.8, 9.9, 10, 9.5] },
        { titulo: "The Office", ratings: [8, 8.5, 7.9, 8.2] },
    ];
    series.forEach(({ titulo, ratings }) => {
        const total = ratings.reduce((suma, ratings) => suma + ratings, 0);
        const promedio = total / ratings.length;
        const clasificacion = clasifiSeries(promedio);
        console.log(`${titulo}: ${clasificacion} (Promedio: ${promedio.toFixed(2)})`)

    });
};
promedioDeSeries();


const clasificarPromedio = (promedio) => {
    switch (true) {
        case promedio >= 9:
            return "Excelente";
        case promedio >= 7:
            return "Bueno";
        default:
            return "Debe mejorar";
    }
};


// hacer

const evaluarEstudiantes = () => {
    const estudiantes = [
        {
            nombre: "Ana",
            materias: [
                { nombre: "Matemática", notas: [9, 10, 8.5] },
                { nombre: "Historia", notas: [8, 9, 10] }
            ]
        },
        {
            nombre: "Tomi",
            materias: [
                { nombre: "Matemática", notas: [6, 5, 7] },
                { nombre: "Historia", notas: [6.5, 6, 5] }
            ]
        },
        {
            nombre: "Luz",
            materias: [
                { nombre: "Matemática", notas: [10, 9.5, 9.5] },
                { nombre: "Historia", notas: [9, 10, 10] }
            ]
        }
    ];

    estudiantes.forEach(({ nombre, materias }) => {
        let totalNotas = 0;
        let cantidadNotas = 0;

        materias.forEach(({ notas }) => {
            totalNotas += notas.reduce((a, b) => a + b, 0);
            cantidadNotas += notas.length;
        });

        const promedio = totalNotas / cantidadNotas;
        const clasificacion = clasificarPromedio(promedio);
        console.log(`${nombre}: ${clasificacion} (Promedio: ${promedio.toFixed(2)})`);
    });
};

evaluarEstudiantes();


//--------------------------------------------------------------------------------------//  

/* 
Ejercicio 1: Clasificar edades de personas con grupos familiares
Explicación:
Cada persona pertenece a un grupo familiar con varios miembros. Vamos a evaluar a cada persona y a cada miembro del grupo, clasificando su edad.
*/

const clasificarEdades = (claedad) => {
    switch (true) { // Usa switch(true) para evaluar condiciones complejas
        case claedad < 18:
            return "Menor";
        case claedad <= 60:
            return "Adulto";
        default:
            return "Adulto mayor";
    }
};

const evaluarGruposFamiliares = () => { // Define la función principal que evaluará los grupos familiares
    const familias = [
        // Primera familia (objeto)
        {
            grupo: "Familia Pérez",  // Nombre del grupo familiar
            miembros: [ // Array de miembros de la familia
                { nombre: "Juan", edad: 15 },
                { nombre: "Laura", edad: 40 },
                { nombre: "Abuelo Pepe", edad: 75 }
            ]
        },
        // Segunda familia (objeto)
        {
            grupo: "Familia Gómez",  // Nombre del grupo familiar
            miembros: [ // Array de miembros
                { nombre: "Ana", edad: 20 },
                { nombre: "Miguel", edad: 65 }
            ]
        }
    ];
    // Recorre cada familia en el array familias
    familias.forEach(({ grupo, miembros }) => {
        // Imprime el nombre del grupo familiar entre líneas decorativas
        console.log(`--- ${grupo} ---`);
        // Recorre cada miembro de la familia actual
        miembros.forEach(({ nombre, edad }) => {
            // Clasifica la edad del miembro actual usando la función clasificarEdad
            const categorias = clasificarEdades(edad);
            // Imprime el nombre, categoría y edad del miembro
            console.log(`${nombre} es ${categorias} (Edad: ${edad})`);
        });
    });
};
// Ejecuta la función principal para iniciar el proceso
evaluarGruposFamiliares();


/* 
Explicación profunda del flujo:

PRIMER FOREACH (Familias):

- Itera sobre cada objeto familia en el array familias.

- Usa destructuración ({ grupo, miembros }) para extraer:

  - grupo: El nombre de la familia (ej: "Familia Pérez")

  - miembros: El array de objetos con los datos de cada miembro.




CONSOLE.LOG(--- ${grupo} ---):

- Crea un encabezado visual para cada familia.

- Ejemplo: --- Familia Pérez ---




SEGUNDO FOREACH (Miembros):

- Itera sobre cada miembro dentro del array miembros.

- Destructura ({ nombre, edad }) para obtener:

  - nombre: String con el nombre del miembro.

  - edad: Número con la edad del miembro.




CLASIFICAR(edad):

- La función recibe la edad numérica.

- Evalúa secuencialmente:

  - Si edad < 18 → Retorna "Menor".

  - Si no, pero edad <= 60 → Retorna "Adulto".

  - Cualquier otro caso → Retorna "Adulto Mayor".




CONSOLE.LOG() final:

- Combina los datos en un string legible usando template literals (`...`).

- Interpola:

  - ${nombre}: Nombre del miembro.

  - ${categoria}: Resultado de clasificarEdad.

  - ${edad}: Edad numérica.




EJEMPLO CONCRETO CON "Familia Pérez":

- Primer miembro: { nombre: "Juan", edad: 15 }

  - clasificarEdad(15) → "Menor".

  - Output: Juan es Menor (Edad: 15)




SEGUN MIEMBRO: { nombre: "Laura", edad: 40 }

- clasificarEdad(40) → "Adulto".

- Output: Laura es Adulto (Edad: 40)




TERCER MIEMBRO: { nombre: "Abuelo Pepe", edad: 75 }

- clasificarEdad(75) → "Adulto Mayor".

- Output: Abuelo Pepe es Adulto Mayor (Edad: 75)

¿Por qué usar forEach y no un for tradicional?




VENTAJAS:

- Más declarativo (se enfoca en el "qué" no en el "cómo").

- Maneja automáticamente los índices y la longitud del array.

- Combina bien con la destructuración. */


//--------------------------------------------------------------------------------------//

/* 
Ejercicio 2: Sumar números en conjuntos anidados y clasificar
Explicación:
Cada conjunto tiene varios subgrupos con arrays de números. Sumamos todos los números dentro de cada conjunto y lo clasificamos.
*/

const clasificarsuma = (total) => {
    switch (true) {
        case total >= 50:
            return "Alta";
        case total >= 20:
            return "Medio";
        default:
            return "Bajo";
    }
};

const evaluarConjuntosAnidados = () => {
    const conjuntos = [
        {
            nombre: "Conjunto 1",
            subgrupos: [
                [10, 20],
                [5, 15]
            ]
        },
        {
            nombre: "Conjunto 2",
            subgrupos: [
                [3, 4],
                [2, 3]
            ]
        }
    ];

    conjuntos.forEach(({ nombre, subgrupos }) => {
        let sumaTotal = 0;
        subgrupos.forEach(numeros => {
            sumaTotal += numeros.reduce((suma, numeros) => suma + numeros, 0);
        });
        const clasificacion = clasificarsuma(sumaTotal);
        console.log(`${nombre}: Suma total ${sumaTotal} - Clasificación: ${clasificacion}`)
    });
};
evaluarConjuntosAnidados();


/* 
Ejercicio 3: Evaluar productos con variantes y stock
Explicación:
Cada producto tiene variantes (por ejemplo, tamaños o colores), y cada variante tiene stock y precio. Evaluamos cada variante para determinar estado y precio.
*/

const clasificacionPrecios = (precio) => {
    switch (true) {
        case precio > 1000:
            return "Precio muy caro";
        case precio >= 500:
            return "Precio medio";
        default:
            return "precio barato"
    }
};

const evaluarVariantes = () => {
    const productos = [
        {
            nombre: "Laptop",
            variantes: [
                { tipo: "16GB RAM", stock: 3, precio: 1500 },
                { tipo: "8GB RAM", stock: 0, precio: 1200 }
            ]
        },
        {
            nombre: "Mouse",
            variantes: [
                { tipo: "Inalámbrico", stock: 0, precio: 250 },
                { tipo: "Inalámbrico", stock: 3, precio: 550 },
                { tipo: "Con cable", stock: 10, precio: 200 }
            ]
        }
    ];
    productos.forEach(({ nombre, variantes }) => {
        console.log(`----${nombre}----`)
        variantes.forEach(({ tipo, stock, precio }) => {
            const estadoStock = stock > 0 ? "en stock" : "Agotado";
            const precioClasificado = clasificacionPrecios(precio)
            console.log(`${tipo}: ${estadoStock} - Precio: ${precioClasificado} ($${precio})`)

        });
    });
};

evaluarVariantes();

/* 
Ejercicio 4: Evaluar usuarios con actividades por plataforma
Explicación:
Cada usuario tiene varias plataformas con posts y puntos. Se evalúa actividad y puntuación en cada plataforma.
*/

const evaluacionPuntaje = (puntaje) => {
    switch (true) {
        case puntaje >= 80:
            return "Destacado";
        case puntaje >= 50:
            return "Normal";
        default:
            return "Bajo";
    };
};

const evaluarPorPlataforma = () => {
    const usuarios = [
        {
            nombre: "Carlos",
            plataformas: [
                { nombre: "Facebook", posts: 12, puntos: 85 },
                { nombre: "Twitter", posts: 5, puntos: 40 }
            ]
        },
        {
            nombre: "Marta",
            plataformas: [
                { nombre: "Instagram", posts: 7, puntos: 45 },
                { nombre: "LinkedIn", posts: 15, puntos: 70 }
            ]
        }
    ];

    usuarios.forEach(({ nombre, plataformas }) => {
        console.log(`--- Usuario: ${nombre} ---`);
        plataformas.forEach(({ nombre: plataforma, posts, puntos }) => {
            const actividad = posts > 10 ? "Activo" : "Inactivo";
            const nivelPuntuacion = evaluacionPuntaje(puntos);
            console.log(`${plataforma}: ${actividad} - Puntuación: ${nivelPuntuacion} (${puntos} puntos)`);
        });
    });
};

evaluarPorPlataforma();


// OPERADOR TERNAREO.

let num1 = 32

num1 >= 18 ? console.log("usted puede") : console.log("Usted No puede");






let obj1 = { a: 1 };
let obj2 = obj1; // ¡Esto es una referencia, no una copia!



/* 
Ejercicio 5: Clasificar empleados por asistencia y rendimiento
Explicación:
Cada empleado tiene registros de asistencia y puntaje de rendimiento. Se debe clasificar según su constancia (días trabajados) y su desempeño (puntos).
*/

const clasificacionDeAsistencia = (rendimiento) => {
    if (rendimiento > 90) return "Excelente";
    if (rendimiento > 70) return "Bueno";
    return "Regular"
};

const evaluarEmpleados = () => {
    const empleados = [
        {
            nombre: "Lucía",
            asistencia: 22,
            puntos: 95
        },
        {
            nombre: "Tomás",
            asistencia: 15,
            puntos: 72
        },
        {
            nombre: "Andrea",
            asistencia: 8,
            puntos: 60
        }
    ];

    empleados.forEach(({ nombre, asistencia, puntos }) => {
        const constancia = asistencia >= 20 ? "Constante" : (asistencia >= 10 ? "Intermitente" : "Poca asistencia");
        const rendimiento = clasificacionDeAsistencia(puntos);
        console.log(`Empleado: ${nombre} - Asistencia: ${constancia} - Rendimiento: ${rendimiento} (${puntos} puntos)`);

    });
};

evaluarEmpleados();


/* 
Ejercicio 6: Verificar entregas de proyectos y su calidad
Explicación:
Cada estudiante entrega proyectos con una calificación y cantidad de días de entrega. Se evalúa si entregó a tiempo y qué tan buena fue su calidad.
*/

const evaluarCalidad = (nota) => {
    if (nota >= 8) return "Alta";
    if (nota >= 6) return "Media";
    return "Baja";
};

const analizaEntregas = () => {
    const estudiantes = [
        {
            nombre: "Valeria",
            entregas: [
                { proyecto: "App móvil", diasRetraso: 0, nota: 9 },
                { proyecto: "Sitio web", diasRetraso: 3, nota: 7 }
            ]
        },
        {
            nombre: "Pablo",
            entregas: [
                { proyecto: "Base de datos", diasRetraso: 5, nota: 6 },
                { proyecto: "API REST", diasRetraso: 0, nota: 4 }
            ]
        }
    ];

    estudiantes.forEach(({ nombre, entregas }) => {
        console.log(`--- Estudiante: ${nombre} ---`)
        entregas.forEach(({ proyecto, diasRetraso, nota }) => {
            const tiempo = diasRetraso === 0 ? "A tiempo" : "Fuera de tiempo";
            const calidad = evaluarCalidad(nota);
            console.log(`${proyecto}: ${tiempo} - Calidad: ${calidad} (${nota})`)
        });
    });
};

analizaEntregas();

/* 
Ejercicio 7: Evaluar hábitos de lectura por mes
Explicación:
Cada lector tiene un registro mensual de libros leídos y horas dedicadas. Se analiza si lee con frecuencia y si le dedica tiempo suficiente.
*/

const horasDedicadas = (horas) => {
    if (horas >= 20) return "Intensiva";
    if (horas >= 10) return "Moderada";
    return "Baja";
};

const AnalizandoLectores = () => {
    const lectores = [
        {
            nombre: "Julián",
            meses: [
                { mes: "Enero", libros: 5, horas: 22 },
                { mes: "Febrero", libros: 2, horas: 8 }
            ]
        },
        {
            nombre: "Natalia",
            meses: [
                { mes: "Enero", libros: 3, horas: 12 },
                { mes: "Febrero", libros: 4, horas: 18 }
            ]
        }
    ];

    lectores.forEach(({ nombre, meses }) => {
        console.log(`--- Lector: ${nombre} ---`);
        meses.forEach(({ mes, libros, horas }) => {
            const frecuencia = libros >= 4 ? "frecuente" : "Ocasional";
            const dedicacion = horasDedicadas(horas);
            console.log(`${mes}: Lectura ${frecuencia} - Dedicación: ${dedicacion} (${horas}h)`);
        });
    });
};

AnalizandoLectores();


/* 
Calcular promedios y detectar estudiantes destacados
Explicación:
Cada estudiante tiene una lista de notas. Se debe calcular el promedio y marcar si es “Destacado” (si el promedio es mayor a 8).
*/

const evaluarPromedios = () => {
    const estudiantes = [
        { nombre: "Ana", notas: [9, 8, 10, 7] },
        { nombre: "Luis", notas: [5, 6, 6, 7] },
        { nombre: "Clara", notas: [10, 9, 9, 10] }
    ];

    estudiantes.forEach(({ nombre, notas }) => {
        const suma = notas.reduce((suma, notas) => suma + notas, 0);
        const promedio = suma / notas.length;
        const estado = promedio >= 7 ? "Aprobado" : "Reprobado";
        console.log(`${nombre} - Promedio: ${promedio.toFixed(2)} - Estado: ${estado}`);

    });
};

evaluarPromedios();

/* 
Ejercicio 9: Filtrar productos en oferta y calcular descuento
Explicación:
Hay una lista de productos con su precio y si están en oferta. Si están en oferta, se calcula el precio con 20% de descuento y se imprime.
*/

const filtrarOfertas = () => {
    const productos = [
        { nombre: "Monitor", precio: 200, oferta: true },
        { nombre: "Teclado", precio: 50, oferta: false },
        { nombre: "Mouse", precio: 30, oferta: true },
        { nombre: "Notebook", precio: 900, oferta: false }
    ];

    productos.forEach(({ nombre, precio, oferta }) => {
        if (oferta) {
            const precioFinal = precio * 0.8;
            console.log(`${nombre} en oferta: $${precioFinal.toFixed(2)} (precio original: $${precio})`)
        }
    });
};

filtrarOfertas();


/* 
Ejercicio 10: Simular recuento de votos por candidato
Explicación:
Dado un arreglo con votos (cada voto es el nombre de un candidato), se debe contar cuántos votos tiene cada uno y mostrar los resultados.
*/


const contarVotos = () => {
    const votos = [
        "Ana", "Luis", "Ana", "Carlos", "Ana", "Luis", "Carlos", "Luis", "Carlos", "Ana"
    ];

    const resultados = {}

    votos.forEach((nombre) => {
        resultados[nombre] = (resultados[nombre] || 0) + 1;

    });

    console.log(`Resultados de la votación:`);
    for (const candidato in resultados) {
        console.log(`${candidato}: ${resultados[candidato]} voto(s)`);

    }
};

contarVotos();

/* 
Ejercicio 1: Evaluar Rendimiento de Estudiantes
Objetivo:
Dado un array de estudiantes con materias y notas, se debe determinar el rendimiento por materia usando una función auxiliar.
*/

const clasificarNota = (nota) => {
    if (nota >= 9) return "Excelente Aprobado";
    if (nota >= 7) return "Bueno Aprobado"
    return "Desaprobado";
};

const evaluarEst = () => {
    const estudiantes = [
        {
            nombre: "Martina",
            materias: [
                { materia: "Matemática", nota: 9 },
                { materia: "Historia", nota: 6 }
            ]
        },
        {
            nombre: "Lucas",
            materias: [
                { materia: "Matemática", nota: 7 },
                { materia: "Historia", nota: 8 }
            ]
        }
    ];

    estudiantes.forEach(({ nombre, materias }) => {
        console.log(`----${nombre}----`);
        materias.forEach(({ materia, nota }) => {
            const clasificacion = clasificarNota(nota);
            console.log(`${materia}: ${clasificacion} (${nota})`);
        });
    });
};

evaluarEst();

/* 
Ejercicio 2: Analizar Producción de Artistas
Objetivo:
Dado un array de artistas con meses de trabajo, mostrar cuántas obras hicieron por mes y clasificar su productividad.
*/

const clasificarProduccion = (obras) => {
    if (obras >= 5) return "Alta";
    if (obras >= 2) return "Media";
    return "Baja";
};

const analizarProduccion = () => {
    const artistas = [
        {
            nombre: "Sofía",
            meses: [
                { mes: "Marzo", obras: 6 },
                { mes: "Abril", obras: 3 }
            ]
        },
        {
            nombre: "Tomás",
            meses: [
                { mes: "Marzo", obras: 1 },
                { mes: "Abril", obras: 5 }
            ]
        }
    ];

    artistas.forEach(({ nombre, meses }) => {
        console.log(`--- ${nombre}`);
        meses.forEach(({ mes, obras }) => {
            const nivel = clasificarProduccion(obras);
            console.log(`${mes}: ${obras} obras - Productividad ${nivel}`);
        });
    });
};

analizarProduccion();

/* 
Ejercicio 3: Seguimiento de Entrenamiento Semanal
Objetivo:
Dado un grupo de personas con registros de entrenamiento, mostrar el nivel de constancia semanal según los días entrenados.
*/

const evaluarConstancia = (dias) => {
    if (dias >= 5) return "Constante";
    if (dias >= 3) return "Intermedia";
    return "Baja";
};

const seguirEntreno = () => {
    const personas = [
        {
            nombre: "Agustina",
            semanas: [
                { semana: "1ª", dias: 6 },
                { semana: "2ª", dias: 2 }
            ]
        },
        {
            nombre: "Diego",
            semanas: [
                { semana: "1ª", dias: 4 },
                { semana: "2ª", dias: 5 }
            ]
        }
    ];

    personas.forEach(({ nombre, semanas }) => {
        console.log(`--- ${nombre}---`);
        semanas.forEach(({ semana, dias }) => {
            const constancia = evaluarConstancia(dias);
            console.log(`${semana} semana: ${dias} días - Nivel: ${constancia}`);
        });
    });
};

seguirEntreno();

/* 
Ejercicio 4: Evaluar Avance de Proyectos por Empleado
Objetivo:
Cada empleado tiene varios proyectos, y cada proyecto tiene tareas. Se debe mostrar el estado del proyecto según la cantidad de tareas completadas.
*/

const clasificarAvance = (completadas, total) => {
    const porcentaje = (completadas / total) * 100;
    if (porcentaje >= 80) return "Avance alto";
    if (porcentaje >= 50) return "Avance medio";
    return "Avance bajo";
};

const EvaluarProyectos = () => {
    const empleados = [
        {
            nombre: "Valeria",
            proyectos: [
                {
                    nombre: "Sistema A",
                    tareas: [
                        { tarea: "Login", completada: true },
                        { tarea: "Base de datos", completada: true },
                        { tarea: "Frontend", completada: false }
                    ]
                },
                {
                    nombre: "Sistema B",
                    tareas: [
                        { tarea: "API", completada: true },
                        { tarea: "Testing", completada: true }
                    ]
                }
            ]
        },
        {
            nombre: "Ezequiel",
            proyectos: [
                {
                    nombre: "App móvil",
                    tareas: [
                        { tarea: "Pantalla inicio", completada: false },
                        { tarea: "Login", completada: false },
                        { tarea: "Registro", completada: false }
                    ]
                }
            ]
        }
    ];

    empleados.forEach(({ nombre, proyectos }) => {
        console.log(`--- Empleado: ${nombre} ---`);
        proyectos.forEach(({ nombre: proyectoNombre, tareas }) => {
            const total = tareas.length;
            const completadas = tareas.filter(t => t.completada).length;
            const estado = clasificarAvance(completadas, total);
            console.log(`Proyecto "${proyectoNombre}": ${completadas}/${total} tareas completadas - ${estado}`);
        });
    });
};

EvaluarProyectos();


/* 
Objetivo:

Analizar una lista de empleados y sus proyectos para determinar el avance en cada uno de ellos, basándote en las tareas completadas. Usar estructuras anidadas (arrays de objetos) y lógica condicional para clasificar el progreso.

Requisitos:

- Cada empleado tiene uno o más proyectos.
- Cada proyecto tiene una lista de tareas, y cada tarea puede estar o no completada (true o false).
- Clasificar el nivel de avance de cada proyecto:
- Avance alto: 80% o más de tareas completadas.
- Avance medio: entre 50% y 79%.
- Avance bajo: menos del 50%.
- Mostrar por consola el nombre del empleado, el nombre del proyecto, cantidad de tareas completadas, total de tareas, y el estado del avance.
*/

const clasificacionAvance = (completadas, total) => { // Toma 2 números: tareas completadas y total de tareas
    const porcentaje = (completadas / total) * 100
    if (porcentaje >= 80) return "Avance alto";
    if (porcentaje >= 50) return "Avance medio";
    return "Avance bajo";
};

const evaluarProyectos = () => {
    const empleados = [
        {
            nombre: "Valeria",
            proyectos: [
                {
                    nombre: "Sistema A",
                    tareas: [
                        { tarea: "Login", completada: true },
                        { tarea: "Base de datos", completada: true },
                        { tarea: "Frontend", completada: false }
                    ]
                },
                {
                    nombre: "Sistema B",
                    tareas: [
                        { tarea: "API", completada: true },
                        { tarea: "Testing", completada: true }
                    ]
                }
            ]
        },
        {
            nombre: "Ezequiel",
            proyectos: [
                {
                    nombre: "App móvil",
                    tareas: [
                        { tarea: "Pantalla inicio", completada: false },
                        { tarea: "Login", completada: false },
                        { tarea: "Registro", completada: false }
                    ]
                }
            ]
        }
    ];

    empleados.forEach(({ nombre, proyectos }) => { // empleados.forEach: Itera cada empleado
        console.log(`---${nombre}---`);
        proyectos.forEach(({ nombre: proyectos, tareas }) => { // ({ nombre, proyectos }): Desestructuración (extrae nombre y proyectos) // proyectos.forEach: Itera cada proyecto del empleado
            const total = tareas.length;
            const completadas = tareas.filter(t => t.completada).length; //tareas.filter(t => t.completada): Filtra tareas completadas
            const estado = clasificacionAvance(completadas, total); // Llama a clasificarAvance con los contadores
            console.log(`Proyecto "${proyectos}": ${completadas}/${total} tareas completadas - ${estado}`);
        });
    });
};

evaluarProyectos();

/* 
Ejercicio: Evaluar el desempeño de estudiantes por materia

Objetivo:
Analizar una lista de estudiantes con sus materias y sus notas. Para cada materia, calcular el promedio de notas y clasificar el rendimiento del estudiante en esa materia.

Requisitos:

- Cada estudiante tiene varias materias.
- Cada materia tiene un array de notas numéricas.
- Clasificar el rendimiento de la materia según el promedio:
- 📘 Excelente: si el promedio es mayor o igual a 9.
- 📘 Bueno: si el promedio es entre 7 y 8.99.
- 📘 Debe mejorar: si el promedio es menor a 7.

Mostrar por consola el nombre del estudiante, el nombre de la materia, el promedio de notas y su rendimiento.

🧩 Ayuda: El promedio se calcula sumando las notas y dividiendo por la cantidad.
🧪 Usá reduce() para sumar las notas.
*/

const clasifiPromedio = (promedio) => {
    if (promedio >= 9) return "Aprobado";
    if (promedio >= 7) return "Regular aprobado";
    return "Reprobado";
};

const evaluarEstud = () => {
    const estudiantes = [
        {
            nombre: "Ana",
            materias: [
                { nombre: "Matemática", notas: [10, 9, 9] },
                { nombre: "Historia", notas: [8, 7, 8] }
            ]
        },
        {
            nombre: "Bruno",
            materias: [
                { nombre: "Geografía", notas: [6, 7] }
            ]
        }
    ];

    estudiantes.forEach(({ nombre, materias }) => {
        console.log(`---${nombre}---`);
        materias.forEach(({ nombre: materias, notas }) => {
            const total = notas.reduce((suma, notas) => suma + notas, 0);
            const promedio = total / notas.length;
            const rendimiento = clasifiPromedio(promedio);
            console.log(`Materia "${materias}": promedio ${promedio.toFixed(2)} - ${rendimiento}`);
        });
    });
};

evaluarEstud();

/* 
Ejercicio: Evaluar rendimiento de empleados en sus ventas

Objetivo:
Analizar una lista de empleados, donde cada uno tiene una lista de productos vendidos. Para cada producto, se registran los montos de venta. Calcular el promedio de ventas por producto y clasificar el rendimiento según ese promedio.

Requisitos:

- Cada empleado tiene varios productos vendidos.
- Cada producto tiene un array de montos de ventas (ventas: [valor1, valor2, ...]).
- Calcular el promedio de esas ventas.
- Clasificar el rendimiento del producto:
- Alto rendimiento: promedio de ventas ≥ 1000
- Rendimiento medio: entre 500 y 999
- Bajo rendimiento: menos de 500
- Mostrar por consola:
- Nombre del empleado
- Nombre del producto
- Promedio de ventas
- Clasificación de rendimiento
*/

const clasifiRendimiento = (promedio) => {
    if (promedio >= 1000) return "Alto Rendimiento";
    if (promedio >= 500) return "Rendimiento Regular"
    return "Rendimiento Bajo";
};

const promedioDeVentas = () => {
    const empleados = [
        {
            nombre: "Camila",
            productos: [
                { nombre: "Notebook", ventas: [1200, 1300, 1250] },
                { nombre: "Tablet", ventas: [800, 750, 850] }
            ]
        },
        {
            nombre: "Marcos",
            productos: [
                { nombre: "Auriculares", ventas: [400, 500] }
            ]
        }
    ];

    empleados.forEach(({ nombre, productos }) => {
        console.log(`---${nombre}---`);
        productos.forEach(({ nombre: productos, ventas }) => {
            const total = ventas.reduce((suma, ventas) => suma + ventas, 0);
            const promedio = total / ventas.length;
            const rendimiento = clasifiRendimiento(promedio);
            console.log(`Producto "${productos}": promedio $${promedio.toFixed(2)} - ${rendimiento}`);
        });
    });
};

promedioDeVentas();

/* 
Ejercicio: Evaluar calidad de productos según calificaciones

Objetivo:
Analizar una lista de productos y sus calificaciones de usuarios para determinar el promedio de calidad y clasificar el nivel de satisfacción.

Requisitos:
Cada producto tiene un nombre y un array de calificaciones ([1, 2, 3, 4, 5]).

- Calcular el promedio de esas calificaciones.
- Clasificar el producto según su promedio:

- Excelente: si el promedio es mayor o igual a 4.5
- Bueno: si el promedio está entre 3 y 4.49
- Regular: si el promedio es menor a 3

- Mostrar por consola:
- Nombre del producto
- Promedio de calificaciones
- Nivel de calidad
*/

const calcularcarSatisfaccion = (promedio) => {
    if (promedio >= 4.5) return "Excelente";
    if (promedio >= 3) return "Bueno";
    return "Reegular";
};

const calcularCalidad = () => {
    const productos = [
        {
            nombre: "Smartphone",
            calificaciones: [5, 4, 5]
        },
        {
            nombre: "Mouse inalámbrico",
            calificaciones: [3, 4, 3]
        },
        {
            nombre: "Cargador universal",
            calificaciones: [2, 3, 3]
        }
    ];

    productos.forEach(({ nombre, calificaciones }) => {
        const total = calificaciones.reduce((suma, calificaciones) => suma + calificaciones, 0);
        const promedio = total / calificaciones.length;
        const calidad = calcularcarSatisfaccion(promedio);
        console.log(`Producto "${nombre}": promedio ${promedio.toFixed(2)} - ${calidad}`);
    });
};

calcularCalidad();

/* 
Ejercicio 1: Clasificar progreso de cursos de estudiantes
Objetivo: Para cada estudiante, mostrar el avance de sus cursos según las clases vistas.

Descripción:
Cada estudiante está inscripto en varios cursos, y cada curso tiene una lista de clases. 
Algunas clases ya fueron vistas (true) y otras no (false). 
Debés mostrar cuántas clases completó en cada curso y el nivel de avance 
(alto, medio o bajo) usando la misma
lógica del ejemplo original.
*/

const clasificarAvances = (clasesVistas, totalClases) => { // Recibe: clases vistas y total de clases
    const porcentaje = (clasesVistas / totalClases) * 100; // Calcula porcentaje de avance
    if (porcentaje >= 80) return "Avance Alto"; // ≥80% → Alto
    if (porcentaje >= 50) return "Avance Medio"; // ≥50% → Medio
    return "Avance Bajo"; // <50% → Bajo
};

const evaluarAvance = () => {
    const estudiantes = [  // Datos de estudiantes 
        {
            nombre: "Lucía",
            cursos: [
                {
                    nombre: "HTML",
                    clases: [true, true, false, true]
                },
                {
                    nombre: "CSS",
                    clases: [true, false]
                }
            ]
        },
        {
            nombre: "Martín",
            cursos: [
                {
                    nombre: "JavaScript",
                    clases: [false, false, false]
                }
            ]
        }
    ]; // Array de objetos con estudiantes y cursos

    estudiantes.forEach(({ nombre, cursos }) => { // Itera cada estudiante Primer forEach: Recorre estudiantes e imprime su nombre.
        console.log(`---Estudiante: ${nombre}---`); // Imprime nombre del estudiante
        cursos.forEach(({ nombre: cursos, clases }) => { // Itera cada curso del estudiante.
            // -Segundo forEach: Por cada curso, cuenta clases totales/vistas, clasifica el avance y lo muestra.
            const total = clases.length; // Total de clases en el curso
            const vistas = clases.filter(clase => clase).length; // Clases vistas (true)

            /* 
            ¿Qué hace filter?
            Filtra elementos de un array según una condición.
            Retorna un nuevo array solo con los elementos que cumplen la condición.
            
            clase => clase (Función de Filtro)
            clase: Cada elemento del array clases (puede ser true o false).
            clase => clase:
            
            Si clase es true, la condición se cumple y se incluye en el nuevo array.
            Si clase es false, se excluye.
            */

            const estado = clasificarAvances(vistas, total); // Clasifica avance
            console.log(`Curso "${cursos}": ${vistas}/${total} clases vistas - ${estado}`); // Resultado
        });
    });
};

evaluarAvance(); // Ejecuta la función

// ----------- O ------------ //

// Variantes Post-forEach (Resumen):

//- map: Si necesitas crear un nuevo array con los resultados.
//- reduce: Para sumarizar datos (ej: total de clases vistas).
//- for...of: Si requieres mayor control (usar break/continue).
//- some/every: Para validar condiciones (ej: ¿Alguien completó todo?).

// ----------- O ------------ //



/* 
Ejercicio 2: Medir avance de reparación de vehículos
Objetivo: Evaluar cuánto avanzó cada mecánico en la reparación de cada vehículo.

Descripción:
Cada mecánico tiene varios vehículos asignados, y cada vehículo tiene una lista de reparaciones (con estado "hecha" o no). Se debe mostrar el avance por vehículo.
*/

const clasifiReparacionVehiculos = (reparacion, total) => {
    const porcentaje = (reparacion / total) * 100;
    if (porcentaje >= 80) return "Avance Alto";
    if (porcentaje >= 50) return "Avance Medio";
    return "Avance Bajo";
};

const evaluarMecanicos = () => {
    const mecanicos = [
        {
            nombre: "Carlos",
            vehiculos: [
                {
                    modelo: "Ford Focus",
                    reparaciones: [
                        { tarea: "Frenos", hecha: true },
                        { tarea: "Motor", hecha: false },
                        { tarea: "Luces", hecha: true }
                    ]
                }
            ]
        },
        {
            nombre: "Marta",
            vehiculos: [
                {
                    modelo: "Peugeot 208",
                    reparaciones: [
                        { tarea: "Suspensión", hecha: true },
                        { tarea: "Aceite", hecha: true },
                        { tarea: "Batería", hecha: true },
                        { tarea: "Neumáticos", hecha: false }
                    ]
                }
            ]
        }
    ];

    mecanicos.forEach(({ nombre: nombre, vehiculos }) => {
        console.log(`Mecanicos: ${nombre}`);
        vehiculos.forEach(({ modelo, reparaciones }) => {
            const total = reparaciones.length;
            const hechas = reparaciones.filter(r => r.hecha).length;
            const estado = clasifiReparacionVehiculos(hechas, total);
            console.log(`Vehículo "${modelo}": ${hechas}/${total} tareas hechas - ${estado}`);
        });
    });
};

evaluarMecanicos();


/* 
Ejercicio 3: Seguimiento de pedidos en preparación por operario
Objetivo: Verificar el porcentaje de preparación de productos por pedido y por operario.

Descripción:
Cada operario prepara varios pedidos, y cada pedido tiene productos (con estado listo: true/false). Mostrar cuántos productos están listos y la clasificación del avance por pedido.
*/

const clasificacionPorPedido = (listos, total) => {
    const porcentaje = (listos / total) * 100;
    if (porcentaje >= 80) return "Avance Alto";
    if (porcentaje >= 50) return "Avance Medio";
    return "Avance Bajo";
};

const ClasAvance = () => {
    const operarios = [
        {
            nombre: "Laura",
            pedidos: [
                {
                    codigo: "PED-001",
                    productos: [
                        { nombre: "Notebook", listo: true },
                        { nombre: "Mouse", listo: true },
                        { nombre: "Teclado", listo: false }
                    ]
                },
                {
                    codigo: "PED-002",
                    productos: [
                        { nombre: "Monitor", listo: true },
                        { nombre: "Cable HDMI", listo: true },
                        { nombre: "Estabilizador", listo: true },
                        { nombre: "Gabinete", listo: false }
                    ]
                }
            ]
        }
    ];

    operarios.forEach(({ nombre, pedidos }) => {
        console.log(`---OPERARIOS: ${nombre}`);
        pedidos.forEach(({ codigo, productos }) => {
            const total = productos.length;
            const hechos = productos.filter(p => p).length;
            const estado = clasificacionPorPedido(hechos, total);
            console.log(`Pedido "${codigo}": ${hechos}/${total} productos listos - ${estado}`);
        });
    });
};

ClasAvance();

/* 
Ejercicio 2: Evaluación de tareas de mantenimiento por técnico
Objetivo:
Evaluar el porcentaje de tareas completadas en distintos edificios asignados a un técnico.

Descripción:
Cada técnico tiene a su cargo varios edificios. Cada edificio tiene tareas con completada: true/false.
Se debe calcular cuántas tareas están completas por edificio y clasificar el nivel de avance.
*/

const porcentajeTareasCompletadas = (completadas, total) => {
    const porcentaje = (completadas / total) * 100
    if (porcentaje >= 80) return "Avance Alto";
    if (porcentaje >= 50) return "Avance Medio"
    return "Avance Bajo"
};

const tareasCompletadas = () => {
    const tecnicos = [
        {
            nombre: "Elena",
            edificios: [
                {
                    nombre: "Torre Norte",
                    tareas: [
                        { descripcion: "Revisión eléctrica", completada: true },
                        { descripcion: "Revisión gas", completada: false },
                        { descripcion: "Limpieza tanque", completada: true }
                    ]
                },
                {
                    nombre: "Torre Sur",
                    tareas: [
                        { descripcion: "Cambio luces", completada: true },
                        { descripcion: "Pintura pasillo", completada: true }
                    ]
                }
            ]
        }
    ];

    tecnicos.forEach(({ nombre, edificios }) => {
        console.log(`Nombre: ${nombre}`);
        edificios.forEach(({ nombre: edificio, tareas }) => {
            const total = tareas.length;
            const completadas = tareas.filter(t => t.completada).length;
            const estado = porcentajeTareasCompletadas(completadas, total);
            console.log(`Edificio "${edificio}": ${completadas}/${total} tareas completas - ${estado}`);
        });
    });
};

tareasCompletadas();

/* 
Ejercicio 1: Evaluar el avance de mantenimiento por zonas
Objetivo: Dado un listado de operarios, cada uno con varias zonas y tareas en esas zonas, calcular el porcentaje de tareas completadas en cada zona y clasificar el avance.
*/

const clasificarAvancess = (tareasCompletadas, totalTareas) => {
    const porcentaje = (tareasCompletadas / totalTareas) * 100;
    if (porcentaje >= 80) return "Avance Alto";
    if (porcentaje >= 50) return "Avance Medio";
    return "Avance Bajo";
};

const porcentajeTerminado = () => {
    const tecnicos = [
        {
            nombreTecnico: "Carlos",
            zonasAsignadas: [
                {
                    nombreZona: "Zona A",
                    tareas: [
                        { nombreTarea: "Cambio de filtro", estaCompleta: true },
                        { nombreTarea: "Revisión de bomba", estaCompleta: false },
                        { nombreTarea: "Limpieza de ducto", estaCompleta: true }
                    ]
                },
                {
                    nombreZona: "Zona B",
                    tareas: [
                        { nombreTarea: "Pintura de pared", estaCompleta: true },
                        { nombreTarea: "Chequeo de sensores", estaCompleta: true }
                    ]
                }
            ]
        }
    ];

    tecnicos.forEach(({ nombreTecnico, zonasAsignadas }) => {
        console.log(`---Nombre Tecnico: ${nombreTecnico}`);
        zonasAsignadas.forEach(({ nombreZona, tareas }) => {
            const totalTareas = tareas.length;
            const tareasCompletadas = tareas.filter(tareas => tareas.estaCompleta).length;

            /* 
            (const tareasCompletadas = tareas.filter(tareas => tareas.estaCompleta).length;)
            
            filter es un método de los arrays en JavaScript que crea un nuevo array con todos los elementos que pasan una prueba (implementada por la función proporcionada).
            
            Filtra el array tareas según la condición que le pasemos.
            
            tareas => tareas.estaCompleta:
            
            Esta es una función flecha que se ejecuta para cada elemento del array.
            Para cada tarea (tareas), verifica si la propiedad estaCompleta es verdadera.
            Solo las tareas donde estaCompleta sea true pasarán el filtro.
            
            .length:
            Después de filtrar, obtenemos un nuevo array solo con las tareas completadas.
            length nos da la cantidad de elementos en ese array filtrado. 
            */

            const clasificacionTotal = clasificarAvancess(tareasCompletadas, totalTareas);
            console.log(`Zona "${nombreZona}": ${tareasCompletadas}/${totalTareas} tareas completas - ${clasificacionTotal}`);
        });
    });
};

porcentajeTerminado();



/* 
Ejercicio 2: Clasificar nivel de stock de productos por depósito
Descripción:
Una supervisora controla varios depósitos y revisa el estado de productos disponibles. Según cuántos productos estén disponibles en cada depósito, se clasifica el nivel de stock.
*/

const clasifiStock = (disponibles, total) => {
    const porcentaje = (disponibles / total) * 100;
    if (porcentaje >= 80) return "Stock Alto";
    if (porcentaje >= 50) return "Stock Medio";
    return "Stock Bajo";
};

const productosPorDeposito = () => {
    const supervisoras = [
        {
            nombreSupervisora: "Lucía",
            depositos: [
                {
                    nombreDeposito: "Depósito Central",
                    productos: [
                        { nombreProducto: "Tornillos", estaDisponible: true },
                        { nombreProducto: "Tuercas", estaDisponible: true },
                        { nombreProducto: "Cables", estaDisponible: false }
                    ]
                },
                {
                    nombreDeposito: "Depósito Norte",
                    productos: [
                        { nombreProducto: "Bombas", estaDisponible: false },
                        { nombreProducto: "Fusibles", estaDisponible: false }
                    ]
                }
            ]
        },
        {
            nombreSupervisora: "Juan",
            depositos: [
                {
                    nombreDeposito: "Depósito Central 1",
                    productos: [
                        { nombreProducto: "Tornillos", estaDisponible: true },
                        { nombreProducto: "Tuercas", estaDisponible: true },
                        { nombreProducto: "Cables", estaDisponible: true }
                    ]
                },
                {
                    nombreDeposito: "Depósito Norte 2",
                    productos: [
                        { nombreProducto: "Bombas", estaDisponible: false },
                        { nombreProducto: "Fusibles", estaDisponible: true }
                    ]
                }
            ]
        },
        {
            nombreSupervisora: "Lucía",
            depositos: [
                {
                    nombreDeposito: "Depósito Central 3",
                    productos: [
                        { nombreProducto: "Tornillos", estaDisponible: true },
                        { nombreProducto: "Tuercas", estaDisponible: true },
                        { nombreProducto: "Cables", estaDisponible: false }
                    ]
                },
                {
                    nombreDeposito: "Depósito Norte 4",
                    productos: [
                        { nombreProducto: "Bombas", estaDisponible: false },
                        { nombreProducto: "Fusibles", estaDisponible: false }
                    ]
                }
            ]
        },
        {
            nombreSupervisora: "Lucía",
            depositos: [
                {
                    nombreDeposito: "Depósito Central 5",
                    productos: [
                        { nombreProducto: "Tornillos", estaDisponible: false },
                        { nombreProducto: "Tuercas", estaDisponible: false },
                        { nombreProducto: "Cables", estaDisponible: false }
                    ]
                },
                {
                    nombreDeposito: "Depósito Norte 6",
                    productos: [
                        { nombreProducto: "Bombas", estaDisponible: true },
                        { nombreProducto: "Fusibles", estaDisponible: true }
                    ]
                }
            ]
        }
    ];

    supervisoras.forEach(({ nombreSupervisora, depositos }) => {
        console.log(`-- Nombres Supervisoras: ${nombreSupervisora}`);
        depositos.forEach(({ nombreDeposito, productos }) => {
            const total = productos.length;
            const disponibles = productos.filter(p => p.estaDisponible).length;
            const nivelStock = clasifiStock(disponibles, total);
            console.log(`Depósito "${nombreDeposito}": ${disponibles}/${total} productos disponibles - ${nivelStock}`);

        });
    });
};

productosPorDeposito();




























































































