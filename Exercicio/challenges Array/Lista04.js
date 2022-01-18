/* 
4. Crie uma função que conte quantas palavras existem na 
frase que for passada como parâmetro (dica: utilizem o método split de string) 
*/

let palavras = "Palavras bonitas oioioi";

function conta() {
  let outro = palavras.split(' ');
  console.log(palavras)
  console.log(outro)
  console.log(outro.length)
}


conta()
//console.log(palavras.length)
//console.log(outro)