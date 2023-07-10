//Este componente trae todos los pokemones de la API
const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon';

const getApiData = async (limit) => {
    const response = (await axios(`${URL}?limit=${limit}`)).data.results;
    const apiPokemons = await Promise.all(response.map(async (pokemon) => {
        const pokemonData = (await axios(pokemon.url)).data;

        // const stats = pokemonData.stats;
        // const life = stats[0].base_stats;
        // const attack = stats[1].base_stats;
        // const defense = stats[2].base_stats;
        // const speed = stats[5].base_stats;

        const types = pokemonData.types.map((type) => type.type.name);


        return {
            name: pokemonData.name,
            id: pokemonData.id,
            image: pokemonData.sprites?.other?.dream_world?.front_default,
            height: pokemonData.height,
            weight: pokemonData.weight,
            life: pokemonData.stats[0].base_stat,
            attack: pokemonData.stats[1].base_stat,
            defense: pokemonData.stats[2].base_stat,
            speed: pokemonData.stats[5].base_stat,
            types: types
        };
    }));
    return apiPokemons;
};

module.exports = getApiData;
