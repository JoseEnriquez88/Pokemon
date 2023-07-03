const getPokemonById = require('../controllers/getPokemonById');

const getPokemonByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getPokemonById(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = getPokemonByIdHandler;