/* 
1 - o desafio informa que a função precisa de argumento
2 - o desafio informa que a string deve sair formatada
*/

var date = new Date(null); // instanciando uma variavel do tipo data com valor nulo
date.setSeconds(33567); // dizendo os segundos aqui 
var result = date.toISOString().substr(11, 8); // o subtrs é para filtar uma quantidade de informções que não vão ser uteis 

console.log(result)

