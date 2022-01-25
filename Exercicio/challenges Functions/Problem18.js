/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
Escreva um programa que receba como entrada três números que serão
armazenados nas variáveis valueOne, valueTwo e valueThree respectivamente.
Tendo esses valores, mostre-os na tela na ordem em que estão armazenados.
Após ter mostrado faça trocas em que ao final valueTwo assuma o valor de
valueThree, valueThree assuma o valor de valueOne e valueOne assuma o valor
de valueTwo. Mostre ao final os valores atualizados.
 */

let valueOne = 1;
let valueTwo = 2;
let valueThree = 3;

console.log(valueOne);
console.log(valueTwo);
console.log(valueThree);

let othervalue0;

othervalue0 = valueTwo;
valueTwo = valueThree;
valueThree = valueOne;
valueOne = valueTwo;
valueOne = othervalue0;

console.log(valueOne);
console.log(valueTwo);
console.log(valueThree);
