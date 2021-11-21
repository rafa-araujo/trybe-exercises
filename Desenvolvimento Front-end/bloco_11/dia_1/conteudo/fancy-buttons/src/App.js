import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }

    this.handleEvent1 = this.handleEvent1.bind(this)
    this.handleEvent2 = this.handleEvent2.bind(this)
    this.handleEvent3 = this.handleEvent3.bind(this)

    }

    handleEvent1() {
      this.setState(({ numeroDeCliques1 }) => ({
        numeroDeCliques1: numeroDeCliques1 + 1,
      }), () => {
        console.log(`Botão 1 ${this.getButtonColor(this.state.numeroDeCliques1)}`);
      });
    }
    
    handleEvent2() {
      this.setState((estadoAnterior2, __props) => ({
        numeroDeCliques2: estadoAnterior2.numeroDeCliques2 + 1,
      }), () => {
        console.log(`Botão 2 ${this.getButtonColor(this.state.numeroDeCliques2)}`);
      });
    }
    
    handleEvent3() {
      this.setState((estadoAnterior3, __props) => ({
        numeroDeCliques3: estadoAnterior3.numeroDeCliques3 + 1,
      }), () => {
      console.log(`Botão 3 ${this.getButtonColor(this.state.numeroDeCliques3)}`);
      })
    }

    // Para essa função, não precisamos utilizar o bind porque ela é utilizada
    // apenas dentro do contexto do componente App
    getButtonColor(num) {
      // Essa função contém um ternário que realiza a lógica para mudarmos
      // a cor do botão para verde quando for um número par
      return num % 2 === 0 ? 'green' : 'white';
    }

  render() {
    const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state;

    return (
      <div>
        <button
          onClick={ this.handleEvent1 }
          style={{ backgroundColor: this.getButtonColor(numeroDeCliques1)}}
        >
          { numeroDeCliques1 }
        </button>
        
        <button
          onClick={ this.handleEvent2 }
          style={{ backgroundColor: this.getButtonColor(numeroDeCliques2)}}
        >
          {this.state.numeroDeCliques2}
        </button>
        
        <button
          onClick={this.handleEvent3}
          style={{ backgroundColor: this.getButtonColor(numeroDeCliques3) }}
        >
          {this.state.numeroDeCliques3}
        </button>

      </div>
    )
  }
}

export default App;
/*class App extends React.Component {
  handleClick() {
    // Essa chamada ao `this` retorna `undefined`? !
    console.log(this);
    console.log('Clicou');
  }

  render() {
    // Já essa chamada ao `this`, feita de dentro da função `render`, retorna o objeto que esperamos
    // console.log(this)
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;*/


/*class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App; */

