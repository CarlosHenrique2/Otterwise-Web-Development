/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
Um banco vai liberar linhas de crédito só para servidores públicos. Caso o(a)
servidor(a) for professor(a) terá uma linha de crédito especial com uma taxa de
juros menor. Crie um algoritmo que possui três valores de entradas: nome
completo (string), servidor (boolean), professor (boolean) e que imprime uma
mensagem dizendo se a pessoa tem acesso a linha de crédito, se sim, qual linha
de crédito.
*/

let nome = "carlitos teves"
let servidor = false;
let professor = true;


if (servidor === true && professor === true) {
    console.log(`Parabéns ${nome}! Você tem acesso a nossa linha de crédito especial! `)
}else if (servidor === false && professor === true) {
    console.log(`${nome} infelizmente você não tem uma linha de crédito disponível.`)
}else if (servidor === true && professor === false) {
    consoleconsole.log(`${nome}, você tem acesso a nossa linha de crédito para servidores.`);
}

