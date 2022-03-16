/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
Tendo como informação os três lados de um triângulo faça um programa
que imprima na tela se ele é EQUILÁTERO, ISÓSCELES ou ESCALENO.
*/

let lado1 = 3;
let lado2 = 1;
let lado3 = 2;

if (lado1 === lado2 && lado1 === lado3) {
  console.log("é um Triângulo EQUILÁTERO");
} else if (lado2 === lado1 || lado2 === lado3) {
  console.log("é um Triângulo ISÓSCELES");
} else if (lado3 != lado2 && lado3 != lado1) {
  console.log("é um Triângulo ESCALENO");
} else {
  console.log("erro");
}

lado1 = 1;
lado2 = 2;
lado3 = 1;

if (lado1 === lado2 && lado1 === lado3) {
  console.log("é um Triângulo EQUILÁTERO");
} else if (lado2 === lado1 || lado2 === lado3) {
  console.log("é um Triângulo ISÓSCELES");
} else if (lado3 != lado2 && lado3 != lado1) {
  console.log("é um Triângulo ESCALENO");
} else {
  console.log("erro");
}
