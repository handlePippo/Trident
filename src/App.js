import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import ConvertitorePage from "./Routes/ConvertitorePage";
import MeteoPage from "./Routes/MeteoPage";
import Tasklist from "./Routes/Tasklist";
import LoginPage from "./Routes/LoginPage";
import RegistrationPage from "./Routes/RegistrationPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<LoginPage />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/convertitore' element={<ConvertitorePage />} />
          <Route path='/meteo' element={<MeteoPage />} />
          <Route path='/tasklist' element={<Tasklist />} />
          <Route path='/registration' element={<RegistrationPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
