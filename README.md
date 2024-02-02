# Livro - **Entendendo Algoritmos**

Olá, este repositório tem como único e exclusivo objetivo de trazer as atividades relacionadas a códigos e também algumas pontuações da minha parte enquanto me debruço dessa leitura muito importante do livro do **Aditya Y. Bhargava**. A cada capítulo deixarei algumas pontuações e entedimentos do que foi abordado até então. 

**Lembrete**: Diferentemente do livro, estarei utilizando Javascript.

## Capítulo 1: **Introdução a algoritmos**
-----
* **Definição de algoritmos**:
> Um algoritmo é um conjunto de instruções que realizam uma tarefa.

Importante sinalizar que diante desse início é muito importante levar em consideração o que o autor informa sobre álgebra básica, pois muito do que se tem entendimento vem dos conceitos básicos de matemática. Logo, é muito bom tentar revisar sobre tais assuntos, principalmente **logoritmos**.

* **Pesquisa binária**:
> A pesquisa binária é um algoritmo. Sua entrAda é uma lista ordenada de elementos. Se o elemento que você está buscando está na lista, a pesquisa binária retorna a sua localização.

> De maneira eral, para uma lista de n números, a pesquisa binária precisa de log ² n para retornar o valor correto, enquanto a pesquisa simples precisa de n etapas.

Quando começou o assunto sobre pesquisa binária, é bem interessante como o autor ilustra isso com base em imagens. Com isso, traz um exemplo sobre adivinhar o número, destrinchando de maneira simples a diferença entre uma pesquisa simples que parte do princípio de que, caso tenha 100 números, ocorrerá 100 tentativas, enquanto a binária começa o processo pela metade, já eliminando pela metade parte dos números dentro daquela probabilidade.

* **Logaritmos**:
> São o oposto de exponenciais.

Aqui temos a introdução ao logaritmos para entender um pouco sobre a notação Big O, no qual o log sempre irá significar log 2. Neste momento, passamos a ter o entendimento do que seria de maneira lógica e matemática o que seria essa pesquisa binária, partindo também de exemplos, principalmente contextos de uso, como uma lista com quantidade x de nomes e a necessidade de localizar um nome em específico. Isto é um problema, problema este que necessita de uma solução lógica. Além de termos a diferença entre **tempo linear** que é o numero máximo de tentativas que é o tamanho da lista e **tempo logarítimico** que tem uma redução drástica no número de tentativas. Nisso é gerado um gasto menor e otimização do que está sendo feito.

* **Notação Big O**:
> É uma notação especial que diz o quão rápido é um algoritmo.

A notação Big O(n) nos fornece um comparativo de número de operações, para compreender o tempo de execução conforme o número de itens cresce. Além de estabelecer o tempo de execução na pior hípotese.

1. O(log n), conhecido como tempo logarítimico. Exemplo: pesquisa binária.
2. O (n), tempo linear. exemplo: pesquisa simples.
3. O (n* log n) exemplo: algoritmo rápido de ordenação, como ordenação quicksort.
4. O (n²) Exemplo: um algoritmo lento de ordenação, como ordenação por seleção.
5. O (n!) Exemplo: um algoritmo bastante lento, como o de caixeiro viajante. pois se trata de um problema sem solução, apenas podendo chegar a uma solução aproximada.

Neste ponto podemos entender que um algoritmo não é medido em segundos, mas pelo crescimento do número de operações e o tempo de execução é expresso na notação Big O.

---
## **Capítulo 02 - Ordenação por seleção**

* **Arrays**:

> No Array, todos os elementos são armazenados um ao lado do outro.

>Arrays permitem leituras rápidas.

> Usar um array significa que todas as suas tarefas estão armazenadas contiguamente (um ao lado da outra) na memória.

> Todos os elementos de um array devem ser do mesmo tipo (todos ints, todos doubles, e assim por diante).

> Arrays são ótimos se você deseja ler elementos aleatórios, pois pode encontrar qualquer elemento instantaneamente em um array.

Pensando nessa perspectiva, por arrays sendo estruturas que guardam os dados e organiza os mesmos. 

* **Listas encadeadas**:

> Na lista, os elementos estão espalhados e um elemento armazena o endereço do próximo elemento.

> Listas encadeadas permitem rápidas inserções e eliminações.

> Listas encadeadas são ótimas se você quiser ler todos os itens, um de cada vez: você pode ler um item, seguir para o endereçodo próximo item e fazer isso até o fim da lista.

