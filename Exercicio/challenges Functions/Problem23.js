/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
Crie uma função que recebe como argumento um valor em segundos,
calcula e retorne uma string formatada HH:MM:SS (horas:minutos:segundos) .
*/

var date = new Date(null); // instanciando uma variavel do tipo data com valor nulo
date.setSeconds(33567); // dizendo os segundos aqui 
var result = date.toISOString().substr(11, 8); // o subtrs é para filtar uma quantidade de informções que não vão ser uteis 

console.log(result)

