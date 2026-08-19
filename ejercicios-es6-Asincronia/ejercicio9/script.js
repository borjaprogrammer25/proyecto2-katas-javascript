document.addEventListener('DOMContentLoaded', () => {
    const imagenElement = document.querySelector('.random-image');
    const nombreElement = document.querySelector('.pokemon-name');

    const min = 1;
    const max = 151;
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomId);

    // 2. Construir la URL dinámica con el ID aleatorio obtenido
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/' + randomId;

    // 3. Función asíncrona para pedir el Pokémon a la API
    async function getPokemonAleatorio() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error en la petición: ${response.status}`);
            }

            const pokemonData = await response.json();

            const pokemonNombre = pokemonData.name;
            const pokemonImage = pokemonData.sprites.front_default;

            const formattedName = pokemonNombre.toUpperCase();

            nombreElement.textContent = formattedName;

            if (pokemonImage) {
                imagenElement.src = pokemonImage;
                imagenElement.alt = `Imagen del Pokémon ${pokemonData.name}`;
            } else {
                console.warn('Este Pokémon no tiene una imagen frontal disponible.');
            }

        } catch (error) {
            console.error('Hubo un problema al obtener el Pokémon:', error);
        }
    }

    // Ejecutamos la función al cargar la página
    getPokemonAleatorio();
});
