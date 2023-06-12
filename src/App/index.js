import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

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
  // Estados
  const {
    item: todos,          // Nombres que devuelve el custom hook
    saveItem: saveTodos,  // Con : renombramos las propiedades
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  // Estados derivados (derivados de los estados)
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    // Crear copia del array de todos
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    // Crear copia del array de todos
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI 
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;