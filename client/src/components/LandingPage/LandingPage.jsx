import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel.jsx";
import style from "./landing.module.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import charmander from "../../assets/landingPokemons/charmander.jpeg";
import eevee from "../../assets/landingPokemons/eevee.jpeg";
import gengar from "../../assets/landingPokemons/gengar.jpeg";
import pikachu from "../../assets/landingPokemons/pikachu.png";
import snorlax from "../../assets/landingPokemons/snorlax.jpeg";

const LandingPage = () => {
  const images = [charmander, eevee, gengar, pikachu, snorlax];

  return (
    <div className={style.mainCntnr}>
      <h1 className={style.titulo}>
        ¡Hola! Te damos la bienvenida a la página de pokemones
      </h1>

      <div className={style.subContainer}>
        <div className={style.carouselContainer}>
          <Carousel images={images} autoplay={false} showButtons={false} />
        </div>

        <div className={style.minorContainer}>
          <div className={style.txtContainer}>
            <p className={style.txt}>
              En esta pagina puedes explorar una amplia variedad de pokemones y
              aprender datos interesantes sobre cada una de ellos.
            </p>
          </div>
          <Link to="/home">
            <button className={style.btn}>
              Comenzar <RocketLaunchIcon className={style.start} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
