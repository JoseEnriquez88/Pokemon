//!Validaciones para el formulario de creacion de un pokemon.

const nameRegex = /^[a-zA-Z0-9\s]+$/;
const imageRegex = /^.+\.(jpeg|jpg|png)$/;
const imageRegexURL = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;

const formValidation = (name, image, types, life, attack, defense, speed, height, weight) => {
   //! Valido que contenga nombre
   if (!nameRegex.test(name)) throw new Error(`${name} no es válido como nombre para el pokemon`);
   if (!name.length > 50) throw new Error('El nombre no puede contener mas de 50 caracteres');
   if(!name.length === '') throw new Error('El nombre es necesario para poder crear el pokemon.');

   //! Valido que la imagen sea jpg, jpeg, png o url
   if (!imageRegex.test(image) || !imageRegexURL.test(image)) throw new Error('La imagen debe ser una URL válida o tener un formato jpg, jpeg, png');
   if(!image.length === '') throw new Error('La imagen es necesario para poder crear el pokemon.');


   //! Valido que los tipos sean solo letras
   if (!Array.isArray(types) || !types.every(type => nameRegex.test(type))) throw new Error(`${types} debe contener solo letras`);
   if(types.length === 0 || types.length > 2) throw new Error('Los tipos son necesario para poder crear el pokemon. Digite al menos 1 tipo y máximo 2');
   

   //! Valido que las siguientes características sean números o decimales
   // if (isNaN(parseFloat(life)) || isNaN(parseFloat(attack)) || isNaN(parseFloat(defense)) || isNaN(parseFloat(speed)) || isNaN(parseFloat(height)) || isNaN(parseFloat(weight))) {
      // throw new Error('Vida, ataque, defensa, velocidad, peso o altura del pokemon deben ser valores numéricos o decimales');
   if (isNaN(parseFloat(life)) || isNaN(parseFloat(attack)) || isNaN(parseFloat(defense))) throw new Error('Vida, ataque y defensa del pokemon deben ser valores numéricos o decimales');
   if(life === 0 || attack === 0 || defense === 0) throw new Error('Vida, ataque y defensa son necesarios para poder crear el pokemon');

   if(life > 999 || attack > 999 || defense > 999 || speed > 999 || height > 999 || weight > 999) throw new Error('Vida, ataque, defensa, velocidad, peso y altura no puede ser mayor a 999')
}; 

module.exports = formValidation;

