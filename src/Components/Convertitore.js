import React, { useEffect, useState } from "react";
import axios from "axios";
import BackButton from "../Utils/backBtn";
import Input from "../Library/Input";
import { basicSchemaEurUsd } from "../Utils/bs";

const Convertitore = () => {
  const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_EUR";

  const [rate, setRate] = useState(0);
  const [eur, setEur] = useState("");
  const [error, setError] = useState("");

  const fetchData = (url) => {
    try {
      axios.get(url).then((response) => {
        setRate(Number(response.data.exchange_rate));
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (value) => {
    setEur(value);
    console.log(value);
    try {
      basicSchemaEurUsd.validateSync({ eur: value });
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData(apiUrl);
  }, []);

  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <div className='px-5 '>
          <Input
            placeholder={"EUR €"}
            value={eur}
            handleChange={handleChange}
            error={error}
            label={"Inserisci una cifra"}
          />
          <h1>USD: {Math.round(eur / rate)} $</h1>
        </div>
      </div>
      <div className='d-flex flex-column justify-content-center'>
        <button disabled={!!error} onClick={() => setEur(Number(eur) + 10)}>
          +10
        </button>
        <button
          disabled={!!error}
          className='mx-2'
          onClick={() => setEur(Number(eur) + 100)}
        >
          +100
        </button>
        <button disabled={!!error} onClick={() => setEur(0)}>
          Reset
        </button>
      </div>
      <BackButton />
    </div>
  );
};

export default Convertitore;
