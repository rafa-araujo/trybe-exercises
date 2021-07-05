// First-Class Functions
// Atribuir funções à variáveis:
const sum = (a, b) => a + b;

// Passar funções como argumento para outras funções:
const sayHello = () => {
  console.log('hello trybers');
}

setTimeout(sayHello, 1000);

// Retornar uma função de outra função:
const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

// Higher Order Functions
const button = document.querySelector('#signup-button');

const registerUser = () => {
  console.log('Registrado com sucesso!');
};

button.addEventListener('click', registerUser);


//Exemplo
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});