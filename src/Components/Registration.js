import React, { useRef, useState } from "react";
import { basicSchemaRegistration } from "../Utils/bs";
import BackButton from "../Utils/backBtn";
import Button from "../Library/Button";
import Input from "../Library/Input";

const Registration = () => {
  const dateInputRef = useRef(null);
  const [error, setError] = useState("");

  const [registration, setRegistration] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    datanascita: null,
  });

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
        return;
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete='off'>
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
        />

        <Button name='Registrati' isDisabled={!!error} />
      </form>
      <BackButton goto='/' />
    </>
  );
};

export default Registration;
