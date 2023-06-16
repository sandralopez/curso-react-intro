import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const {
    setOpenModal,
    addTodo,
  } = React.useContext(TodoContext);

  // Creación de un estado local! No sería necesario escribirlo en el contexto
  // Al contexto sólo le interesa conocer el valor final, no le intermedio
  const[newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
      event.preventDefault();
      addTodo(newTodoValue);
      setOpenModal(false);
  };

  const onCancel = (event) => {
      setOpenModal(false);
  };

  const onChange = (event) => {
      setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea 
        placeholder="Cortar cebolla para el almuerzo"
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}>
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };