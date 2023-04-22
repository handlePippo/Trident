import React from "react";
import "../Components/Tasklist";
import TaskList from "../Components/Tasklist";

const Tasklist = () => {
  return (
    <div>
      <h1 className='d-flex justify-content-center my-5 py-5'>Tasklist</h1>
      <TaskList />
    </div>
  );
};

export default Tasklist;
