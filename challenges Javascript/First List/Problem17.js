/* 
1 - desafio fornece hora de inicio 22:00
2 - desafio fornece hora de termino 6:00
3 - desafio informa que o maxímo é 24:00
4 - o desafio informa que precisa informar a duração do evento ocorrido
5 - informa que a saida deve ser: Tempo de Duração: 8 horas
6 - que seria o tempo de 22:00 ate as 6:00 da manhã 
*/

let inicio = 22;
let termino = 6;
let duração = 24;

if (inicio >= 24) {
  console.log("Hora inicio invalida");
} else if (termino >= 24) {
  console.log("Hora Termino invalida");
}
if (inicio > termino) {
  duração = 24 - inicio + termino;
} else {
  duração = termino - inicio;
}

console.log("Tempo de Duração:" + " " + duração + ":" + 0 + 0 + " " + "Horas");