Enquanto arrays partem do processo de poder acessar um índice aleatório, listas encadeadas partem da representação de sequência de objetos de um determinado tipo na memória. Logo, se necessário acessar determinado índice, ele irá passar por todos os objetos da sequência para isso.  A utilização de array ou lista encadeada depende do contexto de sua utilização.  Se partir de algo específico que precisa ser acessado, array se torna uma melhor resposta para isso, mas caso seja necessário a organização de uma lista que necessita de uma sequência, como nomes de pessoas com seus respectivos dados, é interessante utilizar uma lista encadeada.

## **Capítulo 03 - Recursão**

> Recursão é quando uma função chama a si mesma.

> Toda função recursiva tem dois casos: o caso-base e o caso recursivo.

> Uma pilha tem duas operações: push e pop.

> Todas as chamadas de função vão para a pilha de chamada.

> A pilha de chamada pode ficar muito grande e ocupar muita memória.

Em recursão temos um entendimento melhor sobre o que seria recursão, algo que utilizamos muito durante o aprendizado sobre lógica de programação. Neste processo, o entendimento sobre pilha de chamada e em como é utilizado na própria recursão. Essa compreensão parte do funcionamento da execução dessa pilha, que não se tem montes e esse monte é salvo na pilha. No entanto, utilizar pilha apesar de ser algo bom, exige um custo muito alto de memória.

## Capítulo 04 - Quicksort

> Técnica recursiva chamada **Dividir para conquistar** (DC). A cada recursão, você reduz o seu problema.

Técnica DC é uma maneira pensar sobre o problema.

> Primeiro passo é encontrar o caso-base, o array mais simples, que pode ser um array[0] ou array[1], ou seja, um array vazio ou com um elemento. Com isso você tende a chegar mais perto desse array vazio a cada realização da recursão.

Neste caso, a técnica DC é basicamente uma forma de redução do array, ou seja, reduzindo o tamanho do problema em partes menores. Com isso, você consegue ter uma melhor resolução dos problemas apresentados. A recursão por ter memória dos estados anteriores, ocasiona nesse processo para chegar no caso-base.

> **Quicksort** é um algortimo de ordenaçãoe utiliza a estratégia DC.

> Escolha um elemento do array que será intitulado como pivô. Isso é chamado de particionamento. No qual, através do pivô teremos subarrays contendo os números que são maiores do que o pivô e os que são menores que o pivô. 

Durante o processo de particionamento desses subarrays, nós temos a execução do quicksort com recursão. Deste modo, no processo de ordenação, nós chamamos a própria função. Portanto, independente da posição, ao chamarmos esse pivô, ocorrerá a ordenção e combinação dos elementos.

> Algoritmo quicksort é único, pois sua velocidade depende do pivô escolhido.

> Na pior situação, o quicksort tem tempo de execução O(n2).

> Ele é tão lento quanto a ordenação por seleção. Porém, este é o pior caso possível. No caso médio, o quicksort tem tempo de execução O(n log n).

> Quando você escreve algo na notação Big O, como O(n), por exemplo,está querendo dizer isso: **c** (alguma quantidade determinada de tempo) * n. Letra **c** é uma quantidade determinada de tempo que o seu algoritmo leva para ser executado. Ela é chamada de **constante**.

> Caso dois algoritmos tenham tempos de execução Big O diferentes, a constante não importará. Porém, às vezes pode fazer **diferença**, como no caso do quicksort e do mergesort, no qual ambos tem tempo de execução O(n log n), mas o quicksort acaba sendo mais rápido e o fator que torna-o mais rápido é funcionar mais vezes no caso médio do que no pior caso.

> O desempenho do quicksort depende muito da escolha do pivô.

> Ao dividir o array pela metade, você não necessita de realizar tantas execuções recursivas. Assim, chega de maneira mais breve ao caso-base e a pilha de chamada.

> No pior caso, o tamanho da pilha é O(n) e no melo caso, o tamanho da pilha é O(log n). Acontece pois você pode obter o melhor caso de forma consitente, contanto que você sempre escolha um elemento aleatório como o pivô.

> Lembrando que mesmo ao particionar a array de forma diferente, continuará passando por O(n) elementos de cada execução.

> Se você sempre escolher um elemento aleatório do array como pivô, o quicksort será completado com tempo de execução médio O(n log n).


## Capítulo 05 - Tabelas Hash

