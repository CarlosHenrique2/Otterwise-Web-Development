/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
Calcule a média de consumo de combustível utilizada em uma viagem e o
tempo levado durante a viagem. Você deve imprimir no console esses dois
valores:
*/

let distancia = 240; // 240km = 240.000mm
let velocidade = 80; // 80km/h
let combustivel = 20; // gasto de gasolina

const tempo = distancia / velocidade;
const mediaconsumo = distancia / combustivel;

console.log("Média de consumo: " + mediaconsumo + " km/l");
console.log("Tempo da viagem:" + tempo + "horas");
