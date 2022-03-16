/* 

4 - [REFATORAÇÃO] Dado um array de nomes, faça um programa que imprima na
tela todos os nomes (na mesma linha). 

Os valores de entrada serão:
Array;
Exemplo de Entrada:
['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
Exemplo de Saída:
Angela, Rosa, Ticiana, Carla, Renata
*/

const nomes = ["Pablo", "Ricardo", "João", "Fernando"]

const linha = () => {
    for (let i = 0; i < nomes; i++) {
        
    }
    console.log(nomes.toString(" "))
}

console.log(linha())