// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const right_answers =  ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const student_aswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (a, b) => {
  let pontuacao = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (b[i] === 'N.A') {
      pontuacao += 0;
    } 
    else if (b[i] === a[i]) {
      pontuacao += 1;
    } 
    else {
      pontuacao -= 0.5;
    }      
  }
  return pontuacao;
}

const checkAnswers = (gabarito, respostas, callback) => {
  return callback(gabarito, respostas);
}

console.log(checkAnswers(right_answers, student_aswers, check));
