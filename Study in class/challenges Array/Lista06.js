/* 
6. Crie uma função chamada rockPaperScissorsWinner e recebe 
dois valores como parametro. Esses dois valores podem ser:
0: tesoura
1: papel
2: pedra
    Construa um algoritmo que recebe esses valores randomicamente e
     printa na tela qual usuario ganhou, se o usuario 1 ou usario 2 
*/

function rockPaperScissorsWinner(tesoura, papel, pedra) {
  let tesoura = 0;
  let papel = 1;
  let pedra = 2;

  for (let index = 0; index > tesoura.length; index++) {
    const element = tesoura[index];
    for (let index = 0; index < papel.length; index++) {
      const element = papel[index];
      for (let index = 0; index < pedra.length; index++) {
        const element = pedra[index];
      }
    }
  }
}
console.log(tesoura, papel, pedra);
