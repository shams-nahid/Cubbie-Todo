import React from "react";

import { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  const handleToggle = () => {
    onToggle(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div
      className={`task-item ${task.completed ? "task-item--completed" : ""}`}
    >
      <label
        className='task-item-checkbox-label'
        htmlFor={`checkbox-${task.id}`}
      >
        <input
          id={`checkbox-${task.id}`}
          type='checkbox'
          checked={task.completed}
          onChange={handleToggle}
          className='task-item-checkbox'
        />
        <span className='task-item-text'>{task.text}</span>
      </label>

      <button
        onClick={handleDelete}
        className='task-item-delete'
        aria-label={`Delete task: ${task.text}`}
        type='button'
      >
        ×
      </button>
    </div>
  );
};

export default TaskItem;
