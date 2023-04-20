import React, { useEffect, useState } from "react";
import axios from "axios";

const Convertitore = () => {
  const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_EUR";

  const [rate, setRate] = useState(0);
  const [eur, setEur] = useState(0);
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

  useEffect(() => {
    fetchData(apiUrl);
  }, [eur]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <p>EUR: {eur}</p>
        <p>USD: {Math.floor(eur / rate)}</p>
        <p>{error && error}</p>
      </div>
      <div>
        <button onClick={() => setEur(eur + 10)}>+10</button>
        <button onClick={() => setEur(eur + 100)}>+100</button>
        <button onClick={() => setEur(0)}>Reset</button>
      </div>
    </>
  );
};

export default Convertitore;
