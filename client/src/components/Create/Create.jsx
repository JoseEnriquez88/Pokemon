import style from "./create.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createPokemon } from "../../redux/actions";
import formValidation from "../../utils/formValidation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Create = () => {
  const dispatch = useDispatch();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
    life: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: [],
  });

  const types = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow",
  ];

  const handleChange = (event) => {
    setPokemon({
      ...pokemon,
      [event.target.name]: event.target.value,
    });

    setErrors(
      formValidation({
        ...pokemon,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleTypeChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      if (selectedTypes.length < 2) {
        setSelectedTypes((prevSelectedTypes) => [...prevSelectedTypes, value]);
      }
    } else {
      setSelectedTypes((prevSelectedTypes) =>
        prevSelectedTypes.filter((type) => type !== value)
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const createdPokemon = {
      ...pokemon,
      types: selectedTypes,
      speed: pokemon.speed || 0,
      height: pokemon.height || 0,
      weight: pokemon.weight || 0,
    };
    dispatch(createPokemon(createdPokemon))
      .then(() => {
        alert(`El pokemon ${createdPokemon.name} se creó exitosamente`);
      })
      .catch(() => {
        alert("No se pudo crear el pokemon. Por favor, inténtalo nuevamente.");
      });
  };

  useEffect(() => {
    setButtonDisabled(
      !pokemon.name ||
        !pokemon.image ||
        !pokemon.attack ||
        !pokemon.defense ||
        !selectedTypes.length ||
        Object.keys(errors).length > 0
    );
  }, [pokemon, selectedTypes, errors]);

  return (
    <form onSubmit={handleSubmit} className={style.mainCntnr}>
      <h1>Crea tu pokemon</h1>

      <div className={style.inputCntnr}>
        <div className={style.primerSubCntnr}>
          {/* Div para el nombre */}
          <div className={style.nameCntnr}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" onChange={handleChange} />
            {errors.name && <p className={style.errors}>{errors.name}</p>}
          </div>

          {/* Div para imagen */}
          <div className={style.imageCntnr}>
            <label htmlFor="image">Imagen:</label>
            <input type="text" name="image" onChange={handleChange} />
            {errors.image && <p className={style.errors}>{errors.image}</p>}
          </div>

          {/* Div para la vida */}
          <div className={style.lifeCntnr}>
            <label htmlFor="life">Vida:</label>
            <input type="text" name="life" onChange={handleChange} />
            {errors.life && <p className={style.errors}>{errors.life}</p>}
          </div>

          {/* Div para ataque */}
          <div className={style.attackCntnr}>
            <label htmlFor="attack">Ataque:</label>
            <input type="text" name="attack" onChange={handleChange} />
            {errors.attack && <p className={style.errors}>{errors.attack}</p>}
          </div>
        </div>

        <div className={style.segundoSubCntnr}>
          {/* Div para defensa */}
          <div className={style.defenseCntnr}>
            <label htmlFor="defense">Defensa:</label>
            <input type="text" name="defense" onChange={handleChange} />
            {errors.defense && <p className={style.errors}>{errors.defense}</p>}
          </div>

          {/* Div para velocidad */}
          <div className={style.speedCntnr}>
            <label htmlFor="speed">Velocidad:</label>
            <input type="text" name="speed" onChange={handleChange} />
          </div>

          {/* Div para altura */}
          <div className={style.heightCntnr}>
            <label htmlFor="height">Altura:</label>
            <input type="text" name="height" onChange={handleChange} />
          </div>

          {/* Div para peso */}
          <div className={style.weightCntnr}>
            <label htmlFor="weight">Peso:</label>
            <input type="text" name="weight" onChange={handleChange} />
          </div>
        </div>
      </div>

      {/* Div para los tipos */}
      <div className={style.typesCntnr}>
        <label htmlFor="types">Tipos:</label>
        <p>Elija 2 tipos</p>
        <div className={style.checkTypes}>
          {types.map((type, index) => (
            <div key={index}>
              <input
                type="checkbox"
                value={type}
                onChange={handleTypeChange}
                checked={selectedTypes.includes(type)}
                disabled={
                  selectedTypes.length === 2 && !selectedTypes.includes(type)
                }
              />
              <label htmlFor={type}>{type}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Div para botones */}
      <div className={style.btnCntnr}>
        <button
          className={` ${style.createBtn} ${
            buttonDisabled ? style.disabled : ""
          }`}
          disabled={buttonDisabled}
        >
          Crear
        </button>
        <Link to="/home">
          <button className={style.goBackBtn}>
            <ArrowBackIcon />
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Create;
