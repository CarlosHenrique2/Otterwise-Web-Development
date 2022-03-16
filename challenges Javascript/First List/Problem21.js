/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
 Crie uma função chamada calculate que possui três parâmetros. O primeiro
é uma string e os outros dois, números. A string será uma das seguintes opções:
"soma", "subtrai", "multiplica", "divide". A função calculate deve retornar o
resultado da operação (definida pela string) entre os dois números.
 */


function calculate(operacao, valor1, valor2 ) {
    switch(operacao) {
       case "soma":
          return valor1 + valor2;
        break;
       case "subtrai":
          return valor1 - valor2;
        break;
       case "multiplica":
          return valor1 * valor2;
        break;
       case "divide":
          return valor1 / valor2;
        break;
       default:
          return "operação desconhecida";
        break;
    }
 }

 console.log(calculate("soma" ,10,10))