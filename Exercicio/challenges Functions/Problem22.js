/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
 Pegue um valor de entrada e calcule o menor número de notas possíveis
(cédulas) no qual o valor pode ser decomposto. As notas consideradas são de
100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas
necessárias.
1 - o desafio informa que precisa de uma entrada minima
2 - o desafio informa que a entrada vai ser deconposta 
3 - vai ser deconposta por 1,2,5,10,20,50,100
4 - o desafio informa que a saida precisa ser caso o valor seja 500 
5 - exemplo (5) notas de R$ 100,00
*/

const dividir = 1111;

function desconstruir(dividir) {
  let cem = Math.floor(dividir / 100);
  let sobra = dividir % 100;
  let cinq = Math.floor(sobra / 50);
  sobra = sobra % 50;
  let vinte = Math.floor(sobra / 20);
  sobra = sobra % 20;
  let dez = Math.floor(sobra / 10);
  sobra = sobra % 10;
  let cinco = Math.floor(sobra / 5);
  sobra = sobra % 5;
  let dois = Math.floor(sobra / 2);
  sobra = sobra % 2;
  let um = Math.floor(sobra / 1);
  console.log(cem + " notas de R$ 100,00");
  console.log(cinq + " notas de R$ 50,00");
  console.log(vinte + " notas de R$ 20,00");
  console.log(dez + " notas de R$ 10,00");
  console.log(cinco + " notas de R$ 5,00");
  console.log(dois + " notas de R$ 2,00");
  console.log(um + " notas de R$ 1,00");
}

console.log(desconstruir(dividir));
