/* 
Aula_Pratica_01_-_Exercicios_3 
10 - Dado um número, faça um algoritmo que imprime no console a soma de
todos os números de 1 até o número escolhido. Ex: Ao ter como entrada o valor
5, devem ser somados todos os números de 1 até 5 (1+2+3+4+5). 

Os valores de entrada serão:
Número;
Exemplo de Entrada:
10
-----------------
3
Exemplo de Saída:
55
-----------------
6

*/


let Outros = 10;
let soma1 = 0;

for (let i = 1; i <= Outros; i++) {
    soma1 = soma1 + i;
    console.log({soma1, i})
}
console.log(soma1)

/* 

bloqueios iniciais 

foi como criar um programa que só do usuário digitar ele verifica os numeros anteriores ao numero digitado

obs: foi verificado naverdade problema na abordagem na resolução 
*/