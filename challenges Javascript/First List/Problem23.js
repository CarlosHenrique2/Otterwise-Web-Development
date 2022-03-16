/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
Crie uma função que recebe como argumento um valor em segundos,
calcula e retorne uma string formatada HH:MM:SS (horas:minutos:segundos) .
*/

function ContarHora(H) {
  let hora = 00;
  let minuto = 00;
  let segundo = 00;

  if (H >= 0 && H < 10) {
    segundo = "0" + H;
    console.log(hora + ":" + minuto + ":" + segundo);
  }

  if (H >= 0 && H < 59) {
    segundo = H;
  }

  if (H >= 60 && H < 3600) {
    minuto = Math.floor(H / 60);
    segundo = H % 60;
    console.log(hora + ":" + minuto + ":" + segundo);
  }

  if (H >= 3600) {
    hora = Math.floor(H / 3600);
    minuto = Math.floor((H % 3600) / 60);
    segundo = (H % 3600) % 60;
    console.log(hora + ":" + minuto + ":" + segundo);
  }
}

ContarHora(600);
