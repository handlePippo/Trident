import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import { basicSchemaForm } from "../Utils/bs";

const Form = () => {
  const [taskList, setTaskList] = useState([]);
  const [duplicateError, setDuplicateError] = useState("");
  const dateInputRef = useRef(null);

  const addTask = () => {
    const { task: fTask } = formik.values;
    const { date: fDate } = formik.values;
    let counter = 0;
    taskList.forEach((el) => {
      if (fTask === el.task && fDate === el.date) {
        counter++;
      }
    });
    if (counter === 0) {
      setTaskList([
        ...taskList,
        { task: formik.values.task, date: formik.values.date },
      ]);
      counter = 0;
    } else {
      setDuplicateError("Per favore, non inserire doppioni!");
      setTimeout(() => {
        setDuplicateError("");
      }, 1000);
    }
  };

  const formik = useFormik({
    initialValues: {
      task: "",
      date: null,
    },
    validationSchema: basicSchemaForm,
    onSubmit: (values, actions) => {
      addTask();
      setTimeout(() => {
        actions.resetForm({
          task: "",
          date: null,
        });
        dateInputRef.current.value = null;
      }, 1000);
    },
  });

  return (
    <div className='d-flex flex-row justify-content-around'>
      <div className='d-flex flex-row '>
        <h2 style={{ position: "absolute" }}>Tasklist:</h2>
        <ul style={{ position: "relative", marginTop: "50px" }}>
          {taskList.map((el, index) => {
            return (
              <li key={index}>
                {el.task} entro il: {el.date}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='d-flex'>
        <form onSubmit={formik.handleSubmit} autoComplete='off'>
          <label htmlFor='task'>Inserisci un Task</label>
          <input
            type='text'
            id='task'
            className={
              formik.errors.task && formik.touched.task ? "input-error" : ""
            }
            value={formik.values.task}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Inserisci un Task'
          />
          {formik.errors.task && formik.touched.task && (
            <p className='error'>{formik.errors.task}</p>
          )}
          <label htmlFor='date'>Inserisci una data</label>
          <input
            type='date'
            id='date'
            ref={dateInputRef}
            className={
              formik.errors.date && formik.touched.date ? "input-error" : ""
            }
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.date && formik.touched.date && (
            <p className='error'>{formik.errors.date}</p>
          )}
          <button
            onSubmit={addTask}
            disabled={formik.values.task === "" || formik.values.date === null}
          >
            Aggiungi
          </button>
          {duplicateError && <p className='error'>{duplicateError}</p>}
        </form>
      </div>
    </div>
  );
};

export default Form;
