import { useState } from "react";
import '../styles/formularioBusqueda.css'

export default function FormularioBusqueda({ sendData }) {
    const [filtrosDeBusqueda, setFiltrosDeBusqueda] = useState({
        tipo: 'Cualquiera',
        edadMax: '20',
        genero: 'Cualquiera',
        vacunado: 'Cualquiera',
        esterilizado: 'Cualquiera'
    });

    async function getDataFromApi() {
        const response = await fetch('https://huachitos.cl/api/animales');
        return await response.json();
    }

    const handleChange = (event, campo) => {
        setFiltrosDeBusqueda({
            ...filtrosDeBusqueda,
            [campo]: event.target.value
        });
    }

    const handleClick = async (event) => {
        event.preventDefault();

        try {
            const dataApi = await getDataFromApi();

            const dataFiltrada = dataApi.data.filter(animal => {
                const extraerEdad = (edadTexto) => {
                    const numero = parseInt(edadTexto);
                    if (edadTexto.toLowerCase().includes('mes')) {
                        return 0;
                    }
                    return numero;
                };

                const edadAnimal = extraerEdad(animal.edad);
                const edadMaxima = parseInt(filtrosDeBusqueda.edadMax);

                return (
                    (filtrosDeBusqueda.tipo === 'Cualquiera' || animal.tipo === filtrosDeBusqueda.tipo) &&
                    edadAnimal <= edadMaxima &&
                    (filtrosDeBusqueda.genero === 'Cualquiera' || animal.genero.toLowerCase() === filtrosDeBusqueda.genero.toLowerCase()) &&
                    (filtrosDeBusqueda.vacunado === 'Cualquiera' || animal.vacunas === parseInt(filtrosDeBusqueda.vacunado)) &&
                    (filtrosDeBusqueda.esterilizado === 'Cualquiera' || animal.esterilizado === parseInt(filtrosDeBusqueda.esterilizado))
                );
            });

            sendData(dataFiltrada);
        } catch (error) {
            console.error("Error al obtener datos de la API:", error);
        }
    }

    return (
        <div>
            <form onSubmit={handleClick}>
            <label>Tipo de Animal</label>
            <select onChange={(event) => handleChange(event, 'tipo')}>
                <option value='Cualquiera'>Cualquiera</option>
                <option value='Perro'>Perro</option>
                <option value='Gato'>Gato</option>
            </select>
            <label>Edad máxima</label>
            <input type="range" min="0" max="20" onChange={(event) => handleChange(event, 'edadMax')} />
            <p id="edad-max">{filtrosDeBusqueda.edadMax}</p>
            <label>Género</label>
            <select onChange={(event) => handleChange(event, 'genero')}>
                <option value='Cualquiera'>Cualquiera</option>
                <option value='macho'>Macho</option>
                <option value='hembra'>Hembra</option>
            </select>
            <label>Vacunado</label>
            <select onChange={(event) => handleChange(event, 'vacunado')}>
                <option value='Cualquiera'>Cualquiera</option>
                <option value='1'>Vacunado</option>
                <option value='0'>No Vacunado</option>
            </select>
            <label>Esterilizado</label>
            <select onChange={(event) => handleChange(event, 'esterilizado')}>
                <option value='Cualquiera'>Cualquiera</option>
                <option value='1'>Esterilizado</option>
                <option value='0'>No Esterilizado</option>
            </select>
            <button type="submit">Buscar</button>
        </form>
        </div>
    );
}