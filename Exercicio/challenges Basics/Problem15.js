/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
Elabore um programa que receba três valores como entrada e mostre eles
em ordem crescente no console
*/

function crescente (a,b,c) {
    if (a > b && a > c) {
        if (b > c && b < a) {
            return a,b,c
        }
    }else if (b > a && b > c) {
        if (c > a && c < b) {
            return b,c,a
        }
    }else if (c > a && c > b) {
        if (a > b && a < c) {
            return c,a,b
        }
    }
}

console.log(crescente(10,11,12))