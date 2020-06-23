import React from "react";

const TodoItem = (props) => {
  return (
    <li className="todo-item">
      <input
        id={props.id}
        type="checkbox"
        value="done"
        onChange={() => {
          props.updateTasks(props.id);
        }}
        checked={!props.done}
      />
      <span
        style={{ "textDecoration": !props.done ? "line-through" : "none" }}
      >
        {props.name}
      </span>
      <button
        onClick={() => {
          props.deleteTasks(props.id);
        }}
      >
        delete
      </button>
    </li>
  );
};

export default TodoItem;
