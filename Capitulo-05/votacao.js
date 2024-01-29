let votaram = {};

function verificar_eleitor(nome){
    if(votaram[nome]){
        return 'Mande embora';
    }
    votaram[nome] = true;
    return 'Deixe votar';
}

console.log(verificar_eleitor('Luan'));
console.log(verificar_eleitor('Mike'));