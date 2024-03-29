import { Link } from "react-router-dom";
import style from "./cards.module.css";

const Card = ({
  name,
  id,
  image,
  height,
  weight,
  life,
  attack,
  defense,
  speed,
  types,
}) => {
  return (
    <div className={style.container}>
      <img className={style.img} src={image} alt={name} />
      <div className={style.dataContainer}>
        <h4 className={style.name}>Nombre: {name}</h4>
        <h4 className={style.type}>Tipo: {types?.join(", ")}</h4>
        <h4 className={style.attack}>Ataque: {attack}</h4>
        <Link to={`/detail/${id}`}>
          <button className={style.detailBtn}>Detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
