import React from "react";
import { FaTrash } from "react-icons/fa";

function Todo({ text, todo, todos, setTodos, status, setstatus }) {
  // const [isActive, setActive] = useState(false);

  const completeHandle = (e) => {
    setstatus(!status);

    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const deleteHandle = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <li className="todo-item" onClick={completeHandle}>
        
        <span>{text}</span>

        <FaTrash
          onClick={(e) => {
            e.stopPropagation();

            if (window.confirm("Are you sure you wish to delete this item?")) {
              deleteHandle();
              // this.onCancel(e);
            }
          }}
          className="trash-btn"
        />
      </li>
    </div>
  );
}

export default Todo;
