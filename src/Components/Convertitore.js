import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Input from "../Library/Input";
import { basicSchemaEurUsd } from "../Utils/bs";
import Button from "../Library/Button";
import BackButton from "../Utils/backBtn";

const Convertitore = () => {
  const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_EUR";

  const [rate, setRate] = useState(0);
  const [eur, setEur] = useState(null);
  const [error, setError] = useState("");

  const conversion = useMemo(() => {
    return Math.round(eur / rate);
  }, [eur, rate]);

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
    try {
      basicSchemaEurUsd.validateSync({ eur: value });
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const resetFields = () => {
    setEur("");
    setError("");
  };

  useEffect(() => {
    fetchData(apiUrl);
  }, []);

  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <div className='px-5 position-relative '>
          <Input
            placeholder={"EUR €"}
            value={eur}
            handleChange={handleChange}
            error={error}
            label={"Inserisci una cifra"}
            isDisabled={error}
          />
          <h1 className='eurh1'>€</h1>
          <h1 className='usdh1'>{conversion} $</h1>
        </div>
      </div>
      <div className='d-flex flex-column justify-content-center'>
        <Button
          name={"+10"}
          handleClick={() => setEur(Number(eur) + 10)}
          isDisabled={!!error}
        />
        <Button
          name={"+100"}
          handleClick={() => setEur(Number(eur) + 100)}
          isDisabled={!!error}
        />
      </div>
      <Button name={"Reset"} handleClick={resetFields} />
      <BackButton />
    </div>
  );
};

export default Convertitore;
