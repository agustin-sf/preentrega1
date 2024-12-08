// Preentrega Nro. 1 - Alumno: Sosa Gerónimo Agustín.

// Función para obtener las notas del alumno
function obtenerNotas() {
    let notas = [];
    for (let i = 1; i <= 3; i++) {
        let nota;
        do {
            nota = parseFloat(prompt(`Ingrese la nota ${i} (entre 0 y 10):`));
            if (isNaN(nota) || nota < 0 || nota > 10) {
                alert("Por favor, ingrese una nota válida");
            }
        } while (isNaN(nota) || nota < 0 || nota > 10);
        notas.push(nota);
    }
    return notas;
}

// Función para calcular el promedio
function calcularPromedio(notas) {
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return suma / notas.length;
}

// Programa principal
do {
    const nombre = prompt("Ingrese el nombre del alumno (escriba 'fin' para terminar):");
    if (nombre.toLowerCase() === "fin") break;

    const notas = obtenerNotas();
    const promedio = calcularPromedio(notas);

    if (promedio >= 7) {
        alert(`${nombre} aprobó el curso con un promedio de ${promedio.toFixed(2)}.`);
    } else {
        alert(`${nombre} reprobó el curso con un promedio de ${promedio.toFixed(2)}.`);
    }
} while (true);

alert("Fin del programa.");
