import { GET_ALL_POKEMONS, GET_POKEMONS_BY_NAME, GET_POKEMON_BY_ID, GET_ALL_TYPES, POST_POKEMON, API_DB_FILTER, ALPHABETIC_SORT, CLEAN_DETAIL, CLEAN_MESAGGE, ERROR } from "./action-types";

const initialState = {
    pokemons: [],
    copyPokemons: [],
    types: [], //para traer los tipos de la base de datos
    pokemonDetail: null,
    message: '',
    filter: false
};

const reducer = (state = initialState, action) => { //action => type, payload
    switch (action.type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                copyPokemons: [...action.payload] //copia de los pokemones
            };

        case GET_POKEMONS_BY_NAME:
            return {
                ...state,
                pokemons: action.payload,
            }
        
        case GET_POKEMON_BY_ID:
            return{
                ...state,
                pokemons: [action.payload]
            }

        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload
            }
        
        case POST_POKEMON:
            return{
                ...state,
                pokemons: [...state.pokemons, action.payload]
            }

        case ERROR:
            return {
                ...state,
                message: action.payload
            }
        
        case API_DB_FILTER:
            const copia = [...state.copyPokemons];
            if(action.payload === 'api'){
                const apiPokemones = copia.filter(p => typeof p.id === 'number');
                return{
                    ...state,
                    pokemons: apiPokemones
                }
            }else if(action.payload === 'db'){
                const dbPokemones = copia.filter(p => typeof p.id === 'string');
                return{
                    ...state,
                    pokemons: dbPokemones
                }
            }else if(action.payload === 'all'){
                const allPokemons = [...state.copyPokemons];
                return{
                    ...state,
                    pokemons: allPokemons
                };
            }
            break;

        case ALPHABETIC_SORT:
            const sortedPokemons = [...state.pokemons].sort((a, b) => a.name.localeCompare(b.name))
            return{
                ...state,
                pokemons: sortedPokemons
            }
        case CLEAN_DETAIL:
            return{
                ...state,
                pokemonDetail: null,
            }

        case CLEAN_MESAGGE:
            return {
                ...state,
                message: '',
            }

        default:
            return { ...state };
    }
};

export default reducer;