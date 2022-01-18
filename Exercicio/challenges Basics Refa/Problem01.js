/* 

OBS: Você deve utilizar os conceitos vistos na última aula para realizar os exercícios
abaixo. Procure não buscar a resposta nos exercícios que você já resolveu, resolva o
problema como se fosse a primeira vez que você está se deparando com ele.

1 - [REFATORAÇÃO] Pegue um valor de entrada e calcule o menor número de
notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas
consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a
relação de notas necessárias. 

*/

const valor = 1000;
let numero100 = 100;
let numero50 = 50;
let numero20 = 20;
let numero10 = 10;
let numero5 = 5;
let numero2 = 2;
let numero1 = 1;

const definindo = (operation) => {
    const operacoes = {
        numero100: (a,b) => valor / 100,
        numero50: (a,b) => valor / 50,
        numero20: (a,b) => valor / 20,
        numero10: (a,b) => valor / 10,
        numero5: (a,b) => valor / 5,
        numero2: (a,b) => valor / 2,
        numero1: (a,b) => valor / 1,
    };
    return console.log(numero100)
};



console.log(numero100);
console.log(numero50);
console.log(numero20);
console.log(numero10);
console.log(numero5);
console.log(numero2);
console.log(numero1); 

/* bloqueio inical é criar uma function ou arrow function que irá decompor o valor recebido  */