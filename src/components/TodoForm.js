import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const hadleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos(
      [
      ...todos,
      { id: Math.floor(Math.random() * 10000), text: input, completed: false },
      ]
    );
    setInput("");
  };
  return (
    <div className="container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          onChange={hadleChange}
          value={input}
          type="text"
          name="text"
          placeholder="Type here"
          autoComplete="off"
          className="todo-input"
        ></input>
        <button className="todo-btn">
          <span className="plus">+</span>
        </button>
      </form>
      {/* {input} */}
    </div>
  );
}

export default TodoForm;
