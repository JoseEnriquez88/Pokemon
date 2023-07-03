const postPokemon = require('../controllers/postPokemon');

const postPokemonHandler = async (req, res) => {
    const { name, type, life, attack, defense, speed, height, weight } = req.body;
    try {
        const createdPokemon = await postPokemon(name, type, life, attack, defense, speed, height, weight);
        return res.status(201).json({ message: createdPokemon });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = postPokemonHandler;