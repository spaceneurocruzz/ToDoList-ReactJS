import React, { useState } from "react";

const TodoInput = (props) => {
  const [item, setItem] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item == "") {
      alert("Empty content!");
      return;
    }
    props.createTasks(item);
    setItem("");
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={item} onChange={handleChange} />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
};

export default TodoInput;
