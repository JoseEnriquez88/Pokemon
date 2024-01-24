import React, { useEffect, useState, useCallback } from "react";
import style from "./carousel.module.css";

import charmander from "../../assets/landingPokemons/charmander.png";
import eevee from "../../assets/landingPokemons/eeve.png";
import gengar from "../../assets/landingPokemons/gengar.png";
import pikachu from "../../assets/landingPokemons/pikachu.png";
import snorlax from "../../assets/landingPokemons/snorlax.png";

const Carousel = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const images = [charmander, eevee, gengar, pikachu, snorlax];

  const selectNewImage = useCallback(
    (index, images, next = true) => {
      setIsTransitioning(true);
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;

      setTimeout(() => {
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
        setIsTransitioning(false);
      }, 900);
    },
    [selectedIndex]
  );

  useEffect(() => {
    if (props.autoplay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [
    props.autoplay,
    props.images,
    props.showButtons,
    selectNewImage,
    selectedIndex,
  ]);

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <div className={style.imgContainer}>
      <img
        src={selectedImage}
        alt="Pokemons"
        className={`${style.img} ${
          isTransitioning ? style.fadeOut : style.fadeIn
        }`}
      />

      <div className={style.btnCntnr}>
        {props.showButtons ? (
          <>
            <button className={style.btns} onClick={previous}>
              {"<"}
            </button>
            <button className={style.btns} onClick={next}>
              {">"}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Carousel;
