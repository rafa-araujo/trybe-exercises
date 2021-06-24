// Para fixar
// Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!' ;
// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:


// Ao chamar a função doingThings:
const doingThings = (wakeUp) => {
  console.log();
}

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const acordar = (acordar) => "Acordando!!";
console.log(acordar(acordar));

const cafe = (cafe) => "Bora tomar café!!";
console.log(cafe(cafe));

function dormir(dormir) {
  acordar = "Partiu dormir!!";
  console.log(acordar);
}

// const acordar = (acordar) => {
//   acordar = 'Acordando!!';
// }
// const cafe = (cafe) => {
//   cafe = 'Bora tomar café!!';
// }
// const dormir = (dormir) => {
//   dormir = 'Partiu dormir!!';
// }
