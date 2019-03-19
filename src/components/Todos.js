import React from "react";

const Todos = ({ todo, toggleFinish, onDelete }) => {
  return (
    <li className="list-group-item todo-entry border-0">
      <div className="row">
        {/* Toggle checkbox */}
        <div className="col-2 todo-icons">
          <i
            className={
              !todo.finish
                ? "far fa-square todo-checkbox"
                : "far fa-check-square todo-checkbox"
            }
            onClick={toggleFinish}
          />
        </div>

        {/* Todo task entry */}
        <div
          style={{ fontSize: 14, margin: "auto" }}
          className={!todo.finish ? "col" : "col text-muted finished"}
        >
          {todo.task}
        </div>

        {/* Delete button */}
        <div className="col-2 todo-icons">
          <i className="far fa-window-close todo-remove" onClick={onDelete} />
        </div>
      </div>
    </li>
  );
};

export default Todos;
