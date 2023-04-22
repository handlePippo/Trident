import React, { useRef, useState } from "react";
import { basicSchemaForm } from "../Utils/bs";
import BackButton from "../Utils/backBtn";
import Input from "../Library/Input";

const Form = () => {
  const [taskList, setTaskList] = useState([]);
  const [form, setForm] = useState({ task: "", date: null });
  const [error, setError] = useState("");
  const [duplicateError, setDuplicateError] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (value, name) => {
    if (name === "task") {
      setForm({ ...form, task: value });
    } else if (name === "date") {
      setForm({ ...form, date: value });
    }
    try {
      basicSchemaForm.validateSync({ ...form, [name]: value });
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let counter = 0;
    taskList.forEach((el) => {
      if (form.task === el.task && form.date === el.date) {
        counter++;
      }
    });
    if (counter === 0) {
      setTaskList([...taskList, { task: form.task, date: form.date }]);
      counter = 0;
      setForm({ task: "", date: null });
      dateInputRef.current.reset();
    } else {
      setDuplicateError("Per favore, non inserire doppioni!");
      setTimeout(() => {
        setDuplicateError("");
      }, 1000);
    }
  };

  console.log(form.date);

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
        <form onSubmit={handleSubmit} autoComplete='off' ref={dateInputRef}>
          <Input
            typeInput='text'
            name='task'
            label={"Inserisci un Task"}
            value={form.task}
            handleChange={handleChange}
            placeholder='Es: fare la spesa'
          />
          <Input
            name='date'
            typeInput='date'
            value={form.date}
            handleChange={handleChange}
            label='Inserisci una data'
            error={error}
            duplicateError={duplicateError}
          />
          <button
            onSubmit={handleSubmit}
            disabled={form.task === "" || form.date === null || error}
          >
            Aggiungi
          </button>
        </form>
      </div>
      <BackButton />
    </div>
  );
};

export default Form;
