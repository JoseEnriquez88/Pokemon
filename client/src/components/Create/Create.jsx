import style from './create.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPokemon } from '../../redux/actions';

const Create = () => {
  const dispatch = useDispatch();
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [pokemon, setPokemon] = useState({
    name: '',
    image: '',
    life: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    types: [],
  });

  const types = [
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy',
    'unknown',
    'shadow',
  ];

  const handleChange = (event) => {
    setPokemon({
      ...pokemon,
      [event.target.name]: event.target.value,
    });
  };

  const handleTypeChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      if (selectedTypes.length < 2) {
        setSelectedTypes((prevSelectedTypes) => [...prevSelectedTypes, value]);
      } else {
        event.target.checked = false; // Desmarca la opción si ya se seleccionaron dos tipos
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
    };
    dispatch(createPokemon(createdPokemon))
    .then(() => {
      alert(`El pokemon ${createPokemon} se creó exitosamente`);
    })
    .catch(() => {
      alert(`No se pudo crear el pokemon ${createPokemon}. Por favor, inténtalo nuevamente.`);
    });
  };

  return (
    <form onSubmit={handleSubmit} className={style.mainCntnr}>
      <h1>Crea tu pokemon</h1>

      {/* Div para el nombre */}
      <div className={style.nameCntnr}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>

      {/* Div para imagen */}
      <div className={style.imageCntnr}>
        <label htmlFor="image">Imagen:</label>
        <input type="text" name="image" onChange={handleChange} />
      </div>

      {/* Div para la vida */}
      <div className={style.lifeCntnr}>
        <label htmlFor="life">Vida:</label>
        <input type="text" name="life" onChange={handleChange} />
      </div>

      {/* Div para ataque */}
      <div className={style.attackCntnr}>
        <label htmlFor="attack">Ataque:</label>
        <input type="text" name="attack" onChange={handleChange} />
      </div>

      {/* Div para defensa */}
      <div className={style.defenseCntnr}>
        <label htmlFor="defense">Defensa:</label>
        <input type="text" name="defense" onChange={handleChange} />
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
                disabled={selectedTypes.length === 2 && !selectedTypes.includes(type)}
              />
              <label htmlFor={type}>{type}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Div para botones */}
      <div className={style.btnCntnr}>
        <button>Crear pokemon</button>
        <Link to="/home">
          <button>Volver</button>
        </Link>
      </div>
    </form>
  );
};

export default Create;
