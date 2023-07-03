//Este componente trae todos los pokemones de la API

const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon';

const getApiData = async () => {
    const response = (await axios(URL)).data.results;
    const apiPokemons = await Promise.all(response.map(async (pokemon) => {
        const pokemonData = (await axios(pokemon.url)).data;
        return {
            name: pokemonData.name,
            id: pokemonData.id,
            image: pokemonData.sprites.other['official-artwork'].front_default,
            height: pokemonData.height,
            weight: pokemonData.weight
        };
    }));
    return apiPokemons;
};

module.exports = getApiData;
