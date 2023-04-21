import React, { useState } from "react";
import { useFormik } from "formik";
import { basicSchemaMeteo } from "../Utils/bs";
import axios from "axios";

const Meteo = () => {
  const [meteo, setMeteo] = useState([]);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      city: "",
    },
    onSubmit: () => {
      try {
        axios
          .get(url)
          .then((response) => {
            setMeteo(response.data);
          })
          .catch(() => {
            formik.setErrors({
              city: "Inserisci una città valida",
            });
          });
      } catch (e) {
        setError(e.message);
      }
    },
    validationSchema: basicSchemaMeteo,
  });
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${formik.values.city}&APPID=424e34f5fc142070d70c3073d0d1ba14`;

  console.log(meteo);

  return (
    <>
      <form onSubmit={formik.handleSubmit} autoComplete='off'>
        <label htmlFor='city'>Inserisci una città</label>
        <input
          type='text'
          id='city'
          className={
            formik.errors.city && formik.touched.city ? "input-error" : ""
          }
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Es: Rome, it'
        />
        {formik.errors.city && formik.touched.city && (
          <p className='error'>{formik.errors.city}</p>
        )}
        {error && error}
        <button type='submit'>Check Meteo</button>
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
    </>
  );
};

export default Meteo;
