let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

console.log(matriz[2][1])

for (let index = 0; index < matriz.length; index++) {
    let subLista = matriz[index];
    console.log("Recorriendo sublista: ", index+1)
    for (let index = 0; index < subLista.length; index++) {
        const elemento = subLista[index];
        console.log(elemento);
    }

};

