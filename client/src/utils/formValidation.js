//!Validaciones para el formulario de creacion de pokemones

const nameRegex = /^[a-zA-Z0-9\s]+$/;
const imageRegex = /^.+\.(jpeg|jpg|png)$/;
const imageRegexURL = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;

const formValidation = (pokemon) => {
    const errors = {};

    // Valido que contenga nombre
    if (!nameRegex.test(pokemon.name) || pokemon.name === '') errors.name = 'Nombre del pokemon no puede estar vacío';
    if(pokemon.name.length > 50) errors.name = 'El nombre del pokemon no puede tener mas de 50 caracteres'
    
    // Valido que la imagen sea jpg, jpeg, png o url
    if (!imageRegex.test(pokemon.image) || !imageRegexURL.test(pokemon.image)) errors.image = 'La imagen debe ser una URL válida o tener un formato jpg, jpeg, png';
    if(pokemon.image === '') errors.image =  'El pokemon requiere de una imagen para crearse';

    // Valido que las siguientes características esten completos
    if(pokemon.life <= 0 || isNaN(parseFloat(pokemon.life))) errors.life = 'Vida del pokemon no puede estar vacío';
    if(pokemon.life > 999) errors.life = 'La vida del pokemon no puede ser mayor a 999';

    if(pokemon.attack <= 0 || isNaN(parseFloat(pokemon.attack))) errors.attack = 'Ataque del pokemon no puede estar vacío';
    if(pokemon.attack > 999) errors.life = 'El ataque del pokemon no puede ser mayor a 999';
    
    if(pokemon.defense <= 0 || isNaN(parseFloat(pokemon.defense))) errors.defense = 'Defensa del pokemon no puede estar vacío';
    if(pokemon.defense > 999) errors.life = 'La defensa del pokemon no puede ser mayor a 999';

    // if(pokemon.speed <= 0) errors.speed = 'Este campo no puede estar vacío';
    // if(pokemon.weight <= 0) errors.weight = 'Este campo no puede estar vacío';
    // if(pokemon.height <= 0) errors.height = 'Este campo no puede estar vacío';
    if(pokemon.speed > 999) errors.life = 'La velocidad del pokemon no puede ser mayor a 999';
    if(pokemon.weight > 999) errors.life = 'El peso del pokemon no puede ser mayor a 999';
    if(pokemon.weight > 999) errors.life = 'La altura del pokemon no puede ser mayor a 999';


    // Valido que los tipos sean solo letras
    if(pokemon.types === '') errors.types = 'Debe seleccionar al menos 1 tipo y hasta máximo 2.'; 

    return errors;
}

export default formValidation;


