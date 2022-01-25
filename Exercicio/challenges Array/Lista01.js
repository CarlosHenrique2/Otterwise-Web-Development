/* 
1. Crie um algoritmo que tem como entrada um array de números e imprime no console a soma dos elementos sendo cada um deles multiplicado pelo seu índice.
Exemplo entrada: [5, 9, 10, 6]
Exemplo Saída: 47 
*/

let numeros = [5, 9, 10, 6];
let soma = 0;

for (let index = 0; index < numeros.length; index++) {
  soma = soma + numeros[index] * index;
  console.log(soma);
}
