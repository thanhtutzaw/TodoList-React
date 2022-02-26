import React from "react";

function Filter() {
  return (
    <div className="container">
      <select name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Checked</option>
        <option value="uncompleted">Unchecked</option>
      </select>
    </div>
  );
}

export default Filter;