> Uma função hash é uma função na qual você insere uma string e, depois disso, a função retorna um número. Em outras palavras, a função hash "mapeia strings e números".

> A função necessita de alguns requisitos, como ser consistente, ou seja, se for inserido um string, como no caso de "maçã", toda vez em que for solicitado, deverá retornar sempre o valor dela. Isso torna a função consistente. Além disso, deve mapear diferentes álavras para diferentes números, com isso evitar as colisões.

> É importante ressaltar que a função hash tem conhecimento sobre o tamanho do seu array e retornará apenas índices válidos. 

> Uma tabela hash contém chaves e valores.

> Importante ressaltar que até mesmo os endereços de website para um endereço IP pode ser aplicado com a utilização de tabelas hash, conhecido como **resolução DNS**.

Um importante momento deste capítulo é quando o autor traz sobre a utilização das tabelas hash como cache, ou seja, ao invés de sempre realizar uma solicitação nova, os websites memorizam esses dados.
O método chamado de **caching** é uma forma de agilizar todo o processo. Pois caso você esteja logado sera solicitado os conteúdos daquela página da web, caso não esteja logado, apenas será mostrado o login, como é feito em alguns websites como X, Facebook etc. Além de ser considerada uma boa prática.

A utilidade das tabelas hash:

- Modelar relações entre dois itens;
- Filtrar por duplicatas;
- Caching/memorização de dados, em vez de solicitar estes dados do servidor.

> As duplicatas seriam o que chamamos de colisão, quando duas chaves são indicadas para o mesmo espaço e isto é um problema que pode impactar no desempenho.

> As funções hash são importantes, pois uma boa função hash cria poucas colisões.

> As tabelas hash têm tempo de execução O(1) para tudo. Assim, O(1) é chamado de **tempo constante**.

> Tempo constante não é algo que acontece instantaneamente, mas sim um tempo que continuará sempre o mesmo, independentemente de quão grande a tabela hash pode ficar.

> Para evitar colisões são necessários:

 - Um baixo fator de carga;
 - Uma boa função hash.

 > Uma boa função hash distribui os valores no array simetricamente.

 > Uma função hash não ideal agrupa valores e produz diversas colisões.

 > As tabelas hash são extremamente rápidas para pesquisar, inserir e remover itens.

## Capítulo 06 - Pesquisa em largura

> A pesquisa em largura permite encontrar o menor caminho entre dois objetos.

### O que são grafos?

> Um modelo de grafo é um conjunto de conexões.
Grafos são formados por vértices e arestas, e um vértice pode ser diretamente conectado a muitos outros vértices, por isso chamamos de *vizinhos*.
Logo, os grafos são uma maneira de modelar como eventos diferentes estão conectados entre si.

### Filas

> Uma fila em estrutura de dados funciona exatamente como uma fila da vida real. As filas funcionam da mesma maneira, tendo como funcionamento similar ao das pilhas. Por isso não é possível acessar elementos aleatórios em uma fila. Em vez disso, apenas duas operações são possíveis: *enqueue*(enfileirar) e *dequeue*(desenfileirar).

>  A fila é uma estrutura de dados FIFO(acrônimo para First In, First Out). Já a pilha é uma estrutura de dados LIFO(Last In. First Out).

### Implementando o grafo

> Como expressar essas realções de acordo com vértice? usando *tabela hash*. A tabela hash lhe permite mapear uma chave a um valor.

grafo = {}  
grafo['voce'] = ['alice', 'bob', 'claire'];

> Além disso, não faz diferença a ordem de adição dos papres chave/valor, pois tabelas hash não são ordenadas.

Existem dois tipos de grafos:

* *Dígrafo* (ou grafo direcionado): No qual a relação só acontece apenas em um sentido.
* Grafo não direcionado (ou simplesmente grafo): não contém setas, e ambos os vértices são vizinhos um do outro.

### Tempo de execução

>Adicionar uma pessoa à lista leva um tempo constante: O(1). Fazer isso para cada pessoa terá tempo de execução O(número de pessoas) no total. Assim, a pesquisa em largura tem tempo de execução O(número de pessoas + número de arestas), que é frequentemente escrito como O(V+A)(V para números de vértices, A para números de arestas).

> *Ordenação topológica* é uma maneira de criar uma lista ordenada a partir de um grafo.

> Uma *arvóre* é um tipo especial de grafo em que nenhuma aresta jamais aponta de volta. Ex: Arvóre geneológica.