import React from "react";

const Todo = ({ item, handleToggleStatus, handleDelete }) => {
  return (
    <div className="itemvalue">
      <div>{item.value}</div>
      <div>{item.status}</div>
      <div>
        <button
          className="itemvalbtn cmpl"
          onClick={() => handleToggleStatus(item.id)}
        >
          {item.status === "pending" ? "Complete" : "Revert"}
        </button>
      </div>
      <div>
        <button
          className="itemvalbtn del"
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
