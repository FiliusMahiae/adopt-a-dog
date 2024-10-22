import React from "react";
import MascotaItem from "./MascotaItem";
import '../styles/listaDeMascotas.css'

function ListaDeMascotas({ mascotas }) {
  return (
    <div>
      {mascotas.length === 0 ? 
      (<p>No se encontraron mascotas con los filtros seleccionados.</p>) : 
      (
        <ul>
          {mascotas.map((mascota) => (
            <MascotaItem key={mascota.id} mascota={mascota} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaDeMascotas;

