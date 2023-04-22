import React, { useCallback, useContext, useState } from "react";
import BackButton from "../Utils/backBtn";
import { useNavigate } from "react-router-dom";
import { basicSchemaLogin } from "../Utils/bs";
import { AuthContext } from "../App";
import Button from "../Library/Button";
import Input from "../Library/Input";
import { Credentials } from "../credentials";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [login, setLogin] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (value, name) => {
    if (name === "email") {
      setLogin({ ...login, email: value });
    } else if (name === "password") {
      setLogin({ ...login, password: value });
    } else {
      setLogin({ ...login, confirmPassword: value });
    }
    try {
      basicSchemaLogin.validateSync({ ...login, [name]: value });
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (
        login.email === Credentials.email &&
        login.password === Credentials.password
      ) {
        setAuth(true);
        navigate("/homepage");
      } else {
        setAuth(false);
        setError("Dati di accesso errati! Riprovare.");
        setTimeout(() => {
          setError("");
        }, 1500);
      }
    },
    [login.email, login.password, setAuth, navigate, setError]
  );

  const registrationUser = () => {
    navigate("/registration");
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <Input
          value={login.email}
          handleChange={handleChange}
          typeInput='email'
          name='email'
          placeholder='Inserisci la tua mail'
          label='Email'
        />
        <Input
          value={login.password}
          handleChange={handleChange}
          typeInput='password'
          name='password'
          placeholder='Inserisci la tua password'
          label='Password'
        />
        <Input
          value={login.confirmPassword}
          handleChange={handleChange}
          typeInput='password'
          name='confirmPassword'
          placeholder='Inserisci di nuovo la tua password'
          label='Conferma Password'
          error={error}
        />

        <Button name='Accedi' type='submit' isDisabled={!!error} />

        <Button
          name='Registrati'
          handleClick={registrationUser}
          isDisabled={!!error}
        />
        <BackButton />
      </form>
    </>
  );
};

export default Login;
