import React from "react";

function TaskFilter({ filter, setFilter }) {
  return (
    <div className="btn-group">
      <button
        className={`btn ${filter === "all" ? "btn-primary" : "btn-secondary"}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`btn ${
          filter === "completed" ? "btn-primary" : "btn-secondary"
        }`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className={`btn ${
          filter === "uncompleted" ? "btn-primary" : "btn-secondary"
        }`}
        onClick={() => setFilter("uncompleted")}
      >
        Uncompleted
      </button>
    </div>
  );
}

export default TaskFilter;
