const { Pokemon, Type } = require('../db.js');

// const getPokemonDB = async () => {
//   const allPokemons = await Pokemon.findAll({
//     include: [
//       {
//         model: Type,
//         attributes: ['name'] // Obtener solo el atributo 'name' del modelo Type
//       }
//     ]
//   });

//   return allPokemons;
// };

const getPokemonDB = async () => {
  const allPokemons = await Pokemon.findAll({
    include: [
      {
        model: Type,
        attributes: ['name'], // Obtener solo el atributo 'name' del modelo Type
        through: { attributes: [] }, // Omitir las columnas de la tabla intermedia entre Pokemon y Type
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
      types: pokemon.Types.map((type) => type.name), // Obtener solo los nombres de los tipos
    };
  });
};

module.exports = getPokemonDB;
