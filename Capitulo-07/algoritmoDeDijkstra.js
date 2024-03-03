
grafo = {};
grafo['inicio'] = {};
grafo['inicio']['a'] = 6;
grafo['inicio']['b'] = 2;

//console.log(Object.keys(grafo['inicio']));

//console.log(grafo['inicio']['a']);
//console.log(grafo['inicio']['b']);

grafo['a'] = {};
grafo['a']['fim'] = 1;

grafo['b'] = {};
grafo['b']['a'] = 3;
grafo['b']['fim'] = 5;

grafo['fim'] = {};

//tabela de custos

const infinito = Infinity;
const custos = {};
custos['a'] = 6;
custos['b'] = 2;
custos['fim'] = infinito;

pais = {};
pais['a'] = 'inicio';
pais['b'] = 'inicio';
pais['fim'] = null;

processados = [];