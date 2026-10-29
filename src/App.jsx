import { useState, useEffect } from 'react';
import Usuarios from './components/Usuarios';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función única para obtener empleados de la API
  const fetchEmployees = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setEmployees(data);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los datos", error);
      setLoading(false);
    }
  };

  // Efecto para cargar los datos al montar el componente
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="app-container">
      <h1 className="title">Employee Directory</h1>
      
      {/* Manejo de estados: Loading, Lista vacía y Grid de empleados */}
      {loading ? (
        <p className="loading-text">Cargando empleados...</p>
      ) : employees.length === 0 ? (
        <p className="empty-text">No hay empleados para mostrar.</p>
      ) : (
        <div className="grid-container">
          {employees.map((user) => (
            <Usuarios key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;