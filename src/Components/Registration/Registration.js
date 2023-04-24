import React, { useRef, useState } from "react";
import { basicSchemaRegistration } from "../../Utils/bs";
import BackButton from "../../Utils/backBtn";
import Button from "../../Library/Button";
import Input from "../../Library/Input";
import { useEffect } from "react";
import { useCallback } from "react";
import Loading from "../../Utils/loading";
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

  const handleChange = useCallback(
    (value, name) => {
      setRegistration((prevState) => ({ ...prevState, [name]: value }));

      const validateField = async () => {
        try {
          await basicSchemaRegistration.validateAt(name, {
            ...registration,
            [name]: value,
          });
          setError("");
        } catch (error) {
          setError(error.message);
        }
      };

      validateField();
    },
    [registration]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
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
          await wait(3000);
          setSuccess(
            "Registrazione effettuata con successo! Verrai rendirizzato alla pagina di login."
          );
          await wait(2000);
          setIsLoading(false);
          setSuccess("");
          navigate("/");
        } else {
          setError("Utente già registrato!");
        }
        counter = 0;
      }
    },
    [registration, usersData, navigate]
  );

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.length > 0) {
      setUsersData(users);
    }
  }, []);

  return (
    <>
      <form>
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
          type='submit'
          isDisabled={
            !!error || Object.keys(registration).length === 0 || isLoading
          }
        />
        {isLoading && <Loading color={"#4299E1"} />}
      </form>
      <BackButton goto='/' />
    </>
  );
};

export default Registration;
