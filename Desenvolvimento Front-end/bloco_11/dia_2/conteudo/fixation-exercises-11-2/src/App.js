// Exercicio 2 de fixação dia 11.2  
// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         {/*  adicione os componentes aqui */}
         <Order order={ headphone } />
         <Order order={ energyDrink } />
      </div>
    );
  }
}

export default App;

/* Exercicio 1 de fixação dia 11.2
import Image from './Image';
import cat from './cat.jpg';

function App() {
  return (
    <main>
      <Image source={cat} alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;
*/
