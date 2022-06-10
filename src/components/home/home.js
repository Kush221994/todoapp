import React, { useState } from "react";
import AddToDo from "../addTodo/addtodo";
import ToDo from "../todo/todo";
import ToDoList from "../todolist/todolist";

const Home = () => {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);

  const todolist = (e) => {
    setTodo(e.target.value);
  };

  const addItems = () => {
    setItems((previousItems) => {
      return [...previousItems, todo];
    });
    setTodo("");
  };

  const CompleteTodo = () => {
    console.log("clicked");
  };

  const DeleteTodo = () => {
    setItems([]);
    console.log("clicked");
  };

  return (
    <>
      <div className="home">
        <div className="todo1">
          <div className="todo2">
            <ToDo value={todo} onChange={todolist} />
            <AddToDo handleAddItems={addItems} />
          </div>
          <div className="todolist">
            <ToDoList
              value={items}
              handleComplTodo={CompleteTodo}
              handleDelToDo={DeleteTodo}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
