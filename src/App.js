import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import ConvertitorePage from "./Routes/ConvertitorePage";
import MeteoPage from "./Routes/MeteoPage";
import Tasklist from "./Routes/Tasklist";
import LoginPage from "./Routes/LoginPage";
import RegistrationPage from "./Routes/RegistrationPage";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

function App() {
  const [auth, setAuth] = useState({});

  return (
    <Router>
      <AuthContext.Provider
        value={{
          setAuth,
        }}
      >
        <Routes>
          <Route path='/' element={<LoginPage />} />
          {/* <Route path='/homepage' element={<Homepage />} /> */}
          <Route path='/convertitore' element={<ConvertitorePage />} />
          <Route path='/meteo' element={<MeteoPage />} />
          <Route path='/tasklist' element={<Tasklist />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route
            path='/homepage'
            element={
              <ProtectedRoute isAuth={auth}>
                <Homepage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
