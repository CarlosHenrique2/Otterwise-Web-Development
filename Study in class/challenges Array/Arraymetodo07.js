/* 
2. Levando em consideração o array abaixo, crie um programa que imprima na tela o valor total 
que o usuário terá que pagar.
[{name: “banana”, price: 4.5}, 
]{name: “arroz”, price: 8.3}, 
{name: “feijão”, price: 10}, 
{name: “cebola”, price: 6.3}] 
*/

const Price = [
  { name: "banana", price: 4.5 },
  { name: "arroz", price: 8.3 },
  { name: "feijão", price: 10 },
  { name: "cebola", price: 6.3 },
];

const sumPrice = Price.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(sumPrice);
