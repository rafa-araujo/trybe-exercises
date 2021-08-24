import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Para fixar</h1>
        <form>
          <input type="text" name="nome" /><br/><br/>
          <input type="number" name="idade" /><br/><br/>
          <input type="checkbox" name="" />
        </form>
    </div>
  );
}

export default App;

// 1 - Crie um formulário com um campo select , dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado
// 2 - Baixe a React Developer Tools e veja, nela, o dado inserido no elemento controlado sendo salvo no Estado.