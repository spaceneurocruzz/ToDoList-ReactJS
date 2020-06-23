import React from "react";

const TodoHeader = (props) => {
  let doneList = props.tasks.filter((task) => task.done == true);

  return (
    <ul className="todo-header">
      <li onClick={() => props.filterTaskByType("All")}>
        All({props.tasks.length})
      </li>
      <li onClick={() => props.filterTaskByType("Completed")}>
        Completed({doneList.length})
      </li>
      <li onClick={() => props.filterTaskByType("Todo")}>
        Todo({props.tasks.length - doneList.length})
      </li>
      <button
        onClick={() => {
          props.clearDoneTask(doneList);
        }}
      >
        Clear completed
      </button>
    </ul>
  );
};

export default TodoHeader;
