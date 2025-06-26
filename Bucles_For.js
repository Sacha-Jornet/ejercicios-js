// Realiza un conteo de 1 a 10 o lo que pongamos.
for (let i = 1; i <= 10; i++) {
document.write("Numero: ",i, "<br>");
};

// Realiza un conteo inverso.
for (let i = 10; i >= 0; i--) {
document.write("Numero: ",i, "<br>");
};

// Itera de 2 en 2.
for (let i = 1; i <= 12; i+=2) {
document.write("Numero: ",i, "<br>");
};

// Invierte el numero en cada iteracion saltando de 2 en 2.
for (let i = 6; i >= 1; i-=2) {
document.write("Numero: ",i, "<br>");
};

// Divide el numero en cada iteracion.
for (let i = 6; i >= 1; i/=2) {
document.write("Numero: ",i, "<br>");
};

// Multiplica el numero en cada iteracion.
for (let i = 2; i <= 12; i*=2) {
document.write("Numero: ",i, "<br>");
};

// Recorrer Arrays con for.

let dias  = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

for (let i = 0; i <= 6; i++) {
document.write("Dia: ", dias[i] , "<br>");
};


// Recorrer Arrays con for & (.LENGTH).

let dias2  = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

for (let i = 0; i < dias2.length; i++) {
document.write("Dia: ", dias2[i] , "<br>");
};


// FOR ANIDADO.

let dias3 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

        for (i = 0; i < dias3.length; i++) {
            document.write("<br>" + dias3[i] + "<br>");

            for (let x = 1; x <= 24; x++) {
                if (x != 24) {
                    document.write(x + "Hs ");
                } else {
                    document.write(x + " Hs <br> ");
                };
            };
        };



































