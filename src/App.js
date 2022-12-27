import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <footer>
        <p>
          <a
            className="Git-link"
            href="https://github.com/OleksandraKoshyk/react-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          , by Oleksandra Koshyk
        </p>
      </footer>
    </div>
  );
}

export default App;
