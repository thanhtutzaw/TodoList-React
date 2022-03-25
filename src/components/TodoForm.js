import React from "react";

function TodoForm({ input, setInput, todos, setTodos }) {
  const hadleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input) {
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 10000),
          text: input,
          completed: false,
        },
      ]);
    } 
    else {
      return null;
    }

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
          spellCheck="false"
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
