/* Faça um programa que some todos os elementos do array abaixo e //prima na tela o somatório:
 */

const outro = [10, 2, 78, 1, 92, 24, 13];

const sun = outro.reduce((acc, number) => {
  return acc + number;
  console.log(outro);
}, 0);

console.log(sun);
