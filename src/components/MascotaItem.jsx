import React, { useState } from "react";
import "../styles/mascotaItem.css";
import FormularioAdopcion from "./FormularioAdopcion";

function MascotaItem({ mascota }) {
  const [visible, setvisible] = useState(false);

  const handleClick = () => {
    setvisible(!visible);
  };

  return (
    <>
      <li>
        <img 
          src={mascota.imagen} 
          alt={mascota.nombre} 
        />
        <div id="info-container">
          <h3>{mascota.nombre}</h3>
          <p className="info-p"><strong>Tipo:</strong> {mascota.tipo}</p>
          <p className="info-p"><strong>Edad:</strong> {mascota.edad}</p>
          <p className="info-p"><strong>Género:</strong> {mascota.genero}</p>
          <p className="info-p"><strong>Esterilizado:</strong> {mascota.esterilizado ? "Sí" : "No"}</p>
          <p className="info-p"><strong>Vacunado:</strong> {mascota.vacunas ? "Sí" : "No"}</p>
          <button className="adopt-button" onClick={handleClick}> ¡Adóptame! </button>
        </div>
      </li>

      {visible && (
        <FormularioAdopcion
          mascotaNombre={mascota.nombre}
          onClose={handleClick}
        />
      )}
    </>
  );
}

export default MascotaItem;

