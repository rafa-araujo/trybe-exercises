import './App.css';
import staringCat from './staringCat.jpg';
import Image from './Image';

function App() {
  return (
    <div>
      {/* Teste */}
      <Image source={staringCat} alternativeText="Cute cat staring" />
    </div>
  );
}

export default App;
