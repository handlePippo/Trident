import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import ConvertitorePage from "./Routes/ConvertitorePage";
import MeteoPage from "./Routes/MeteoPage";
import TasklistPage from "./Routes/TasklistPage";
import LoginPage from "./Routes/LoginPage";
import RegistrationPage from "./Routes/RegistrationPage";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

function App() {
  const isAuth = !!localStorage.getItem("currentUserData");
  const [auth, setAuth] = useState(isAuth);

  return (
    <Router>
      <AuthContext.Provider
        value={{
          setAuth,
        }}
      >
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route
            path='/homepage'
            element={
              <ProtectedRoute isAuth={auth}>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/convertitore'
            element={
              <ProtectedRoute isAuth={auth}>
                <ConvertitorePage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/meteo'
            element={
              <ProtectedRoute isAuth={auth}>
                <MeteoPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/tasklist'
            element={
              <ProtectedRoute isAuth={auth}>
                <TasklistPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/registration'
            element={
              <ProtectedRoute isAuth={auth}>
                <RegistrationPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
