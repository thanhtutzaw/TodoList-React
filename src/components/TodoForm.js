import React from "react";

function TodoForm( {input , setInput , todos, setTodos} ) {
  

  const hadleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    // console.log(todos)
    e.preventDefault();
    // if(!input){
    //   alert('Null ....')
    // }
    setTodos(
      // if(!input){
      //   alert('Null ....')
      // }
      [
      ...todos,
      { id: Math.floor(Math.random() * 10000), text: input, completed: false },
      ]
    );
    setInput("");
  };
  return (
    <div className="container">
      <form  className="todo-form" onSubmit={handleSubmit}>
        <input
          onChange={hadleChange}
          value={input}
          required
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
