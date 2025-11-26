const estudiantes = ["Pedro", "Marta", "Mario", "José", "Jaime", "jaimito"];


const estudiantesFiltrados = estudiantes.filter((estudiante) => (estudiante.at(0) == "J" || estudiante.at(0) == "j"));

console.log(estudiantesFiltrados);


// function filtrarEstudiantes(estudiante){
//     if(estudiante == "Pedro"){
//         return true;
//     }else{
//         return false;
//     }
// }