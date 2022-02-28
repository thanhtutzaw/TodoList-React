import "./App.css";
import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setstatus] = useState("all");
  const [filterTodo, setfilterTodo] = useState([]);

  useEffect(() => {
    filterHandle()
  
    
  }, [todos,status])
  

  const filterHandle = () => {
    switch (status) {
      case "completed":
        setfilterTodo(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setfilterTodo(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setfilterTodo(todos);
        break;
    }
  };

  return (
    <div className="App">
      <TodoForm
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <Filter setstatus={setstatus} />
      <TodoList setstatus = {setstatus} status = {status} filterTodo={filterTodo} setTodos={setTodos} input={input} id={todos.id} todos={todos} />
    </div>
  );
}

export default App;
