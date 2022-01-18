/* 
Primeira Lista Aula_Pratica_-_Versao_T05_1
Uma pessoa desenvolvedora recebe frequentemente propostas de trabalho
pela CLT(Consolidação das Leis Trabalhistas) e pela PJ (Pessoa Jurídica).
Considerando que o trabalho como CLT envolve férias, 13° salário, R$ 700 de
benefício e 8% mensal referente ao FGTS. Faça um programa que receba como
entrada os dois valores mensais oferecidos e tome a decisão informando qual
proposta a pessoa deve aceitar.
*/

const CLTSalario = 5000;
const PJSalario = 5000;
const beneficios = 700;
const descontos = 8;


const FGTS = (CLTSalario * 8) / 100;
const SalarioLiqu = (CLTSalario - FGTS) - beneficios;

if (SalarioLiqu > PJSalario) {
    console.log(`Com a CLT ela vai receber ${SalarioLiqu}`)

}else {
    console.log(`Com a PJ ela vai receber ${PJSalario}`)
}
