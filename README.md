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
> Usar um array significa que todas as suas tarefas estão armazenadas contiguamente (um ao lado da outra) na memória.

> Arrays são ótimos se você deseja ler elementos aleatórios, pois pode encontrar qualquer elemento instantaneamente em um array.

Pensando nessa perspectiva, por arrays sendo estruturas que guardam os dados e organiza os mesmos. 

* **Listas encadeadas**:

> Listas encadeadas são ótimas se você quiser ler todos os itens, um de cada vez: você pode ler um item, seguir para o endereçodo próximo item e fazer isso até o fim da lista.

Enquanto arrays partem do processo de poder acessar um índice aleatório, listas encadeadas partem da representação de sequência de objetos de um determinado tipo na memória. Logo, se necessário acessar determinado índice, ele irá passar por todos os objetos da sequência para isso.  A utilização de array ou lista encadeada depende do contexto de sua utilização.  Se partir de algo específico que precisa ser acessado, array se torna uma melhor resposta para isso, mas caso seja necessário a organização de uma lista que necessita de uma sequência, como nomes de pessoas com seus respectivos dados, é interessante utilizar uma lista encadeada.


