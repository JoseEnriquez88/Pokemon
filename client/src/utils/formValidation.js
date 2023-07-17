//!Validaciones para el formulario de creacion de pokemones

const nameRegex = /^[a-zA-Z\s]+$/;
const imageRegex = /^.+\.(jpeg|jpg|png)$/;
const imageRegexURL = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;

const formValidation = (pokemon) => {
    const errors = {};

    // Valido que contenga nombre
    if (!nameRegex.test(pokemon.name)) errors.name = 'El pokemon requiere nombre'
    
    // Valido que la imagen sea jpg, jpeg, png o url
    if (!imageRegex.test(pokemon.image) || !imageRegexURL.test(pokemon.image)) errors.image = 'La imagen debe ser una URL válida o tener un formato jpg, jpeg, png'

    // Valido que las siguientes características esten completos
    if(pokemon.life <= 0) errors.life = 'Este campo no puede estar vacío';
    if(pokemon.attack <= 0) errors.attack = 'Este campo no puede estar vacío';
    if(pokemon.defense <= 0) errors.defense = 'Este campo no puede estar vacío';
    if(pokemon.speed <= 0) errors.speed = 'Este campo no puede estar vacío';
    if(pokemon.height <= 0) errors.height = 'Este campo no puede estar vacío';
    if(pokemon.weight <= 0) errors.weight = 'Este campo no puede estar vacío';

    // Valido que los tipos sean solo letras
    if (pokemon.types === '') errors.types = 'Debe seleccionar al menos 1 tipo'; 

    return errors;
}

export default formValidation;


