import React, { useCallback, useRef, useState } from "react";
import { basicSchemaForm } from "../Utils/bs";
import BackButton from "../Utils/backBtn";
import Input from "../Library/Input";
import Button from "../Library/Button";
import ToDoImg from "../Utils/media/todoimg.png";
import uuid from "react-uuid";
import { useEffect } from "react";

const TaskList = () => {
  const dateInputRef = useRef(null);
  const [taskList, setTaskList] = useState([]);
  const [currentUserData, setCurrentUserData] = useState([]);
  const [form, setForm] = useState({ task: "", date: null });
  const [error, setError] = useState("");
  const [duplicateError, setDuplicateError] = useState("");

  const handleChange = useCallback(
    (value, name) => {
      setForm((prevState) => ({ ...prevState, [name]: value }));
      const validateField = async () => {
        try {
          await basicSchemaForm.validateAt(name, {
            ...form,
            [name]: value,
          });
          setError("");
        } catch (error) {
          setError(error.message);
        }
      };
      validateField();
    },
    [form]
  );

  const handleDeleteItem = (el) => {
    setTaskList(taskList.filter((item) => item !== el));
    if (taskList.length === 1) {
      localStorage.removeItem(`${currentUserData.email}_tasklist`);
    }
  };

  const addNewTask = (newTask) => {
    if (!newTask.task || !newTask.date) {
      setError("Inserisci una descrizione e una data per il task.");
      return;
    }

    const isDuplicate = taskList.some(
      (task) => task.task === newTask.task && task.date === newTask.date
    );

    if (isDuplicate) {
      setDuplicateError("Questo task è già presente nella lista.");
      return;
    }

    setTaskList([...taskList, newTask]);
    setForm({ task: "", date: null });
    dateInputRef.current.reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTask({ task: form.task, date: form.date });
  };

  useEffect(() => {
    if (taskList.length > 0) {
      localStorage.setItem(
        `${currentUserData.email}_tasklist`,
        JSON.stringify(taskList)
      );
    }
  }, [taskList, currentUserData]);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("currentUserData"));
    let tasklist = JSON.parse(
      localStorage.getItem(`${user.email}_tasklist`) || "[]"
    );
    if (tasklist.length > 0) {
      setTaskList(tasklist);
    }
    if (user) {
      setCurrentUserData(user);
    }
  }, []);

  useEffect(() => {
    taskList.filter((el) => el.deleted === false);
  }, [taskList]);

  const invertiData = (el) => {
    if (!el.date) {
      return "";
    }
    let data = el.date.split("-");
    let container = [];
    for (let i = data.length - 1; i >= 0; i--) {
      container.push(data[i]);
    }
    return container.join("/");
  };

  console.log(taskList);

  return (
    <div className='d-flex flex-row justify-content-around'>
      <div className='d-flex flex-row '>
        <img className='todoimg' src={ToDoImg} alt='Tasklist' />
        <ul style={{ position: "relative", marginTop: "50px" }}>
          {taskList
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((el) => {
              return (
                <div className='position-relative'>
                  <li key={uuid()}>
                    {el.task} <b>entro il:</b> {invertiData(el)}
                    <button onClick={() => handleDeleteItem(el)}>X</button>
                  </li>
                </div>
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
