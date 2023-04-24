import React, { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { basicSchemaLogin } from "../../Utils/bs";
import { AuthContext } from "../../App";
import Button from "../../Library/Button";
import Input from "../../Library/Input";
import { useEffect } from "react";
import BackButton from "../../Utils/backBtn";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [internalStorage, setInternalStorage] = useState([]);
  const [login, setLogin] = useState([]);
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleChange = useCallback(
    (value, name) => {
      setLogin((prevState) => ({ ...prevState, [name]: value }));

      const validateField = async () => {
        try {
          await basicSchemaLogin.validateAt(name, { ...login, [name]: value });
          setError("");
        } catch (error) {
          setError(error.message);
        }
      };
      validateField();
    },
    [login]
  );

  const checkLocalStorage = (item, storage) => {
    return storage.some(
      (el) => el.email === item.email && el.password === item.password
    );
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (checkLocalStorage(login, internalStorage)) {
        setAuth(true);
        localStorage.setItem("currentUserData", JSON.stringify(login));
        navigate("/homepage");
      } else {
        setError("Dati di accesso errati! Riprovare.");
        await wait(2000);
        setError("");
      }
    },
    [login, setAuth, navigate, setError, internalStorage]
  );

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("users") || "[]");
    if (data.length > 0) {
      setInternalStorage(data);
    } else setInternalStorage([]);
  }, []);

  const registrationUser = () => {
    navigate("/registration");
  };

  return (
    <>
      <form>
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

        <Button
          name='Accedi'
          type='submit'
          isDisabled={!!error || login.length === 0}
          handleClick={handleSubmit}
        />

        <Button
          name='Registrati'
          handleClick={registrationUser}
          isDisabled={!!error}
        />
      </form>
      <BackButton />
    </>
  );
};
export default Login;
