//Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.

//URL de la documentación (para que indaguéis): https://thronesapi.com/

//Esta sería la URL final (la que deberéis utilizar para vuestra petición):

//https://thronesapi.com/api/v2/Characters

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('character-list');
    const imagen = document.querySelector('.character-image');
    
    const apiUrl = 'https://thronesapi.com/api/v2/Characters';
    let personajes = []; // Aquí guardamos la lista de los personajes

    async function getPersonajes() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error en la petición: ${response.status}`);
            }
            
            personajes = await response.json();
            
            selectFuncion(personajes);
            imagenFuncion(personajes[0]);

        } catch (error) {
            console.error('Error al obtener los personajes:', error);
        }
    }

    function selectFuncion(personajes) {
        personajes.forEach(personaje => {
            const option = document.createElement('option');
            option.value = personaje.id; // Guardamos el ID único como valor
            option.textContent = personaje.fullName; // Mostramos el nombre completo
            select.appendChild(option);
        });
    }

    function imagenFuncion(personaje) {
        if (personaje) {
            imagen.src = personaje.imageUrl;
            imagen.alt = `Imagen de ${personaje.fullName}`;
        }
    }

    select.addEventListener('change', (event) => {
        const selectedId = parseInt(event.target.value); 
        
        const selectedPersonaje = personajes.find(char => char.id === selectedId);
        
        // Actualizamos la imagen
        imagenFuncion(selectedPersonaje);
    });

    // Iniciamos la llamada a la API
    getPersonajes();
});
