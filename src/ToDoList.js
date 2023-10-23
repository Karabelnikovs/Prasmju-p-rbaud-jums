import React from "react";
import Task from "./Task";

function ToDoList({ tasks, onDeleteTask, onToggleComplete }) {
  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={() => onDeleteTask(index)}
          onToggleComplete={() => onToggleComplete(index)}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
