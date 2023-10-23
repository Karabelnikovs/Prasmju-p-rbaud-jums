import React from "react";

function Task({ task, onDelete, onToggleComplete }) {
  return (
    <li className={`list-group-item ${task.completed ? "completed" : ""}`}>
      <div
        class="form-check form-switch"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "10px",
        }}
      >
        <input
          type="checkbox"
          class="form-check-input"
          id="flexSwitchCheckDefault"
          checked={task.completed}
          onChange={onToggleComplete}
          style={{ position: "absolute", left: "50px" }}
        ></input>
        <label
          class="form-check-label"
          for="flexSwitchCheckDefault"
          style={{
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.text}
        </label>

        <button
          className="btn btn-danger float-right"
          onClick={onDelete}
          style={{ position: "absolute", right: "10px" }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;
