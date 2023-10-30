const { Type } = require("../db");
const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/type/";

const getPokemonByType = async () => {
  const typesDB = await Type.findAll();
  if (typesDB.length > 0) return typesDB;

  const response = await axios.get(URL);
  const typesApi = response.data.results;

  const typesToCreate = typesApi.map((type) => ({
    name: type.name,
    id: Number.parseInt(type.url.slice(31)),
  }));

  const createdTypes = await Type.bulkCreate(typesToCreate);

  return createdTypes;
};

module.exports = getPokemonByType;
