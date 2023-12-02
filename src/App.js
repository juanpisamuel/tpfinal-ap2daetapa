import React, { useState, useEffect } from 'react';
import TaskForm from './componentes/TaskForm';
import TaskList from './componentes/TaskList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const handleTaskComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
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
        <div className="row">
          <div className="col-md-6">
            <TaskForm onAddTask={handleAddTask} />
          </div>
          <div className="col-md-6">
            <TaskList tasks={tasks} onTaskComplete={handleTaskComplete} onTaskDelete={handleTaskDelete} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
