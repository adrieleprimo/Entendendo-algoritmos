const grafo = {};
grafo['voce'] = ['alice', 'bob', 'claire'];
grafo['bob'] =  ['anuj', 'peggy'];
grafo['alice'] = ['peggy'];
grafo[ 'claire'] = [ 'jonny'];
grafo['anuj'] = [];
grafo['peggy'] = [];
grafo['thom'] = [];
grafo['jonny'] = [];

console.log(grafo);
module.exports = grafo;