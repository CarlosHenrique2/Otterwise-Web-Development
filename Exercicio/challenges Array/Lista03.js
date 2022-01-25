/* 
3. Levando em consideração o array [6, 21, 9, 2, 50, 98, 1] crie 
uma função que mostra o maior numero da lista
*/

let lista = [6, 21, 9, 2, 50, 98, 1];

function conta() {
  let maiornumero = 0;

  for (let index = 0; index < lista.length; index++) {
    if (lista[index] > maiornumero) {
      maiornumero = lista[index];
    }
  }
  console.log(maiornumero);
}

conta();
