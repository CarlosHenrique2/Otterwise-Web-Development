/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
Escreva um programa que receba como entrada dois valores. Após, o
programa deve mostrar uma mensagem “São Múltiplos” ou “Não são Múltiplos”,
indicando se os valores recebidos como entrada são múltiplos entre si.
*/

function multiplos(a, b) {
  if (a % b === 0) {
    return "São Múltiplos";
  } else if (b % a === 0) {
    return "São Múltiplos";
  } else if (a % b > 0) {
    return "não são Múltiplos";
  } else if (b % a > 0) {
    return "não são Múltiplos";
  }
}

console.log(multiplos(8, 5));
