import React from 'react';
import useTimer from './useTimer';

const App = () => {
  const { timer, randomNumber, isMultiple } = useTimer();

  return (
    <div className="App">
      {timer}
      <br />
      {randomNumber}
      <br />
      {isMultiple ? 'Acerto' : ''}
    </div>
  );
}

// 1 - Faça um componente funcional React com as seguintes funcionalidades:
// A cada 10 segundos ele gera e exibe na tela um número aleatório de 1 a 100;
// Se o número for múltiplo de 3 ou 5, uma mensagem "Acerto" é exibida na tela;
// A mensagem de acerto é removida 4 segundos depois de ser exibida;
// O timer é removido quando o componente é desmontado.

export default App;
