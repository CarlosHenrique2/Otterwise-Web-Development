/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
Faça um programa que receba de entrada três valores e mostre no console
a soma dos dois maiores.
*/


function maior (a,b,c) {
    if (a < b && a < c) {
        return b + c
    }else if (b < a && b < c) {
        return a + c
    }else {
        return b + a
    }
}

console.log(maior(10,20,30))