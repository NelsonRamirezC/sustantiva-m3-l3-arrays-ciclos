const listaA = ["Pedro", "Juan"];

const listaB = ["Juan", "Marta"];

const lista = listaA.filter((estudiante) => listaB.includes(estudiante));

console.log(lista);
