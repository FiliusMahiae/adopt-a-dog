import React, { useState } from "react";
import "../styles/formularioAdopcion.css";

function FormularioAdopcion({ mascotaNombre, onClose }) {
    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        direccion: '',
        razonAdopcion: ''
    });

    const handleChange = (event, campo) => {
        setDatos({
            ...datos,
            [campo]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(datos);
        alert("Solicitud enviada para adoptar a " + mascotaNombre);
        onClose();
    };

    return (
        <div className="adopcion">
            <div className="adopcion-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Formulario de Adopción para {mascotaNombre}</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nombre completo:</label>
                    <input
                        type="text"
                        onChange={(e) => handleChange(e, 'nombre')}
                        required
                    />

                    <label>Email:</label>
                    <input
                        type="email"
                        onChange={(e) => handleChange(e, 'email')}
                        required
                    />

                    <label>Dirección:</label>
                    <input
                        type="text"
                        onChange={(e) => handleChange(e, 'direccion')}
                        required
                    />

                    <label>¿Por qué quieres adoptar a {mascotaNombre}?</label>
                    <textarea
                        onChange={(e) => handleChange(e, 'razonAdopcion')}
                        required
                    ></textarea>

                    <button type="submit">Enviar Solicitud</button>
                </form>
            </div>
        </div>
    );
}

export default FormularioAdopcion;
