/* 
Crie um algoritmo que imprime todos os valores de um array qualquer, menos o ultimo elemento. 
*/

let frutas = ["maça", "pera", "abacate", "morango", "uva"]


for (let index = 0; index < frutas.length; index++) {
    if (index !== frutas.length - 1) {
        const element = frutas[index];
        console.log(element)  
    }
}