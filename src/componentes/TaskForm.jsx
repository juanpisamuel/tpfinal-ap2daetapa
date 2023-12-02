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
    <div className='tareas'>
    <form onSubmit={handleSubmit}>
      <input 
       
        type="text"
        placeholder="Nueva tarea" required
        className='nuevaTarea'
        value={taskName}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn-secondary btn-sm"
          style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '10px' }}>Agregar Tarea</button>

    </form>
    </div>
  );
};

export default TaskForm;