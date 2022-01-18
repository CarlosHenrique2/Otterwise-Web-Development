/* 
Aula_Pratica_01_-_Exercicios_3 
5 - Crie um algoritmo que tem como entrada um número e imprime a sua
tabuada do 1 ao 10 
*/

let numero = 5;
let resultado = numero;

for (let i = 1; i <= 10; i++) {
    resultado = numero * i;
    console.log(`${numero} X ${i} = ${resultado}`)
}