const getPokemonsById = require('../controllers/getPokemonById');

const getPokemonsByIdHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? 'bd' : 'api';

    try {
        const response = await getPokemonsById(id, source);
        return res.status(200).send(response);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = getPokemonsByIdHandler;