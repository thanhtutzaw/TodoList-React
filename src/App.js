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
    getLocal();
    // saveLocal();

  }, []);

  useEffect( () => {
    filterHandle();
    saveLocal();
  }, [todos, status]);

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

  //local storage
  const saveLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  const getLocal = () => {
    
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]) );
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
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

      <TodoList
      setstatus={setstatus}
      status={status}
      filterTodo={filterTodo}
      setTodos={setTodos}
      input={input}
      key={todos.id}
      todos={todos}
      />
    </div>
  );
}

export default App;
