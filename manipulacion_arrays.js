const estudiantes = ["Bastián"];

const eliminados = [];

//MÉTODO PUSH() -> PERMITE AGREGAR NUEVOS ELEMENTOS A UN ARRAY

estudiantes.push("Constanza");

console.log(estudiantes); // [ 'Bastián', 'Constanza' ]

estudiantes.push("Erani", "Exequiel");

console.log(estudiantes); // [ 'Bastián', 'Constanza', 'Erani', 'Exequiel' ]

//MÉTODO POP() -> ELIMINA EL ÚLTIMO ELEMENTO DE UN ARRAY.

let eliminado = estudiantes.pop();
eliminados.push(eliminado);

console.log("Estudiantes:", estudiantes); // [ 'Bastián', 'Constanza', 'Erani' ]

console.log("Eliminados:", eliminados); // ['Exequiel']

//MÉTODO SHIFT() -> ELIMINA EL PRIMER ELEMENTO DE UN ARRAY

estudiantes.shift();
console.log("Estudiantes:", estudiantes); // [ 'Constanza', 'Erani' ]


//MÉTODO UNSHIFT() -> AGREGA UN ELEMENTO AL PRINCIPIO DEL ARRAY
estudiantes.unshift("Exequiel");
console.log("Estudiantes:", estudiantes); // [ 'Exequiel', 'Constanza', 'Erani' ]



