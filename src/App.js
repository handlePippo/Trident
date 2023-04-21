import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import ConvertitorePage from "./Routes/ConvertitorePage";
import MeteoPage from "./Routes/MeteoPage";
import Tasklist from "./Routes/Tasklist";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/convertitore' element={<ConvertitorePage />} />
          <Route path='/meteo' element={<MeteoPage />} />
          <Route path='/tasklist' element={<Tasklist />} />
          <Route path='/registration' element={""} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
