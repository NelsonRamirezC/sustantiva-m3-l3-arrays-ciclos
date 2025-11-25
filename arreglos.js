// CREAR UN ARRAY

const animales = ["Perro", "Gato", "Elefante"];

console.log(animales);
console.log("Cantidad aniamales: ", animales.length);

console.log("último elemento del array:", animales[animales.length -1]);


indiceGato = animales.lastIndexOf("Gato");

animales[indiceGato] = "Gata";
console.log(animales);

let animalBuscado = "Gata";
elementoBuscado = animales.lastIndexOf(animalBuscado);
console.log(elementoBuscado);

if(elementoBuscado >=0){
    console.log("Animal encontrado.");
    console.log("ïndice Animal:", elementoBuscado);
}else {
    console.log(`No se encuentra dentro del array el animal "${animalBuscado}"`);
}

