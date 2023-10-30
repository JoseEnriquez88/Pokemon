const getApiData = require("./getApiData");
const getPokemonsDB = require("./getPokemonsDB");

const getAllPokemons = async () => {
  const apiPokemons = await getApiData(48);
  DBPokemons = await getPokemonsDB();
  const allPokemons = [...apiPokemons, ...DBPokemons];
  if (allPokemons.length === 0)
    throw new Error("No se encontraron pokemones para mostrar.");
  return allPokemons;
};

module.exports = getAllPokemons;
