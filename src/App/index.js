import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

/* 
localStorage.removeItem('TODOS_V1');

const defaultTodos = [ 
  { text: 'Cortar la cebolla', completed : true},
  { text: 'Cortar el pimiento', completed : false},
  { text: 'Hacer la tortilla', completed : false},
  { text: 'Echar el aceite', completed : false},
  { text: 'Poner especias', completed : false},
]; 

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
*/

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;