/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
Tendo como informação os três lados de um triângulo faça um programa
que imprima na tela se ele é EQUILÁTERO, ISÓSCELES ou ESCALENO.
*/

let lado1 = 10;
let lado2 = 5;
let lado3 = 10;

if (lado1 === lado2 && lado1 === lado3 ) {
    console.log(`é um Triângulo Isósceles`)
}else if (lado1 != lado2 && lado1 != lado3) {
    console.log(`é um Triângulo Equilátero`)
}else {
    console.log(`é um Triângulo Escaleno `)
}

lado1 = 2;
lado2 = 1;
lado3 = 5;

if (lado1 === lado2 && lado1 === lado3 ) {
    console.log(`é um Triângulo Isósceles`)
}else if (lado1 != lado2 && lado1 != lado3) {
    console.log(`é um Triângulo Equilátero`)
}else {
    console.log(`é um Triângulo Escaleno `)
}