import './App.css';
import Filter from './components/Filter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <Filter />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      
    </div>
  );
}

export default App;

