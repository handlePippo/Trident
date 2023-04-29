import React, { useEffect, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginToHomepage from "../Utils/media/logintohomepage.png";
import { basicSchemaLogin } from "../Utils/bs";
import Button from "../Library/Button";
import Input from "../Library/Input";
import BackButton from "../Utils/backBtn";
import LoggedUser from "../Utils/loggedUser";
import { ReducerContext } from "./Reducer/wrapper";

const Login = () => {
  const navigate = useNavigate();
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const [isLogged, setIsLogged] = useState(false);
  const [login, setLogin] = useState([]);

  const [state, dispatch] = useContext(ReducerContext);
  const { error, usersData } = state;

  const handleChange = useCallback(
    (value, name) => {
      setLogin((prevState) => ({ ...prevState, [name]: value }));

      const validateField = async () => {
        try {
          await basicSchemaLogin.validateAt(name, { ...login, [name]: value });
          dispatch({
            type: "ERROR",
            payload: "",
          });
        } catch (error) {
          dispatch({
            type: "ERROR",
            payload: error.message,
          });
        }
      };
      validateField();
    },
    [login, dispatch]
  );

  const checkLocalStorage = (item, storage) => {
    return storage.some(
      (el) => el.email === item.email && el.password === item.password
    );
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (checkLocalStorage(login, usersData)) {
        dispatch({
          type: "SET_AUTH",
          payload: true,
        });
        localStorage.setItem("currentUserData", JSON.stringify(login));
        navigate("/homepage");
      } else {
        dispatch({
          type: "ERROR",
          payload: "Dati di accesso errati! Riprovare.",
        });
        await wait(2000);
        dispatch({
          type: "ERROR",
          payload: "",
        });
      }
    },
    [login, dispatch, usersData, navigate]
  );

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("users") || "[]");
    let currentUser = JSON.parse(
      localStorage.getItem("currentUserData") || "[]"
    );
    dispatch({
      type: "USERS_DATA",
      payload: data,
    });
    if (Object.values(currentUser).length > 0) setIsLogged(true);
    console.log(currentUser);
  }, [dispatch]);

  const registrationUser = () => {
    navigate("/registration");
  };

  const handleLogOut = () => {
    localStorage.removeItem("currentUserData");
    dispatch({
      type: "SET_AUTH",
      dispatch: false,
    });
    window.location.reload();
  };

  return (
    <>
      <form>
        {!isLogged ? (
          <>
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
          </>
        ) : (
          <Button name='Logout' handleClick={handleLogOut} />
        )}
      </form>
      {isLogged && <BackButton text='Homepage' myimg={LoginToHomepage} />}
      <LoggedUser />
    </>
  );
};
export default Login;
