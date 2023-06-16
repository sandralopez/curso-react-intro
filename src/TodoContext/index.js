import React from 'react';
import { useLocalStorage } from '../App/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
	// Encapsula la lógica que queremos compartir entre los componentes

	// Estados
	const {
		item: todos,          // Nombres que devuelve el custom hook
		saveItem: saveTodos,  // Con : renombramos las propiedades
		loading,
		error,
	} = useLocalStorage('TODOS_V1', []);
	const [searchValue, setSearchValue] = React.useState('');
	const [openModal, setOpenModal] = React.useState(false);

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

	const addTodo = (text) => {
		// Añadir un nuevo todo
		const newTodos = [...todos];
		newTodos.push({
			text,
			completed:false,
		});
		saveTodos(newTodos);
	};

	return (
		<TodoContext.Provider value={{
			loading,
			error,
			completedTodos,
			totalTodos,
			searchValue,
			setSearchValue,
			searchedTodos,
			completeTodo,
			deleteTodo,
			openModal,
			setOpenModal,
			addTodo,
		}}>
			{ children }
		</TodoContext.Provider>
	);
}

export {TodoContext, TodoProvider};