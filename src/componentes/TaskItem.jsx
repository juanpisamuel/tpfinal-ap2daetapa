import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  const [completed, setCompleted] = useState(task.completed);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleComplete = () => {
    setCompleted(!completed);
    onTaskComplete(task.id);
  };

  const handleDelete = () => {
    setShowConfirmDialog(true);
  };

  useEffect(() => {
    const showConfirmationDialog = async () => {
      const result = await MySwal.fire({
        title: '¿Está seguro de que desea eliminar la tarea?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
      });

      if (result.isConfirmed) {
        onTaskDelete(task.id);
      }
    };

    if (showConfirmDialog) {
      showConfirmationDialog();
      setShowConfirmDialog(false);  
    }
  }, [showConfirmDialog, onTaskDelete, task.id]);

  return (
    <div className='Botonera'>
      <span style={{ textDecoration: completed ? 'line-through' : 'none', marginLeft: '5px', display: 'flex' }}>
        {task.name}
      </span>
      <button
        style={{ backgroundColor: 'gray', color: 'white', padding: '5px', marginLeft: '5px', marginBottom: '5px', marginTop: '5px' }}
        className="btn btn-outline-dark btn-sm "
        onClick={handleComplete}
      >
        {completed ? 'Desmarcar' : 'Completar'}
      </button>
      <button
        style={{ backgroundColor: 'gray', color: 'white', padding: '5px', marginLeft: '5px', marginBottom: '5px', marginTop: '5px' }}
        className="btn btn-outline-dark btn-sm"
        id='eliminar'
        onClick={handleDelete}
      >
        Eliminar
      </button>
    </div>
  );
};

export default TaskItem;
