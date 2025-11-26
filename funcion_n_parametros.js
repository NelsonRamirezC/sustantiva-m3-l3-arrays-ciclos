function sumar(...valores){
    let totalSuma = 0;

    for (let index = 0; index < valores.length; index++) {
        totalSuma += valores[index];
    }

    return totalSuma;
}

console.log(sumar(5,7, 18, 20, 25));

