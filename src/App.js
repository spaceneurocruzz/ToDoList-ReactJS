import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoHeader from "./components/TodoHeader";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import PropTypes from "prop-types";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const createTasks = (item) => {
    let newId = uuidv4();
    const newTask = { id: newId, name: item, done: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTasks = (id) => {
    const remainTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainTasks);
  };

  const updateTasks = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const clearDoneTask = (doneTasks) => {
    const notDoneTasks = tasks.filter((task) => !doneTasks.includes(task));
    setTasks(notDoneTasks);
  };

  const FILTER_TASK_MAP = {
    All: () => true,
    Completed: (task) => task.done,
    Todo: (task) => !task.done,
  };

  const filterTask = (filter) => {
    setFilter(filter);
  };

  let taskList = tasks
    .filter(FILTER_TASK_MAP[filter])
    .map((task) => (
      <TodoItem
        id={task.id}
        key={task.id}
        name={task.name}
        done={!task.done}
        deleteTasks={deleteTasks}
        updateTasks={updateTasks}
      />
    ));

  return (
    <div className="todo-container">
      <h1>TodoList</h1>
      <TodoInput createTasks={createTasks} />
      <TodoHeader
        tasks={tasks}
        clearDoneTask={clearDoneTask}
        filterTaskByType={filterTask}
      />
      {!taskList.length ? (
        <div>nothing to do ya!</div>
      ) : (
        <ul className="todo-itemlist"> {taskList}</ul>
      )}
    </div>
  );
};

App.propTypes = {
  tasks: PropTypes.array,
};

export default App;
