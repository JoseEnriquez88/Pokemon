const getPokemonByType = require('../controllers/getPokemonByType');

const getPokemonByTypeHandler = async (req, res) => {
    try {
        const types = await getPokemonByType();
        if(!types) throw new Error('Ocurrió un error al obtener los tipos de Pokémon.');
        res.status(200).json({ types });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getPokemonByTypeHandler;
