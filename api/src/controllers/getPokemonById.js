const axios = require('axios');
const { Pokemon } = require('../db.js');
const URL = 'https://pokeapi.co/api/v2/pokemon';

const getPokemonById = async (id) => {
    if(isNaN(id)){
        const pokemonDB = await Pokemon.findByPk(id);
        if(!pokemonDB) throw new Error(`No se encuentra el pokemon con id: ${id} en la base de datos`);
        const pokemon = pokemonDB.toJSON();
        return pokemon;
    }
    const pokemonApi = (await axios(`${URL}/${id}`)).data;
    if(!pokemonApi) throw new Error(`No se encuentra el pokemon con el id: ${id} en la API`);
    return pokemonApi;
};

module.exports = getPokemonById;