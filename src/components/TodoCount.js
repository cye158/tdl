import React from "react";

const TodoCount = ({ todos }) => {
  /* Active tasks counter */
  const activeTodos = todos.filter(todo => !todo.finish).length;

  return (
    <div className="col-2  text-center" style={{ padding: 0 }}>
      <span>
        <strong>{activeTodos} TASKS</strong>
      </span>
    </div>
  );
};

export default TodoCount;
