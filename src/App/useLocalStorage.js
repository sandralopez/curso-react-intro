import React from 'react';

// Custom Hook
function useLocalStorage (itemName, initialValue) {
  // Crear un estado interno del custom hook
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }
        else {
          parsedItem = JSON.parse(localStorageItem);
          // Enviar el parsedItem que hemos recuperado
          setItem(parsedItem);
        }

        // Si el efecto carga correctamente
        setLoading(false);
      }
      catch (error) {
        // Terminamos de cargar, porque hay un error
        setLoading(false);
        // Modificar el estado de error
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    
    setItem(newItem);
  }

  return {
    item, 
    saveItem, 
    loading, 
    error,
  };
}

export { useLocalStorage };