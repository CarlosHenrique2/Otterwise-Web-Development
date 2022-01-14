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