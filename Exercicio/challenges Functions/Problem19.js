/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
Crie uma função chamada checkSignal que possui um parâmetro e imprime
no console:
"x é positivo" se o número for positivo;
"x é negativo" se o número for negativo.
x deve ser substituído pelo número passado como argumento.
 */

function checkSignal (x) {
    if (x > 0) {
        return "x é positivo"
    } else {
        return "x é negativo"
    }

}


console.log(checkSignal(-1)) 