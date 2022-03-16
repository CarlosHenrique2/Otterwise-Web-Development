/* 
1. Crie variáveis para armazenar algumas informações 
de cadastro de um estudante, são elas: nome, sobrenome, 
dia do nascimento, mês do nascimento, ano do nascimento, 
primeira nota e segunda nota. A partir dessas informações, 
você deve mostrar um relatório na tela da seguinte 
forma: Nome Completo, Idade, Data de Nascimento e Média:

Exemplo de Saída:
Nome Completo: João Pedro Bretanha
Idade: 29
Data de Nascimento: 11/04/1992
Média: 8 
*/

const nome = "Carlos";
const sobrenome = "Henrique";
const idade = 25;
const diadonascimento = "26";
const mesdonascimento = "10";
const anodonascimento = "1996";
const primeiranota = 10;
const segundanota = 6;
const media = (primeiranota + segundanota) / 2;

console.log(nome + " " + " " + sobrenome);
console.log("Idade: " + idade);
console.log(
  "Data de Nascimento: " +
    diadonascimento +
    "/" +
    mesdonascimento +
    "/" +
    anodonascimento
);
console.log("Média: " + media);
