/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
Elabore um programa que receba três valores como entrada e mostre eles
em ordem crescente no console
*/

function crescente(c, b, a) {
  if (a < b && a < c) {
    if (b < c) {
      console.log(a, b, c);
    } else {
      console.log(a, c, b);
    }
  } else if (b < a && b < c) {
    if (a < c) {
      console.log(b, a, c);
    } else {
      console.log(b, c, a);
    }
  } else if (c < a && c < b) {
    if (b < a) {
      console.log(c, b, a);
    } else {
      console.log(c, a, b);
    }
  }
}

crescente(11, 10, 12);
