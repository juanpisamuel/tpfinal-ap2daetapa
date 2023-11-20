import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = event => {
    setTaskName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddTask(taskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        className='nuevaTarea'
        value={taskName}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn-secondary btn-sm">Agregar Tarea</button>

    </form>
  );
};

export default TaskForm;