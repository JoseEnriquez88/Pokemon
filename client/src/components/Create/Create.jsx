import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllTypes } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { createPokemon } from '../../redux/actions';
import style from './create.module.css';
import formValidation from '../../utils/formValidation';

const Create = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  // const [selectedTypes, setSelectedTypes] = useState([])
  const [errors, setErrors] = useState({});
  const [pokemon, setPokemon] = useState({
    name: '',
    image: '',
    life: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    types: []
  });

  const handleChange = (event) => {
    setPokemon({
      ...pokemon,
      [event.target.name]: event.target.value
    });

    setErrors(formValidation({
      ...pokemon,
      [event.target.name]: event.target.value
    }));
  };

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setPokemon({
        ...pokemon,
        types: [...pokemon.types, selectedType]
      });
    } else {
      const updatedTypes = pokemon.types.filter((type) => type !== selectedType);
      setPokemon({
        ...pokemon,
        types: updatedTypes
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pokemon.name && pokemon.image && pokemon.life && pokemon.attack && pokemon.defense) {
      const pokemonCreado = {
        ...pokemon,
        types: [pokemon.types[0]]
      }
      if (dispatch(createPokemon(pokemonCreado))) {
        alert(`El Pokemon ${pokemon.name} fue creado exitosamente`);
        setPokemon({
          name: '',
          image: '',
          life: 0,
          attack: 0,
          defense: 0,
          speed: 0,
          height: 0,
          weight: 0,
          types: []
        });
        setErrors({});
      } else {
        alert(`El pokemon ${pokemon.name} no pudo crearse`);
      }
    } else {
      alert('Debes completar todos los campos obligatorios');
    }
  };


  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  return (
    <div className={style.mainCntnr}>
      <h1>Crear Pokemon</h1>
      <form onSubmit={handleSubmit} className={style.formCntnr}>

        {/* //!div para el nombre */}
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" onChange={handleChange} />
          {errors.name && <p className={style.error}>{errors.name}</p>}
        </div>

        {/* //!div para la imagen */}
        <div>
          <label htmlFor="image">Imagen:</label>
          <input type="text" name="image" onChange={handleChange} />
          {errors.image && <p className={style.error}>{errors.image}</p>}
        </div>

        {/* //!div para la vida */}
        <div>
          <label htmlFor="life">Vida:</label>
          <input type="text" name="life" onChange={handleChange} />
          {errors.life && <p className={style.error}>{errors.life}</p>}
        </div>


        {/* //!div para el ataque */}
        <div>
          <label htmlFor="attack">Ataque:</label>
          <input type="text" name="attack" onChange={handleChange} />
          {errors.attack && <p className={style.error}>{errors.attack}</p>}
        </div>

        {/* //!div para la defensa */}
        <div>
          <label htmlFor="defense">Defensa:</label>
          <input type="text" name="defense" onChange={handleChange} />
          {errors.defense && <p className={style.error}>{errors.defense}</p>}
        </div>

        {/* //!div para la velocidad */}
        <div>
          <label htmlFor="speed">Velocidad:</label>
          <input type="text" name="speed" onChange={handleChange} />
          {errors.speed && <p className={style.error}>{errors.speed}</p>}
        </div>

        {/* //!div para la altura */}
        <div>
          <label htmlFor="height">Altura:</label>
          <input type="text" name="height" onChange={handleChange} />
          {errors.height && <p className={style.error}>{errors.height}</p>}
        </div>

        {/* //!div para el peso */}
        <div>
          <label htmlFor="weight">Peso:</label>
          <input type="text" name="weight" onChange={handleChange} />
          {errors.weight && <p className={style.error}>{errors.weight}</p>}
        </div>

        {/* //! div de los tipos */}
        {/* <div className={style.types}>
          <label htmlFor="types">Tipos:</label>
          <select className={style.selectTypes} name="types" id="types" onChange={handleChange}>
            <option value="" hidden>Seleccione el tipo</option>
            {types.map((type) => (
              <option className={style.typeOption} key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.types && <p className={style.error}>{errors.types}</p>}
        </div> */}

        <div className={style.types}>
          <label>Tipos:</label>
          {types.map((type) => (
            <div className={style.checkCntnr} key={type}>
              <input
                type="checkbox"
                name="types"
                value={type}
                checked={pokemon.types.includes(type)}
                onChange={handleTypeChange}
              />
              <span>{type}</span>
            </div>
          ))}
          {errors.types && <p className={style.error}>{errors.types}</p>}
        </div>

        {/* //!div para los botones */}
        <div className={style.btnCntnr}>
          <button>Crear Pokemon</button>
          <Link to="/home">
            <button>volver</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Create;
