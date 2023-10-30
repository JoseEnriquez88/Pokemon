const postPokemon = require("../controllers/postPokemon");

const postPokemonHandler = async (req, res) => {
  const { name, image, types, life, attack, defense, speed, height, weight } =
    req.body;
  try {
    const createdPokemon = await postPokemon(
      name,
      image,
      types,
      life,
      attack,
      defense,
      speed,
      height,
      weight
    );
    return res.status(201).json({ message: createdPokemon });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = postPokemonHandler;
