/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
Uma imobiliária paga às pessoas corretoras de imóveis um salário fixo por
mês e uma comissão de acordo com o valor de vendas realizado por elas. Faça
um programa que calcule e imprima no console o valor total recebido pela
pessoa corretora de imóveis no mês.
*/

let salario = 2000;
let valortotal = 30000;
let porcentagem = 1;

const comissao = valortotal * (porcentagem / 100);
const totalsalario = comissao + salario;

console.log(`Valor Mensal: R$ ${totalsalario}`)




