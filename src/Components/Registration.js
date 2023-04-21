import React, { useRef } from "react";
import { useFormik } from "formik";
import { basicSchemaRegistration } from "../Utils/bs";

const Registration = () => {
  const dateInputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      cognome: "",
      email: "",
      password: "",
      confirmPassword: "",
      datanascita: null,
    },
    validationSchema: basicSchemaRegistration,
    onSubmit: (values, actions) => {
      //businesslogic
      setTimeout(() => {
        actions.resetForm();
        dateInputRef.current.value = null;
      }, 1000);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} autoComplete='off'>
        <label htmlFor='nome'>Nome</label>
        <input
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type='text'
          id='name'
          placeholder='Inserisci il tuo nome'
          className={
            formik.errors.name && formik.touched.name ? "input-error" : ""
          }
        />
        {formik.errors.name && formik.touched.name && (
          <p className='error'>{formik.errors.name}</p>
        )}
        <label htmlFor='cognome'>Cognome</label>
        <input
          value={formik.values.cognome}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type='text'
          id='cognome'
          placeholder='Inserisci il tuo cognome'
          className={
            formik.errors.cognome && formik.touched.cognome ? "input-error" : ""
          }
        />
        {formik.errors.cognome && formik.touched.cognome && (
          <p className='error'>{formik.errors.cognome}</p>
        )}
        <label htmlFor='email'>Email</label>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type='email'
          id='email'
          placeholder='Inserisci la tua mail'
          className={
            formik.errors.email && formik.touched.email ? "input-error" : ""
          }
        />
        {formik.errors.email && formik.touched.email && (
          <p className='error'>{formik.errors.email}</p>
        )}
        <label htmlFor='data'>Data di nascita</label>

        <input
          value={formik.values.datanascita}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          ref={dateInputRef}
          type='date'
          id='datanascita'
          className={
            formik.errors.datanascita && formik.touched.datanascita
              ? "input-error"
              : ""
          }
        />
        {formik.errors.datanascita && formik.touched.datanascita && (
          <p className='error'>{formik.errors.datanascita}</p>
        )}

        <label htmlFor='email'>Password</label>
        <input
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type='password'
          id='password'
          placeholder='Inserisci la password'
          className={
            formik.errors.password && formik.touched.password
              ? "input-error"
              : ""
          }
        />
        {formik.errors.password && formik.touched.password && (
          <p className='error'>{formik.errors.password}</p>
        )}
        <label htmlFor='confirmPassword'>Conferma Password</label>
        <input
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type='password'
          id='confirmPassword'
          placeholder='Inserisci nuovamente la password'
          className={
            formik.errors.confirmPassword && formik.touched.confirmPassword
              ? "input-error"
              : ""
          }
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <p className='error'>{formik.errors.confirmPassword}</p>
        )}

        <button type='submit' disabled={formik.isSubmitting}>
          Registrati
        </button>
      </form>
    </>
  );
};

export default Registration;
