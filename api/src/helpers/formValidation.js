//!Validaciones para el formulario de creacion de un pokemon.

const nameRegex = /^[a-zA-Z\s]+$/;
const imageRegex = /^.+\.(jpeg|jpg|png)$/;
const imageRegexURL = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;
const integerRegex = /^-?\d+$/;


const formValidation = (name, type, life, attack, defense, speed, height, weight) => {
   //Valido que contenga nombre
   if(!nameRegex.test(name)) throw new Error(`${name} no es válido como nombre para el pokemon`);
   
   //valido que la imagen sea jpg, jpeg, png o url
   if(!imageRegex.test(image) || !imageRegexURL.test(image)) throw new Error('La imagen debe ser una URL válida o ser de formato jpg, jpeg, png');

   //valido que las siguientes caracteristicas sea números
   if(!integerRegex.test(life) || !integerRegex.test(attack) || !integerRegex.test(defense) || !integerRegex.test(speed) || !integerRegex.test(height) || !integerRegex.test(weight)) 
   throw new Error('Vida, ataque, defensa, velocidad, peso o altura del pokemon tiene que ser de un valor númerico');

   //valido el tipo
   if(!nameRegex.test(type)) throw new Error(`${type} debe contener solo letras`);
};

module.exports = formValidation;