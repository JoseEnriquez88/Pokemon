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

  const handleSubmit = (event) => {
    event.preventDefault();
    if(dispatch(createPokemon(pokemon))) 
    alert('pokemon creado exitosamente');
    else alert('El pokemon no pudo crearse');   
  };

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  return (
    <div className={style.mainCntnr}>
      <h1>Crear Pokemon</h1>
      <form onSubmit={handleSubmit} className={style.formCntnr}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" onChange={handleChange} />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="image">Imagen:</label>
          <input type="text" name="image" onChange={handleChange} />
          {errors.image && <p>{errors.image}</p>}
        </div>
        <div>
          <label htmlFor="life">Vida:</label>
          <input type="text" name="life" onChange={handleChange} />
          {errors.life && <p>{errors.life}</p>}
        </div>
        <div>
          <label htmlFor="attack">Ataque:</label>
          <input type="text" name="attack" onChange={handleChange} />
          {errors.attack && <p>{errors.attack}</p>}
        </div>
        <div>
          <label htmlFor="defense">Defensa:</label>
          <input type="text" name="defense" onChange={handleChange} />
          {errors.defense && <p>{errors.defense}</p>}
        </div>
        <div>
          <label htmlFor="speed">Velocidad:</label>
          <input type="text" name="speed" onChange={handleChange} />
          {errors.speed && <p>{errors.speed}</p>}
        </div>
        <div>
          <label htmlFor="height">Altura:</label>
          <input type="text" name="height" onChange={handleChange} />
          {errors.height && <p>{errors.height}</p>}
        </div>
        <div>
          <label htmlFor="weight">Peso:</label>
          <input type="text" name="weight" onChange={handleChange} />
          {errors.weight && <p>{errors.weight}</p>}
        </div>
        <div className={style.types}>
          <label htmlFor="types">Tipos:</label>
          <select className={style.selectTypes} name="types" id="types" onChange={handleChange}>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.types && <p>{errors.types}</p>}
        </div>
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
