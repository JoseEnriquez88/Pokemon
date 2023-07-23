//!Validaciones para el formulario de creacion de un pokemon.

const nameRegex = /^[a-zA-Z0-9\s]+$/;
const imageRegex = /^.+\.(jpeg|jpg|png)$/;
const imageRegexURL = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;

const formValidation = (name, image, types, life, attack, defense, speed, height, weight) => {
   // Valido que contenga nombre
   if (!nameRegex.test(name)) throw new Error(`${name} no es válido como nombre para el pokemon`);
   if (!name.length > 50) throw new Error('El nombre no puede contener mas de 50 caracteres');

   // Valido que la imagen sea jpg, jpeg, png o url
   if (!imageRegex.test(image) || !imageRegexURL.test(image)) throw new Error('La imagen debe ser una URL válida o tener un formato jpg, jpeg, png');

   // Valido que los tipos sean solo letras
   if (!Array.isArray(types) || !types.every(type => nameRegex.test(type))) {
      throw new Error(`${types} debe contener solo letras`);
   }

   //! Valido que las siguientes características sean números o decimales
   // if (isNaN(parseFloat(life)) || isNaN(parseFloat(attack)) || isNaN(parseFloat(defense)) || isNaN(parseFloat(speed)) || isNaN(parseFloat(height)) || isNaN(parseFloat(weight))) {
      // throw new Error('Vida, ataque, defensa, velocidad, peso o altura del pokemon deben ser valores numéricos o decimales');
   if (isNaN(parseFloat(life)) || isNaN(parseFloat(attack)) || isNaN(parseFloat(defense))) {
      throw new Error('Vida, ataque y defensa del pokemon deben ser valores numéricos o decimales');
   }
};

module.exports = formValidation;

