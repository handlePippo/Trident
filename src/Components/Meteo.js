import React, { useState } from "react";
import { basicSchemaMeteo } from "../Utils/bs";
import axios from "axios";
import BackButton from "../Utils/backBtn";
import Input from "../Library/Input";

const Meteo = () => {
  const [meteo, setMeteo] = useState([]);
  const [error, setError] = useState("");
  const [text, setText] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&APPID=424e34f5fc142070d70c3073d0d1ba14`;

  const fetchData = async () => {
    try {
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          setMeteo(response.data);
        })
        .catch(() => {
          setError("Impossibile individuare questa città");
        });
    } catch (e) {
      setError(e.message);
    }
  };

  const handleChange = (value) => {
    setText(value);
    try {
      basicSchemaMeteo.validateSync({ city: value });
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <Input
          name='city'
          value={text}
          handleChange={handleChange}
          placeholder='Es: Rome, it'
          error={error}
          label='Inserisci una città'
        />
        <button type='submit' disabled={!!error}>
          Check Meteo
        </button>
        <div>
          {Object.values(meteo).length > 0 && (
            <>
              <p>
                Meteo di {meteo.name}, {meteo.sys.country}:
              </p>
              {meteo.weather.map((el) => {
                return (
                  <p>
                    {" "}
                    {el.main} {el.description && `(${el.description})`}
                  </p>
                );
              })}
            </>
          )}
        </div>
      </form>
      <BackButton />
    </>
  );
};

export default Meteo;
