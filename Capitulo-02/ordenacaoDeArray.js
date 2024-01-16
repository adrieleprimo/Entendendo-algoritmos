function buscaMenor(arr){
    let menor = arr[0];
    let menor_indice = 0;
    for(let i = 1; i< arr.length; i++){
        if( arr[i] < menor){
            menor = arr[i];
            menor_indice = i;
        }
    }
    return menor_indice;
}
console.log(buscaMenor([8,10, 9, 10, 20]));

function ordenacaoPorSelecao(arr){
    let novoArr = [];
    while (arr.length > 0) {
        let menor = buscaMenor(arr);
        novoArr.push(arr.splice(menor, 1)[0]);
    }
    return novoArr;
}

console.log(ordenacaoPorSelecao([5, 3, 6, 2, 10]));