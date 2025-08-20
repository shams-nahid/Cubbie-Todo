import { useState } from "react";

import { Task } from "./types";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const remainingCount = tasks.filter(task => !task.completed).length;

  const handleAddTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text: text,
      completed: false,
      createdAt: Date.now()
    };

    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  const handleToggleTask = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <div className='App'>
      <Header remainingCount={remainingCount} />
      <TaskInput onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}

export default App;
