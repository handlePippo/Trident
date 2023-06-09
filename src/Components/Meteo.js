import React, { useCallback, useContext, useState } from "react";
import { basicSchemaMeteo } from "../Utils/bs";
import axios from "axios";
import BackButton from "../Utils/backBtn";
import Input from "../Library/Input";
import Button from "../Library/Button";
import { ReducerContext } from "./Reducer/wrapper";

const Meteo = () => {
  const [meteo, setMeteo] = useState([]);
  const [city, setCity] = useState("");
  const [state, dispatch] = useContext(ReducerContext);
  const { error } = state;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=424e34f5fc142070d70c3073d0d1ba14`;

  const fetchData = useCallback(() => {
    try {
      axios
        .get(url)
        .then((response) => {
          setMeteo(response.data);
        })
        .catch(() => {
          dispatch({
            type: "ERROR",
            payload: "Impossibile individuare questa città",
          });
        });
    } catch (e) {
      dispatch({
        type: "ERROR",
        payload: e.message,
      });
    }
  }, [url, dispatch]);

  const handleChange = (value) => {
    setCity(value);
    try {
      basicSchemaMeteo.validateSync({ city: value });
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

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      fetchData();
    },
    [fetchData]
  );

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <Input
          name='city'
          value={city}
          handleChange={handleChange}
          placeholder='Es: Rome, it'
          error={error}
          label='Inserisci una città'
        />
        <Button type='submit' name='Check Meteo' isDisabled={!!error} />
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
