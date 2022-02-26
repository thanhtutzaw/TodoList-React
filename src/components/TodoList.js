import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

function TodoList() {
  const [isActive, setActive] = useState(false);


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

  return (
    <div className="todo-container">
      <ul className="todo-list">
        <div className="todo">


          <li className="todo-item" onClick={completeHandle}>
            <span className={isActive ? "completed" : null}>hey guys</span>

            <FaTrash
              className="trash-btn"

              onClick={(e) => {
                e.stopPropagation();
                
     

                if (
                  window.confirm("Are you sure you wish to delete this item?")
                )
                  this.onCancel(e);
              }}
            />

          </li>
        </div>
      </ul>
    </div>
  );
}

export default TodoList;
