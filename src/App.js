import "./App.css";
import Convertitore from "./Components/Convertitore";
import Meteo from "./Components/Meteo";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <Convertitore /> */}
        <Meteo />
      </header>
    </div>
  );
}

export default App;
