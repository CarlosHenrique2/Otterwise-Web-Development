/* 
6 - [REFATORAÇÃO] Dado um array de números, faça um programa que imprima
na tela somente os números positivos.
OBS: Para melhorar a resolução desse problema, crie funções que também
imprimem os números negativos, os pares, os ímpares e realize a contagem de
cada um deles. 
*/

let numeros = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]


const positivos = () => {
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] > 0) {
            console.log(numeros[index])
        }
    }
}

console.log(positivos());


numeros = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

const positivos1 = () => {
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] > 0) {
            console.log(numeros[index])
        }
    }
}

console.log(positivos());