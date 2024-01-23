function soma (arr){
    if(arr.length === 1){
        return arr[0];
    } else{
        const dividir = Math.floor(arr.length/2);
        const primeiraParte = soma(arr.slice(0, dividir));
        const segundaParte = soma(arr.slice(dividir));
        return primeiraParte+segundaParte;
    }
}
console.log(soma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));