const Deque = require('collections/deque');
const grafo = require('./grafos');


function pessoa_e_vendedor(nome){
    let nomeString = String(nome);
    if(nomeString.endsWith('m')){
        return nomeString;
    }
    return '';
    
}

function pesquisa(nome){
    let fila_de_pesquisa = Deque();
    fila_de_pesquisa.push(...grafo[nome]);
    let verificadas = [];

    while(fila_de_pesquisa.length > 0){
        let pessoa = fila_de_pesquisa.shift();
        if(!verificadas.includes(pessoa)){
            if(pessoa_e_vendedor(pessoa).length > 0){
                console.log( pessoa + ' é um vendedor de manga!');
                return true;
            } else{
                fila_de_pesquisa.push(...grafo[pessoa]);
                verificadas.push(pessoa);
            }
        }
    }
    return false;
}

console.log(pesquisa('claire'));

