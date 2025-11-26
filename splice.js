const diasSemana = ["Lunes", "Miércoles", "Jueves", "Domingo"];

let diaBuscado = "Jueves";
let indiceBuscado = diasSemana.indexOf(diaBuscado);

console.log(indiceBuscado);

let eliminados = diasSemana.splice(indiceBuscado, 1, "Viernes");

console.log(diasSemana);
console.log(eliminados);

console.log("Cantidad de días:", diasSemana.length);


