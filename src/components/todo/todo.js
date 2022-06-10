import React from "react";

const ToDo = ({ value, children, ...rest }) => {
  return (
    <>
      <div className="todobox">
        <input
          type="text"
          placeholder="Add ToDo"
          className="search"
          value={value}
          {...rest}
        />
      </div>
    </>
  );
};

export default ToDo;
