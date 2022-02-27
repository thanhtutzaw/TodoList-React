import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

function Todo({ text, todo, todos, setTodos }) {
  const [isActive, setActive] = useState(false);
  const deleteHandle = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandle = (e) => {
    setActive(!isActive);
    // if(e.target.className ='completed'){
    //   console.log('comletedffdkjfkdsjf')
    // }
    // else{
    //   setActive(!isActive);
    //   console.log("class toggle");
    // }
  };
  // if(!input){
  //   alert('Null ....')
  // }

  return (
    <div className="todo">
      <li className="todo-item" onClick={completeHandle}>
        <span className={isActive ? "completed" : null}>{text}</span>

        <FaTrash
          className="trash-btn"
          onClick={(e) => {
            e.stopPropagation();

            if (window.confirm("Are you sure you wish to delete this item?")) {
              deleteHandle();
              // this.onCancel(e);
            }
          }}
        />
      </li>
    </div>
  );
}

export default Todo;
