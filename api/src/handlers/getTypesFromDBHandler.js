const getTypesFromDB = require("../controllers/getTypesFromDB");

const getTypesFromDBHandler = async (req, res) => {
  try {
    const types = await getTypesFromDB();
    return res.status(200).json(types);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = getTypesFromDBHandler;
