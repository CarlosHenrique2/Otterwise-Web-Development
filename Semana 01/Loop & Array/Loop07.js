/*
numero par & ímpar -> Identificamos se um número é par ou ímpar quando o dividimos 
por dois. Se o resto da divisão for zero, o número é par; caso contrário, é ímpar

Numero positivo ou negativo -> Identificamos que um número é positivo quando esta 
+10 ou 10 agora numeros negativos são inferiores a 0 sempre e sempre são representados 
com -10 

7 - Dado um array de números, mostre quantos valores são pares, quantos são
ímpares, quantos são positivos e quantos são negativos.

3 valor(es) par(es)
2 valor(es) impar(es)
1 valor(es) positivo(s)
3 valor(es) negativo(s)

par = 2 % 2 === 0;
impar = 3 % 2 !== 0;
positivo = positivo > 0;
negativo = negativo < 0;

*/


let Numeros = [-5,0,-3,-4,12];
let par = 0;
let inpar = 0;
let positivo = 0;
let negativo = 0;

for (let index = 0; index < Numeros.length; index++) {
    if (Numeros[index] % 2 === 0) {
        par++;
    } if (Numeros[index] % 2 !== 0) {
        inpar++;
    } if (Numeros[index] > 0) {
        positivo++;
    } if (Numeros[index] < 0) {
        negativo++;
    } else {
        console.log(`invalido`)
    }
}

console.log(`${par} valor(es) par(es)`)
console.log(`${inpar} valor(es) impar(es)`)
console.log(`${positivo} valor(es) positivo(s)`)
console.log(`${negativo} valor(es) negativo(s)`)













const teste = () => {
    let matriz = []

    for (let i = 0; i < matriz.length; i++) {
        if (matriz == 3 && matriz == 5) {
            palin++
        }
    }
    console.log(palin)
}