import React from "react";

const AddToDo = ({ handleAddItems }) => {
  return (
    <>
      <button className="add" onClick={handleAddItems}>
        Add
      </button>
    </>
  );
};

export default AddToDo;
