function regressiva(i){
    console.log(i-1)
    if(i <=1){
        return
    }
    else{
        regressiva(i-1);
    }
}
regressiva(10);
