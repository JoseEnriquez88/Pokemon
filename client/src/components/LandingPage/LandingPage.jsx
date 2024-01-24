import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel.jsx";
import style from "./landing.module.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import pokeLogo from "../../assets/pokeCut.png";

import charmander from "../../assets/landingPokemons/charmander.png";
import eevee from "../../assets/landingPokemons/eeve.png";
import gengar from "../../assets/landingPokemons/gengar.png";
import pikachu from "../../assets/landingPokemons/pikachu.png";
import snorlax from "../../assets/landingPokemons/snorlax.png";

const LandingPage = () => {
  const images = [charmander, eevee, gengar, pikachu, snorlax];

  return (
    <div className={style.container}>
      <div className={style.mainCntnr}>
        <div className={style.subContainer}>
          <img src={pokeLogo} alt="logo" className={style.logo} />
          <div className={style.minorContainer}>
            <div className={style.txtContainer}>
              <h1 className={style.txt}>
                En esta pagina puedes explorar una amplia variedad de pokemones
                y aprender datos interesantes sobre cada una de ellos. Haz click
                en comenzar
              </h1>
            </div>
            <div className={style.buttonContainer}>
              <Link to="/home">
                <button className={style.btn}>
                  Comenzar <RocketLaunchIcon className={style.start} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={style.carouselContainer}>
        <Carousel images={images} autoplay={false} showButtons={false} />
      </div>
    </div>
  );
};

export default LandingPage;
