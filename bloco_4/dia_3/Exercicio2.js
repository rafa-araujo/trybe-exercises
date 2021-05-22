/*2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
n = 5
*
**
***
****
*****
*/

let n = 5;
let ast = "*";
let astL = "";


if (n > 1){
    for (let index = 1; index <= n; index += 1){
        astL = astL + ast;
        console.log(astL);
    };/*
    for (let index = 0; index < n; index += 1){
        
        console.log(astL);
    };*/
    
}else{
    console.log("Valor inserido inválido");
}