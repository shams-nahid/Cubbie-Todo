import React from "react";
interface HeaderProps {
  remainingCount: number;
}

const Header: React.FC<HeaderProps> = ({ remainingCount }) => {
  return (
    <header className='header'>
      <h2>To-Do</h2>
      <span className='task-count'>
        {remainingCount} {remainingCount === 1 ? "task" : "tasks"} remaining
      </span>
    </header>
  );
};

export default Header;
