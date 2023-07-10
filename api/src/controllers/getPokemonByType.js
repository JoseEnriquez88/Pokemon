const { Type } = require('../db');
const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/type/';

const getPokemonByType = async () => {
    // Obtengo los tipos de la base de datos
    const typesDB = await Type.findAll();
    if (typesDB.length > 0) return typesDB;

    // Obtengo los tipos de la API
    const response = await axios.get(URL);
    const typesApi = response.data.results;

    // Guardo los tipos en la base de datos
    const typesToCreate = typesApi.map(type => ({
        name: type.name,
        id: Number.parseInt(type.url.slice(31)),
    }));

    const createdTypes = await Type.bulkCreate(typesToCreate);

    return createdTypes;
};

module.exports = getPokemonByType;
