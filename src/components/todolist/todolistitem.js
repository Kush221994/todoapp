import React from "react";

const ToDoListItems = ({ itemvalue, handleComplTodo, handleDelToDo }) => {
  return (
    <>
      <div className="itemvalue">
        <div> {itemvalue} </div>
        <div>
          <button className="itemvalbtn cmpl">Complete</button>
        </div>
        <div>
          <button className="itemvalbtn del">Delete</button>
        </div>
      </div>
    </>
  );
};

export default ToDoListItems;
