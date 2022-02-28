import React from "react";

function Filter({setstatus}) {
  const handleFilter =(e) =>{
    setstatus(e.target.value)
  }
  return (
    <div className="container">
      <select onChange={handleFilter} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Checked</option>
        <option value="uncompleted">Unchecked</option>
      </select>
    </div>
  );
}

export default Filter;
