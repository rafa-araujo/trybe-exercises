/*
Por ser um código Javascript, o JSX permite que se faça injeções de algoritmos dentro da estrutura HTML. Portanto, é possivel que se aplique diretamente na estrutura códigos que renderizarão outras diversas expressões, por exemplo:
const nome = 'Jorge Maravilha';
const element = <h1>Hello, {nome}</h1>;

------------------------------------------------------------------------

E se aprofundarmos um pouco mais chamando uma função na nossa constante element?

function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

const element = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;

------------------------------------------------------------------------

Agora, vamos incorporar a nossa constante element na função helloWorld , retornar um código JSX e encapsulá-la em uma div :

function helloWorld (nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}


const container = <div>{element}</div>;

------------------------------------------------------------------------

Lembra que falamos sobre a substituição de class por className em JSX? Podemos também utilizar expressões Javascript para atribuir valor à este atributo.

const nome = 'Jorge Maravilha';
const classe = 'hello-class';
const element = <h1 className={classe}>Hello, {nome}</h1>;
*/

//Para fixar, crie um elemento JSX que recebe o valor "Hello, JSX" de uma constante chamada textJSX , e o incorpore em uma tag h1 .


//const textJSX = <h1>"Hello, JSX"</h1>
const helloWorld = <h1>"Hello Worl!</h1>
console.log(helloWorld);