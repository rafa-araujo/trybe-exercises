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

