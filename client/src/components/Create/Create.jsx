//Formulario para crear Pokemon
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllTypes } from '../../redux/actions';
import { Link } from 'react-router-dom';
import style from './create.module.css';

const Create = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  return (
    <div className={style.mainCntnr}>
      <h1>Crear Pokemon</h1>
      <form className={style.formCntnr}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="image">Imagen:</label>
          <input type="text" name="image" />
        </div>
        <div>
          <label htmlFor="life">Vida:</label>
          <input type="text" name="life" />
        </div>
        <div>
          <label htmlFor="attack">Ataque:</label>
          <input type="text" name="attack" />
        </div>
        <div>
          <label htmlFor="defense">Defensa:</label>
          <input type="text" name="defense" />
        </div>
        <div>
          <label htmlFor="speed">Velocidad:</label>
          <input type="text" name="speed" />
        </div>
        <div>
          <label htmlFor="height">Altura:</label>
          <input type="text" name="height" />
        </div>
        <div>
          <label htmlFor="weight">Peso:</label>
          <input type="text" name="weight" />
        </div>
        <div classname={style.types}>
          <label htmlFor="types">Tipos:</label>
          <select className={style.selectTypes} name="types" id="types">
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className={style.btnCntnr}>
          <button>Crear Pokemon</button>
          <Link to='/home'>
            <button>volver</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Create;
