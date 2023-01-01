//import logo from './logo.svg';
import logo from './pers.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {/* Formulario simple<code>src/App.js</code> and save to reload. */}
         Formulario simple para registrar persona
        </p>
        <a
          className="App-link"
          href="https://github.com/jhianpolmaximilianoramosgil/VistaImagDatosReact/tree/Lab04"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir al Github
        </a>
      </header>
    </div>
  );
}

export default App;
