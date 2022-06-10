import React from "react";

const Todo = ({ item, handleToggleStatus, handleDelete }) => {
  return (
    <div className="itemvalue">
      <span>{item.value}</span>
      <span>{item.status}</span>
      <button
        className="itemvalbtn cmpl"
        onClick={() => handleToggleStatus(item.id)}
      >
        {item.status === "pending" ? "Complete" : "Revert"}
      </button>
      <button className="itemvalbtn del" onClick={() => handleDelete(item.id)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
