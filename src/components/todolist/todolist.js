import React from "react";
import ToDoListItems from "./todolistitem";
const ToDoList = ({ value, handleComplTodo, handleDelToDo }) => {
  return (
    <>
      <div>
        {value.map((itemvalue, i) => {
          return (
            <ToDoListItems
              key={i}
              itemvalue={itemvalue}
              index={i}
              handleComplTodo={handleComplTodo}
              handleDelToDo={handleDelToDo}
            />
          );
        })}
      </div>
    </>
  );
};

export default ToDoList;
