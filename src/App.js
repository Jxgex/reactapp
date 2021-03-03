import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Jorge Eduardo Martínez Mohedano";
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hola Mundo desde React! :D
        </p>
        <p>{name}</p>
      </header>
    </div>
  );
}

export default App;
