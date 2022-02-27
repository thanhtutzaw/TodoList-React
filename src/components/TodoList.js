import React from "react";
import Todo from "./Todo";

function TodoList({ todos ,setTodos  }) {
  const input = true;
  // if(!todos.length){
  //   return <p>Null</p>
  // }
  
  return (
    <div className="todo-container">
      <ul className="todo-list">
        
          {
            
            todos.map( (todo) => 
            
            <Todo setTodos={setTodos} todos={todos} todo={todo} key={todo.id} text={todo.text} />)
           

            













          //  (todos.map( (todo) => 
          //      <Todo key={todo.id} text={todo.text} />  
               

          //   )
            
          //   )

            
            

          // (todos.length > 0 && todos) ?
          // (todos.map((todo) => <Todo key={todo.id} text={todo.text} />))
          // :
          // (<p>Null</p>)

          }

          
          
      </ul>
    </div>
  );

}

export default TodoList;
