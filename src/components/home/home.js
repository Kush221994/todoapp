import React from "react";

import AddToDo from "../addTodo/addtodo";
import Todo from "../todo/todo";

const Home = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  const handleAdd = () => {
    setTodos((previousItems) => {
      return [
        ...previousItems,
        {
          id: todos.length,
          value: todo,
          status: "pending",
        },
      ];
    });
    setTodo("");
  };

  const handleToggleStatus = (id) => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status: item.status === "completed" ? "pending" : "completed",
          };
        }
        return item;
      })
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="home">
      <div className="todo1">
        <div className="todo2">
          <AddToDo handleAdd={handleAdd} value={todo} onChange={handleChange} />
        </div>
        <div className="todolist">
          {todos.length &&
            todos.map((item) => (
              <Todo
                key={item.id}
                item={item}
                handleToggleStatus={handleToggleStatus}
                handleDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
