import "./App.css";
import Convertitore from "./Components/Convertitore";
import Form from "./Components/Form";
import Meteo from "./Components/Meteo";
import Registration from "./Components/Registration";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {
          /* <Convertitore />
        <Meteo />*/
          <Form />
        }
        <Registration />
      </header>
    </div>
  );
}

export default App;
