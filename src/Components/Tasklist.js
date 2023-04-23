import React, { useRef, useState } from "react";
import { basicSchemaForm } from "../Utils/bs";
import BackButton from "../Utils/backBtn";
import Input from "../Library/Input";
import Button from "../Library/Button";
import ToDoImg from "../Utils/media/todoimg.png";
import { useEffect } from "react";

const TaskList = () => {
  const dateInputRef = useRef(null);
  const [taskList, setTaskList] = useState([]);
  const [form, setForm] = useState({ task: "", date: null });
  const [error, setError] = useState("");
  const [duplicateError, setDuplicateError] = useState("");

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

  const handleSubmit = () => {
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

  useEffect(() => {
    if (taskList.length > 0) {
      localStorage.setItem("tasklist", JSON.stringify(taskList));
    }
  }, [taskList]);

  useEffect(() => {
    let tasklist = JSON.parse(localStorage.getItem("tasklist"));
    if (tasklist && tasklist.length > 0) {
      setTaskList(tasklist);
    }
  }, []);

  return (
    <div className='d-flex flex-row justify-content-around'>
      <div className='d-flex flex-row '>
        <img className='todoimg' src={ToDoImg} alt='Tasklist' />
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

          <Button
            name='Aggiungi'
            handleClick={handleSubmit}
            isDisabled={form.task === "" || form.date === null || error}
          />
        </form>
      </div>
      <BackButton />
    </div>
  );
};

export default TaskList;
