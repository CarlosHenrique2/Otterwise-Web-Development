/* 
Aula_Pratica_01_-_Exercicios_3 
9 - Dado um array de números como entrada, faça um programa que
multiplique todos os valores por 10. 

Exemplo de Entrada:
[1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3]
Exemplo de Saída:
[10, 80, 60, 130, 70, 90, 150, 220, 3560, 40, 30]
*/



let numeros = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];
let aumenta = 10;

for (let i = 0; i < numeros.length; i++) {
    numeros =  numeros[i] * aumenta;
    console.log(`${numeros}`)
}

/* 

bloqueios iniciais 

foi como acessar cada elemento e realizar uma multiplicação

obs: depois foi verificado que apenas precisava realizar a multiplicação de 
cada elemento de acordo com sue indice no array
*/
