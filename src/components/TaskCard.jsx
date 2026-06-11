import React from 'react'

const TaskCard = ({ title, description, status }) => {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="task-card__status">{status}</span>
    </div>
  )
}

export default TaskCard
