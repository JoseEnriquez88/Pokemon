const { Pokemon } = require('../db.js');

const getPokemonDB = async() => { 
    const allPokemons = await Pokemon.findAll();
    return allPokemons
};

module.exports = getPokemonDB;