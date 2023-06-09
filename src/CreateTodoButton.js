import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button 
       className="CreateTodoButton"
        onClick={
          (event) => {
            console.log('le has dado al botón');
            console.log(event);
            console.log(event.target);
        }
      }>+</button>
  );
}

export { CreateTodoButton };