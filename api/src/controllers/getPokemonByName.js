const getApiData = require("./getApiData");
const getPokemonsDB = require("./getPokemonsDB");

const getPokemonByName = async (name) => {
  const apiPokemons = await getApiData(48);
  const DBPokemons = await getPokemonsDB();
  const allPokemons = [...apiPokemons, ...DBPokemons];
  if (name) {
    let filterPokemons = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
    );
    if (filterPokemons.length) return filterPokemons;
    throw new Error(`No se encontró el pokemon con el nombre: ${name}`);
  } else {
    return allPokemons;
  }
};

module.exports = getPokemonByName;
