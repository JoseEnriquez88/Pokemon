const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//importo los handlers
const getAllPokemonsHandler = require('../handlers/getAllPokemonsHandler');
const getPokemonByIdHandler = require('../handlers/getPokemonByIdHandler');
const getPokemonByNameHandler = require('../handlers/getPokemonByNameHandler');
const postPokemonHandler = require('../handlers/postPokemonHandler');
const getPokemonByTypeHandler = require('../handlers/getPokemonByTypeHandler');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//!GET | /pokemons
router.get('/pokemons', getAllPokemonsHandler);

//!GET | /pokemons/:idPokemon
router.get('/pokemons/:id', getPokemonByIdHandler);

//! GET | /pokemons/name?="..."
router.get('/name', getPokemonByNameHandler);

//!POST | /pokemons
router.post('/pokemons', postPokemonHandler);

//!GET | /types
router.get('/types', getPokemonByTypeHandler);

module.exports = router;
