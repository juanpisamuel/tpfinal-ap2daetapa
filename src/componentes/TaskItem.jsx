import React, { useState } from 'react';

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  const [completed, setCompleted] = useState(task.completed);

  const handleComplete = () => {
    setCompleted(!completed);
    onTaskComplete(task.id);
  };

  const handleDelete = () => {
    onTaskDelete(task.id);
  };

  return (
    <div>
      <span style={{ textDecoration: completed ? 'line-through' : 'none', marginLeft: '5px', }}>
        {task.name}
      </span>
      <button style={{ backgroundColor: 'gray', color: 'white', padding: '5px', marginLeft: '5px', marginBottom: '5px', marginTop:'5px', }} className="btn btn-outline-dark btn-sm "  onClick={handleComplete}>
        {completed ? 'Desmarcar' : 'Completar'}
      </button>
      <button  style={{ backgroundColor: 'gray', color: 'white', padding: '5px', marginLeft: '5px', marginBottom: '5px', marginTop:'5px', }} className="btn btn-outline-dark btn-sm" id='eliminar' onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default TaskItem;