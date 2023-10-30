const { Pokemon, Type } = require("../db.js");

const getPokemonDB = async () => {
  const allPokemons = await Pokemon.findAll({
    include: [
      {
        model: Type,
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });

  return allPokemons.map((pokemon) => {
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
  });
};

module.exports = getPokemonDB;
