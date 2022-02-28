import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos , filterTodo ,status ,setstatus }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodo.map((todo) => (
          <Todo
          status={status}
          setstatus={setstatus}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
