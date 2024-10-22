import React, { useState } from "react";
import FormularioBusqueda from "./components/FormularioBusqueda";  // Importamos el formulario de búsqueda
import ListaDeMascotas from "./components/ListaDeMascotas";        // Este será el componente que vamos a crear para mostrar mascotas
import './App.css';

function App() {
  const [mascotasFiltradas, setMascotasFiltradas] = useState([]);  // Estado para las mascotas filtradas

  const recibirDataDeBusqueda = (dataFiltrada) => {
    setMascotasFiltradas(dataFiltrada);  // Al recibir las mascotas filtradas, actualizamos el estado
  };

  return (
    <div className="App">
      <FormularioBusqueda sendData={recibirDataDeBusqueda} />
      <ListaDeMascotas mascotas={mascotasFiltradas} />

    </div>
  );
}

export default App;

