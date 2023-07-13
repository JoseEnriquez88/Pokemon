const getPokemonsById = require('../controllers/getPokemonById');

const getPokemonsByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getPokemonsById(id);
        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = getPokemonsByIdHandler;