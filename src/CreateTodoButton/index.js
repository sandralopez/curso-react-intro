import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  return (
    <button 
       className="CreateTodoButton"
        onClick={
          () => {
            setOpenModal(state => !state); // Arrow function que recibe el estado y devuelve su negación
          }
      }>+</button>
  );
}

export { CreateTodoButton };