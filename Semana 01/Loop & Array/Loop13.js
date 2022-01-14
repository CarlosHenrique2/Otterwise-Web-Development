/* 
13 - Dado um array de nomes, faça um programa que tenha como entrada um
valor à ser pesquisado e retorne se o nome existe ou não no array. 
*/

let pesquisa = "Carla"

let users = ["Juliana", "Pedro", "Regina", "João", "Patrícia", "Gabriel", "Carlos", "Carla"]


for (let i = 0; i < users.length; i++) {
    if (users.length[i] === "Carla") {
        pesquisa++;
        console.log(pesquisa)
    } else {
        pesquisa--;
    }
    
}

console.log(pesquisa)

//console.log("O nome Carla existe no Array")
//console.log("O nome Carla não existe no Array")


/* 
bloqueo inicial foi como localizar pesquisar uma string no array 
segundo bloquei foi como vericar atráves de uma string um array indice por indice até encontrar o dado desejado

*/