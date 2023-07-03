const getPokemonByName = require('../controllers/getPokemonByName');

const getPokemonByNameHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const response = await getPokemonByName(name);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = getPokemonByNameHandler;