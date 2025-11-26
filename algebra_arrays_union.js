const listaVerduras = ["Cebolla", "Papas"];
const listaFrutas = ["Manzanas", "Frutillas"];

//UNIÓN SIMPLE

//const listaCompras = listaVerduras.concat(listaFrutas);

const listaCompras = [...listaVerduras, ...listaFrutas];

console.log(listaCompras);


//SETS

// const listaUnica = new Set(["Pedro", "Carlos", "Juan", "Pedro"]);
// listaUnica.add("Marta");
// listaUnica.add("Marta");
// console.log(listaUnica);

//UNIÓN ELIMINANDO ELEMENTOS REPETIDOS

const estudiantes1 = ["estudiante1@gmail.com", "estudiante2@gmail.com"];
const estudiantes2 = ["estudiante3@gmail.com", "estudiante1@gmail.com"];

const listaUnica = [...new Set(estudiantes1.concat(estudiantes2))];

console.log(listaUnica);


//UNIER MÁS DE 2 ARRAYS

let lista1 = ["uno"];
let lista2 = ["dos"];
let lista3 = ["tres"];

//let nuevaLista = lista1.concat(lista2.concat(lista3));

let nuevaLista = [...lista1, ...lista2, ...lista3];
console.log(nuevaLista);

nuevaLista.push("Cuatro", "Cinco", "Seis");
console.log(nuevaLista);



