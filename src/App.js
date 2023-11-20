
import React, { useState, useEffect } from 'react';
import TaskList from './componentes/TaskList';
import TaskForm from './componentes/TaskForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const handleTaskComplete = (taskId) => {

    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleTaskDelete = (taskId) => {
    
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleAddTask = (taskName) => {
    
    const newTask = {
      id: Date.now(),  
      name: taskName,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h1 className='titulo'>Trabajo Final A.P</h1>

          <div className="container">

       <TaskList tasks={tasks} onTaskComplete={handleTaskComplete} onTaskDelete={handleTaskDelete} />
      <TaskForm onAddTask={handleAddTask} />
      <Footer /> {Footer}
    </div>
    </div>
  );
};

export default App;
