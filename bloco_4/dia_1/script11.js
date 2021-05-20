let salarioBruto = 3000;
let aliquotaINSS;
let aliquotaIR;


if (salarioBruto <= 1556.94){
    aliquotaINSS = salarioBruto * 0.08;
}else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    aliquotaINSS = salarioBruto * 0.09;
}else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    aliquotaINSS = salarioBruto * 0.11;
}else {
    aliquotaINSS = 570.88;
}

let salarioFinal = salarioBruto - aliquotaINSS;

if (salarioFinal <= 1903.98) {
    aliquotaIR = 0;
}else if (salarioFinal <= 2826.65) {
    aliquotaIR = (salarioFinal * 0.075) - 142.80;
}else if (salarioFinal <= 3751.05) {
    aliquotaIR = (salarioFinal * 0.15) - 354.80;
}else if (salarioFinal <= 4664.68) {
    aliquotaIR = (salarioFinal * 0.225) - 636.13;
}else{
    aliquotaIR = (salarioFinal * 0.275) - 869.36;
}

console.log("Salário:" + (salarioFinal - aliquotaIR));