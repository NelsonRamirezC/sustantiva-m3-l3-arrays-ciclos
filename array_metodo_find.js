const estudiantes = ["Pedro", "Marta", "Mario", "José", "Jaime", "Pedro"];


let nombreBuscado = "Marta";
let foundPedro = estudiantes.find((estudiante) => estudiante ==  nombreBuscado);


if(foundPedro){
    console.log("Se encontró al usuario:", foundPedro);
}else {
    console.log("No fue posible encontrar al estudiante:", nombreBuscado);
}
