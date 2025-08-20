import React, { useState } from "react";

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const EMPTY_STRING = "";
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedText = taskText.trim();
    if (trimmedText === EMPTY_STRING) {
      return;
    }

    onAddTask(trimmedText);

    setTaskText("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  return (
    <form className='task-input' onSubmit={handleSubmit}>
      <label htmlFor='task-input-field' className='sr-only'>
        Add a new task
      </label>
      <div className='task-input-row'>
        <input
          id='task-input-field'
          type='text'
          value={taskText}
          onChange={handleInputChange}
          placeholder='Add a task…'
          className='task-input-field'
        />
        <button
          type='submit'
          className='task-input-button'
          aria-label='Add task'
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
