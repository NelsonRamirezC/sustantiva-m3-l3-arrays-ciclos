// const estudiantes = ["Pedro", "Marta", "Mario", "José", "Jaime", "jaimito"];


// console.log(estudiantes.includes("Jorge"));

// let opciones = ["A", "B", "C"];

// let opcionElegida = "C";

// if(opciones.includes(opcionElegida)){
//     console.log("Opción Válida!");
// }else{
//     console.log("Opción no Válida!");
// }


//SÓLO ACEPTAR TRABAJOS EN ZIP O RAR

let formatosPermitidos = ["zip", "rar"];

let formatoArchivoSubido = "pdf";

if(formatosPermitidos.includes(formatoArchivoSubido)){
    console.log("Gracias por su subir tu trabajo.");
}else {
    console.log(`El formato [${formatoArchivoSubido}], no está permitido:`);
    console.log(`Formatos permitidos: [${formatosPermitidos.join(", ")}]`);
}