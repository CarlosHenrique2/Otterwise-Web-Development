/* 
Aula_Pratica_01_-_Exercicios_3 
6 - Dado um array de números, faça um programa que imprima na tela somente
os números positivos.
*/

let entrada = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];


for (let index = 0; index < entrada.length; index++) {
    if (entrada[index] > 0) {
        console.log(entrada[index])
    } else {
        console.log(`Entrada negada`)
    }
}

entrada = [-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255 ]

for (let index = 0; index < entrada.length; index++) {
    if (entrada[index] > 0) {
        console.log(entrada[index])
    } else {
        console.log(`Entrada negada`)
    }
}