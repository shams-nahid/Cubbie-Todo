import React, { useState } from "react";

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedText = inputValue.trim();
    if (trimmedText === "") {
      return;
    }

    onAddTask(trimmedText);

    setInputValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form className='task-input' onSubmit={handleSubmit}>
      <label htmlFor='task-input-field' className='task-input-label'>
        Add a new task
      </label>
      <div className='task-input-row'>
        <input
          id='task-input-field'
          type='text'
          value={inputValue}
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
