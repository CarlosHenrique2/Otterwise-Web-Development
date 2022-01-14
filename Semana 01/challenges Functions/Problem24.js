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
