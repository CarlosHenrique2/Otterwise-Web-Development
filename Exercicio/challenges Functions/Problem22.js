/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
 Pegue um valor de entrada e calcule o menor número de notas possíveis
(cédulas) no qual o valor pode ser decomposto. As notas consideradas são de
100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas
necessárias.
1 - o desafio informa que precisa de uma entrada minima
2 - o desafio informa que a entrada vai ser deconposta 
3 - vai ser deconposta por 1,2,5,10,20,50,100
4 - o desafio informa que a saida precisa ser caso o valor seja 500 
5 - exemplo (5) notas de R$ 100,00
*/


let x = 1000;

let notas = x / 100;
 console.log(`${notas} nota(s) de R$ ${100},00`)
x = x % 100;

notas = x / 50;
console.log(`${notas} nota(s) de R$ ${50},00`)

notas = x / 20;
console.log(`${notas} nota(s) de R$ ${20},00`)

notas = x / 10;
console.log(`${notas} nota(s) de R$ ${10},00`)

notas = x / 5;
console.log(`${notas} nota(s) de R$ ${5},00`)

notas = x / 2;
console.log(`${notas} nota(s) de R$ ${2},00`)

notas = x / 1;
console.log(`${notas} nota(s) de R$ ${1},00`)