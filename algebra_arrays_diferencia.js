const listaA = ["Pedro", "Juan"];

const listaB = ["Juan", "Marta"];

const lista = listaA.filter((estudiante) => !listaB.includes(estudiante));

//INCLUYE TODOS LOS ELEMENTOS DE LA LISTA A QUE NO SE ENCUENTREN EN LA LISTA B
console.log(lista);
