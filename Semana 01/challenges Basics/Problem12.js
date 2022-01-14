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

