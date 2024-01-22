function quicksort(array){
    if (array.length < 2){
        return array;
    } else{
        const pivo  = array[0];
        let menores = array.slice(1).filter(i => i <= pivo);
        let maiores = array.slice(1).filter(i => i  > pivo);
        return quicksort(menores).concat([pivo], quicksort(maiores));
    }
}
console.log(quicksort([10, 5, 3, 30, 2, 1]));