const { Pokemon, Type } = require('../db');
const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon';

const getPokemonsById = async (id, source) => {
    if (source === 'api') {
        const response = (await axios.get(`${URL}/${id}`)).data;
        const pokemonData = response;

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
    } else {
        const pokemon = await Pokemon.findByPk(id, {
            include: {
                model: Type,
                attributes: ['name'],
                through: { attributes: [] },
            },
        });

        return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.image,
            life: pokemon.life,
            attack: pokemon.attack,
            defense: pokemon.defense,
            speed: pokemon.speed,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.Types.map((type) => type.name),
        };
    }
};

module.exports = getPokemonsById;
