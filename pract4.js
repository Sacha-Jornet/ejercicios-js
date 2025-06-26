// ESTUDIANDO JAVA SCRIPT TODOS LOS CONCEPTOS DE LOS TEMAS DE LA GUIA:
// (GUIA DEFINITIVA TOTAL DE JS)

/* 
Bucles: for, while.

Dame conceptos de JAVA SCRIPT:
- Bríndame un concepto general de los elementos para aprender de que tratan.
- sus tipos y variantes mas usados.
- cortos prácticos 
- solo texto 
- cuando se usa cada uno
- para que se utilizan cada uno
- cuando si y no se usan
- explicaciones para Nivel programador Junior.

*/


// function (this dinámico)  
const persona = {
    nombre: "Ana",
    saludar: function () {
        console.log("Hola, soy " + this.nombre); // "Hola, soy Ana"  
    }
};

// Arrow function (this léxico)  
const personas = {
    nombre: "Ana",
    saludar: () => {
        console.log("Hola, soy " + this.nombre); // Error: this no es personas 
    }
};


// CALLBACK.

function saludar(nombre) {
    console.log("Hola " + nombre);
}

function procesarUsuario(callback) {
    const nombre = "Juan";
    callback(nombre); // llama a la función saludar
}

procesarUsuario(saludar);




// USO DE SWITCH:

const dia = "viernes";

switch (dia) {
    case "lunes":
        console.log("Odio los lunes.");
        break;
    case "martes":
        console.log("¡Ya es martes!");
        break;
    case "viernes":
        console.log("¡Fin de semana cerca!");
        break;
    default:
        console.log("Día normal.");
}
// Salida: "¡Ya es martes!"



const producto = {
    tipo: "fruta",
    nombre: "manzana"
};

switch (producto.tipo) {
    case "fruta":
        console.log(`Es una fruta: ${producto.nombre}`);
        break;
    case "verdura":
        console.log(`Es una verdura: ${producto.nombre}`);
        break;
    default:
        console.log("Producto desconocido");
}
// Salida: "Es una fruta: manzana"



// CASO COMPLEJO DE USO DE SWITCH:


function clasificarProducto(producto) {
    switch (producto.tipo) {
        case "fruta":
            console.log(`Fruta ${producto.nombre}: ${producto.vitaminas || 'Sin datos'} de vitaminas`);
            if (producto.esTropical) {
                console.log("¡Es tropical!");
            }
            break;

        case "verdura":
            console.log(`Verdura ${producto.nombre}: ${producto.minerales || 'Sin datos'} de minerales`);
            break;

        case "lácteo":
            console.log(`Lácteo ${producto.nombre}: ${producto.calcio}mg de calcio`);
            break;

        default:
            console.log(`Producto no clasificado: ${producto.nombre}`);
    }
}

// Uso real:
const productos = [
    { tipo: "fruta", nombre: "mango", vitaminas: "A,C", esTropical: true },
    { tipo: "verdura", nombre: "zanahoria", minerales: "K,Fe" },
    { tipo: "lácteo", nombre: "queso", calcio: 720 },
    { tipo: "pan", nombre: "baguette" }
];

productos.forEach(clasificarProducto);

/* 
- Pasos para Aplicar el SWITCH :

Identifica la variable clave (ej: producto.tipo, usuario.rol).

Enumera todos los casos posibles (case "fruta":, case "admin":).

Añade break para evitar que se ejecuten otros casos.

Usa default para manejar valores inesperados.

CHECK DE USO: 

¿Mi variable tiene valores fijos? → switch.

¿Cada caso necesita acción diferente? → case + break.

¿Manejo valores inesperados? → default.

¿Es con arrays/objetos? → Recorro y accedo a propiedades.

 */





























