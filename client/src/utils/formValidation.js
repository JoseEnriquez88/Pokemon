const nameRegex = /^[a-zA-Z0-9\s]+$/;
const imageRegex = /^.+\.(jpeg|jpg|png)$/;
const imageRegexURL = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;

const formValidation = (pokemon) => {
  const errors = {};

  if (!nameRegex.test(pokemon.name) || pokemon.name === "")
    errors.name = "Campo obligatorio.";
  if (pokemon.name.length > 50)
    errors.name = "El nombre del pokemon no puede tener mas de 50 caracteres";

  if (!imageRegex.test(pokemon.image) || !imageRegexURL.test(pokemon.image))
    errors.image =
      'Sólo URL por el momento.'
  if (pokemon.image === "")
    errors.image = "Campo obligatorio.";

  if (pokemon.life <= 0 || isNaN(parseFloat(pokemon.life)))
    errors.life = "Campo obligatorio.";
  if (pokemon.life > 999)
    errors.life = "Digite un valor menor a 999.";

  if (pokemon.attack <= 0 || isNaN(parseFloat(pokemon.attack)))
    errors.attack = "Campo obligatorio.";
  if (pokemon.attack > 999)
    errors.life = "Digite un valor menor a 999.";

  if (pokemon.defense <= 0 || isNaN(parseFloat(pokemon.defense)))
    errors.defense = "Campo obligatorio.";
  if (pokemon.defense > 999)
    errors.life = "Digite un valor menor a 999.";

  // if(pokemon.speed <= 0) errors.speed = 'Este campo no puede estar vacío';
  // if(pokemon.weight <= 0) errors.weight = 'Este campo no puede estar vacío';
  // if(pokemon.height <= 0) errors.height = 'Este campo no puede estar vacío';
  if (pokemon.speed > 999)
    errors.life = "Digite un valor menor a 999.";
  if (pokemon.weight > 999)
    errors.life = "Digite un valor menor a 999.";
  if (pokemon.weight > 999)
    errors.life = "Digite un valor menor a 999";

  if (pokemon.types === "")
    errors.types = "Debe seleccionar al menos 1 tipo y hasta máximo 2.";

  return errors;
};

export default formValidation;
