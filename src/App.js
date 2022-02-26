import './App.css';
import React , {useState} from 'react';
import Filter from './components/Filter';
import TodoForm  from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <TodoForm 
      input = {input}
      setInput = {setInput}
      todos = {todos}
      setTodos = {setTodos}
      />
      <Filter />
      <TodoList todos={todos}/>
      
      
    </div>
  );
}

export default App;

