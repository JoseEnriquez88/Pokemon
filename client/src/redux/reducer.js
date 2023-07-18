import { GET_ALL_POKEMONS, GET_POKEMONS_BY_NAME, GET_POKEMON_BY_ID, GET_ALL_TYPES, POST_POKEMON, API_DB_FILTER, ALPHABETIC_SORT, RESET_ALPHABETIC_SORT, SORT_BY_TYPE, CLEAN_DETAIL, CLEAN_MESSAGE, ERROR, SORT_BY_ATTACK } from "./action-types";

const initialState = {
    pokemons: [], //todos lo pokemones
    copyPokemons: [], //copia de todos los pokemones
    types: [], //para traer los tipos de la base de datos
    cleanPokemonDetail: null, //para borrar el detail
    message: '', // para el mensaje de error
    filter: false //para el filtro 
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
            return {
                ...state,
                pokemons: [action.payload]
            }

        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload
            }

        case POST_POKEMON: //para crear el pokemon
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload],
                pokemon: action.payload
            }

        case ERROR:
            return {
                ...state,
                message: action.payload
            }

        case API_DB_FILTER:
            const copia = [...state.copyPokemons];
            if (action.payload === 'api') {
                const apiPokemones = copia.filter(p => typeof p.id === 'number');
                return {
                    ...state,
                    pokemons: apiPokemones
                }
            } else if (action.payload === 'db') {
                const dbPokemones = copia.filter(p => typeof p.id === 'string');
                return {
                    ...state,
                    pokemons: dbPokemones
                }
            } else if (action.payload === 'all') {
                const allPokemons = [...state.copyPokemons];
                return {
                    ...state,
                    pokemons: allPokemons
                };
            }
            break;

        case ALPHABETIC_SORT:
            const pokemonFiltered = [...state.copyPokemons];
            return {
                ...state,
                pokemons: pokemonFiltered.sort((a, b) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();
                    if (action.payload === 'asc') return nameA.localeCompare(nameB);
                    else return nameB.localeCompare(nameA)
                })
            }

        case RESET_ALPHABETIC_SORT:
            return {
                ...state,
                pokemons: [...state.copyPokemons]
            }

        // case SORT_BY_TYPE:
        //     const sortPokemonByType = state.pokemons.filter(pokemon => pokemon.types.includes(action.payload));
        //     return {
        //         ...state,
        //         pokemons: sortPokemonByType
        //     }

        case SORT_BY_TYPE:
            const sortPokemonByType = state.copyPokemons.filter(pokemon => pokemon.types.includes(action.payload));
            return {
                ...state,
                pokemons: sortPokemonByType
            };


        case SORT_BY_ATTACK:
            const sortedPokemons = [...state.pokemons];
            sortedPokemons.sort((a, b) => {
                if (action.payload === "min") {
                    return a.attack - b.attack;
                } else if (action.payload === "max") {
                    return b.attack - a.attack;
                }
                return 0;
            });
            return {
                ...state,
                pokemons: sortedPokemons
            };

        case CLEAN_DETAIL:
            return {
                ...state,
                cleanPokemonDetail: null,
            }

        case CLEAN_MESSAGE:
            return {
                ...state,
                message: '',
            }

        default:
            return { ...state };
    }
};

export default reducer;