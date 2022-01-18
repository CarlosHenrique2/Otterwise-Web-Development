/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
Tendo como informação dois números, faça um programa que imprima na
tela qual deles é o MAIOR e qual deles é o menor. Caso os números sejam
iguais, informe que eles são iguais.
*/

let numero1 = 5;
let numero2 = 5;

if (numero1 > numero2) {
    console.log(`${numero1} é maior que ${numero2}`)
} else if (numero1 === numero2) {
    console.log(`${numero1} é igual que ${numero2}`)
} else {
    console.log(`${numero1} é menor que ${numero2}`)
}