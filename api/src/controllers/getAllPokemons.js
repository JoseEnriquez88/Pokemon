//en este componente traigo los pokemones para mostrar desde la api y la base de datos
//y asi renderizarlo en la home page del front

const getApiData = require("./getApiData");
const getPokemonsDB = require("./getPokemonsDB");

const getAllPokemons = async () => {
  const apiPokemons = await getApiData(48); //obtengo pokemones de la api
  DBPokemons = await getPokemonsDB(); // obtengo pokemones de la base de datos
  const allPokemons = [...apiPokemons, ...DBPokemons]; // copia de los pokemones de la api y bd en un variable para todos
  if (allPokemons.length === 0)
    throw new Error("No se encontraron pokemones para mostrar."); //de no encontrar lanzo mensaje de error
  return allPokemons; // caso contrario devuelvo todos los pokemones api y base de datos
};

module.exports = getAllPokemons;
