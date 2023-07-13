import { Link } from 'react-router-dom';
import style from './cards.module.css';

const Card = ({ name, id, image, height, weight, life, attack, defense, speed, types }) => {
  return (
    <div className={style.container}>
      <img className={style.img} src={image} alt={name} />
      <h4 className={style.name}>Nombre: {name}</h4>
      <h4 className={style.type}>Tipo: {types?.join(', ')}</h4>
      <h4 className={style.attack}>Ataque: {attack}</h4>
      <Link to={`/detail/${id}`}>
        <button className={style.detailBtn}>Mas detalles</button>
      </Link>
    </div>
  );
};


export default Card;

