import React from "react";

const AddToDo = ({ handleAdd, value, onChange }) => {
  return (
    <div className="add-todo">
      <input className="search" value={value} onChange={onChange} />
      <button className="add" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default AddToDo;
