/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
A mesma pessoa do exercício anterior quer saber o quanto ela irá pagar de
imposto de renda em cada uma das propostas que ela recebe. Tendo por base a
tabela abaixo realize o cálculo do imposto de renda e informe a pessoa para
ambas as propostas.
*/

let CLTSalario1 = 5000;
let pagar = (CLTSalario1 * 12);

console.log(pagar)


if ( pagar === 21453.00 ) {
    
    const ano = 0;
    console.log(`A desenvolvedora irá pagar R$${ano} por ano`)
}else if ( pagar === 32151.48 ) {
   
    const ano = (pagar * 7.5) / 100;
    console.log(`A desenvolvedora irá pagar R$${ano} por ano`)
}else if ( pagar === 42863.16 ) {
    
    const ano = (pagar * 15.0) / 100;
    console.log(`A desenvolvedora irá pagar R$${ano} por ano`)
}else if ( pagar === 45565.72 ) {
   
    const ano = (pagar * 22.5) / 100;
    console.log(`A desenvolvedora irá pagar R$${ano} por ano`)
}else if ( pagar >= 53565.72 ) {
    
    const ano = (pagar * 27.5) / 100;
    console.log(`A desenvolvedora irá pagar R$${ano} por ano`)
}else {
    console.log("erro")
}