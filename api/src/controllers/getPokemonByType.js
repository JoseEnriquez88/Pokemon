const { Type } = require('../db');
const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/type/';

const getPokemonByType = async () => {
    //obtengo los tipos de la base de datos
    const typesDB = await Type.findAll();
    if(typesDB.length > 0) return typesDB;
    
    //obtengo los tipos de la api
    const response = await axios.get(URL);
    const typesApi = response.data.results;

    //guardo los tipos en la base de datos
    const createdTypes = await Promise.all(
        typesApi.map(async (type) => {
            return Type.create({
                name: type.name,
                id: Number.parseInt(type.url.slice(31)),
            });
        })
    );
    return createdTypes;
};

module.exports = getPokemonByType;
