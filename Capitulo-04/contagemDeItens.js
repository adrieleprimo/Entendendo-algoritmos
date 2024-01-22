function contagemDeItens(lista){
    if (lista.length === 0){
        return 0;
    } else {
        return 1 + contagemDeItens(lista.slice(1)); 
    }
}
console.log(contagemDeItens([1,2,3,4,5]));