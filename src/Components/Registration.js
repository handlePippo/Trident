import React, { useRef, useState } from "react";
import { basicSchemaRegistration } from "../Utils/bs";
import BackButton from "../Utils/backBtn";
import Button from "../Library/Button";
import Input from "../Library/Input";
import { useEffect } from "react";
import { useCallback } from "react";
import Loading from "../Utils/loading";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const dateInputRef = useRef(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [registration, setRegistration] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleChange = (value, name) => {
    switch (name) {
      case "name":
        setRegistration({ ...registration, name: value });
        break;
      case "surname":
        setRegistration({ ...registration, surname: value });
        break;
      case "email":
        setRegistration({ ...registration, email: value });
        break;
      case "password":
        setRegistration({ ...registration, password: value });
        break;
      case "confirmPassword":
        setRegistration({ ...registration, confirmPassword: value });
        break;
      case "datanascita":
        setRegistration({ ...registration, datanascita: value });
        break;
      default:
        break;
    }
    try {
      basicSchemaRegistration.validateSync({
        ...registration,
        [name]: value,
      });
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = useCallback(async () => {
    let counter = 0;
    if (usersData) {
      usersData.forEach((el) => {
        if (el.email === registration.email) counter++;
      });
      if (counter === 0) {
        setIsLoading(true);
        setUsersData([...usersData, registration]);
        localStorage.setItem(
          "users",
          JSON.stringify([...usersData, registration])
        );
        setError("");
        await wait(2000);
        setIsLoading(false);
        setSuccess(
          "Registrazione effettuata con successo! Puoi effettuare il login."
        );
        await wait(2000);
        setSuccess("");
        navigate("/");
      } else {
        setError("Utente già registrato!");
      }
      counter = 0;
    }
  }, [registration, usersData, navigate]);

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users" || []));
    if (users && users.length > 0) {
      setUsersData(users);
    }
  }, []);

  return (
    <>
      <form autoComplete='off'>
        <Input
          value={registration.name}
          handleChange={handleChange}
          name='name'
          placeholder='Inserisci il tuo nome'
          label='Nome'
        />
        <Input
          value={registration.surname}
          handleChange={handleChange}
          name='surname'
          placeholder='Inserisci il tuo cognome'
          label='Cognome'
        />
        <Input
          value={registration.email}
          handleChange={handleChange}
          typeInput='email'
          name='email'
          placeholder='Inserisci la tua mail'
          label='Email'
        />
        <Input
          value={registration.datanascita}
          handleChange={handleChange}
          ref={dateInputRef}
          typeInput='date'
          name='datanascita'
          label='Data di nascita'
        />
        <Input
          value={registration.password}
          handleChange={handleChange}
          typeInput='password'
          name='password'
          label='Password'
          placeholder='Inserisci la password'
        />
        <Input
          value={registration.confirmPassword}
          handleChange={handleChange}
          typeInput='password'
          name='confirmPassword'
          label='Conferma Password'
          placeholder='Inserisci nuovamente la password'
          error={error}
          success={success}
        />

        <Button
          name='Registrati'
          handleClick={handleSubmit}
          isDisabled={!!error || Object.keys(registration).length === 0}
        />
        {isLoading && <Loading color={"#4299E1"} />}
      </form>
      <BackButton goto='/' />
    </>
  );
};

export default Registration;
