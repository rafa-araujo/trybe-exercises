/*1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

n = 5
*****
*****
*****
*****
*****

*/

let n = 3;
let ast = "*";
let astL = "";

if (n > 1){
    for (let index = 1; index <= n; index += 1){
        astL = astL + ast;
    };
    for (let index = 0; index < n; index += 1){
        console.log(astL);;
    };
    
}else{
    console.log("Valor inserido inválido");
}
