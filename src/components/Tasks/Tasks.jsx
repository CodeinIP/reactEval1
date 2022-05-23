import React from "react";
import styles from "./tasks.module.css";

const Tasks = ({todo,setTodo}) => {
  // NOTE: do not delete `data-cy` key value pair
  const handleDelete = (id)=>{
    let filteredList = todo.filter((ele)=>(ele.id!=id));
    console.log("delete")
    setTodo(filteredList);
  }
  const handleChange = (e)=>{
    console.log(e.target.checked);

  }
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {todo.map((e)=>{
          return <div key={e.id} className={styles.singletask}>
            <input type="checkbox" onChange= {(e)=>{handleChange(e)}}/>
            <div>{e.value}</div>
            <button onClick={()=>handleDelete(e.id)}>X</button>
          </div>
        })}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
