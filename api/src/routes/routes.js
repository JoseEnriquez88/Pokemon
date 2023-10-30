const { Router } = require("express");
const getAllPokemonsHandler = require("../handlers/getAllPokemonsHandler");
const getPokemonsByIdHandler = require("../handlers/getPokemonsByIdHandler");
const getPokemonByNameHandler = require("../handlers/getPokemonByNameHandler");
const postPokemonHandler = require("../handlers/postPokemonHandler");
const getPokemonByTypeHandler = require("../handlers/getPokemonByTypeHandler");
const getTypesFromDBHandler = require("../handlers/getTypesFromDBHandler");

const router = Router();

router.get("/pokemons", getAllPokemonsHandler);
router.get("/pokemons/:id", getPokemonsByIdHandler);
router.get("/name", getPokemonByNameHandler);
router.post("/pokemons", postPokemonHandler);
router.get("/types", getPokemonByTypeHandler);
router.get("/types-db", getTypesFromDBHandler);

module.exports = router;
