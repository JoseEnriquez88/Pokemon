const { Pokemon, Type } = require("../db");
const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemonsById = async (id) => {
  if (isNaN(id)) {
    const pokemonDB = await Pokemon.findByPk(id, { include: [Type] });
    if (!pokemonDB)
      throw new Error(
        `No se encuentra el pokemon con el id: ${id} en la base de datos`
      );

    const pokemon = pokemonDB.toJSON();
    const types = pokemon.Types.map((type) => type.name);

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
      types: types,
    };
  }

  const pokemonApi = (await axios.get(`${URL}/${id}`)).data;
  if (!pokemonApi)
    throw new Error(`No se encuentra el pokemon con el id: ${id} en la api`);

  const types = pokemonApi.types.map((type) => type.type.name);

  return {
    name: pokemonApi.name,
    id: pokemonApi.id,
    image: pokemonApi.sprites?.other?.dream_world?.front_default,
    height: pokemonApi.height,
    weight: pokemonApi.weight,
    life: pokemonApi.stats[0].base_stat,
    attack: pokemonApi.stats[1].base_stat,
    defense: pokemonApi.stats[2].base_stat,
    speed: pokemonApi.stats[5].base_stat,
    types: types,
  };
};

module.exports = getPokemonsById;
