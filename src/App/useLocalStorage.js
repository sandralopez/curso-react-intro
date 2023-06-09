import React from 'react';

// Custom Hook
function useLocalStorage (itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    parsedItem = initialValue;
    localStorage.setItem(itemName, JSON.stringify(parsedItem));
  }
  else {
    parsedItem = JSON.parse(localStorageItem);
  }

  // Crear un estado interno del custom hook
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    
    setItem(newItem);
  }

  return [item, saveItem];
}

export { useLocalStorage };