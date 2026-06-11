import React from "react";

function TaskCard({ task }) {
  return (
    <article aria-label={`Task ${task.title}`}>
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
    </article>
  );
}

export default React.memo(TaskCard);
