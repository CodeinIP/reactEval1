import React from "react";
import Tasks from "../Tasks/Tasks";
import styles from "./addTask.module.css";

const AddTask = (props) => {
  let newtodo;
  const [todo, setTodo] = React.useState([]);
  const addTodo = () => {
    // console.log("added")
    setTodo([...todo, { id: Date.now(), value: newtodo, status: false }]);
  };
  const handleChange = (e) => {
    // console.log(e.target.value)
    newtodo = e.target.value;
  };
  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <button data-cy="add-task-button" onClick={addTodo}>
        Add
      </button>
      <Tasks todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default AddTask;
