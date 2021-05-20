let valorDeCusto = 100;
let imposto = valorDeCusto * 20 / 100;
let valorDeCustoFinal = valorDeCusto + imposto;
let valorDeVenda = 200;
let lucro = valorDeVenda - valorDeCustoFinal;
let lucroFinal = lucro * 1000;

if(valorDeCusto < 0 || valorDeVenda < 0){
    console.log("Valor inserido incorreto");
}
else{
    console.log("Lucro com a venda de 1000 produtos: ",lucroFinal);
}