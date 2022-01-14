/* 
2 - [REFATORAÇÃO] Tendo como informação dois valores, valor1 e valor2, faça
um programa que imprima os dois valores no console. Após imprimir, troque a
informação de valor1 pela informação do valor2 e imprima no console
novamente.
 */

let value1 = 2; 
let value2 = 4;


if (value1 < value2) {
    value1 = value2 + 1;
} if (value2 > value1) {
    value2 = value1 + 3;
} else {
    value1 += value2 + 1;
}

console.log(`Valor 1 = ${value1}`);
console.log(`Valor 2 = ${value2}`);

if (value1 < value2) {
    value1 = value2 + 2;
} if (value2 > value1) {
    value2 = value1 + 1;
} else {
    value1 += value2 + 3;
}

console.log(`Valor 1 = ${value1}`);
console.log(`Valor 2 = ${value2}`);


/* 
sem bloqueios para esse problema 
 */