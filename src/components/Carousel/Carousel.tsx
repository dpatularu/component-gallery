import { useEffect, useState } from "react";
import styles from "./Carousel.module.scss";

const Carousel = ({ width, children }) => {
  const [stateSlides, setStateSlides] = useState(children);
  const [visibleSlide, setVisibleSlide] = useState(1);
  const [disableAnimation, setDisableAnimation] = useState(false);

  const scrollLeft = () => {
    if (visibleSlide === 0 || disableAnimation) return;
    setVisibleSlide(visibleSlide - 1);
  };
  const scrollRight = () => {
    if (visibleSlide === stateSlides.length - 1 || disableAnimation) return;
    setVisibleSlide(visibleSlide + 1);
  };

  const calculateLeftMargin = () => {
    return -visibleSlide * 100;
  };

  const displaySlideNumber = () => {
    const numSlides = stateSlides.length - 1;
    if (visibleSlide === 0) return numSlides - 1;
    if (visibleSlide === numSlides) return 1;
    return visibleSlide;
  };

  useEffect(() => {
    const appendSlide = children[0];
    const prependSlide = children[children.length - 1];

    setStateSlides([prependSlide, ...children, appendSlide]);
  }, []);

  useEffect(() => {
    const numSlides = stateSlides.length - 1;
    if (visibleSlide === 0) {
      setTimeout(() => {
        setDisableAnimation(true);
        setVisibleSlide(numSlides - 1);
      }, 100);
    }

    if (visibleSlide === 1 || visibleSlide === numSlides - 1) {
      setTimeout(() => {
        setDisableAnimation(false);
      }, 100);
    }

    if (visibleSlide === numSlides) {
      setTimeout(() => {
        setDisableAnimation(true);
        setVisibleSlide(1);
      }, 100);
    }
  }, [visibleSlide]);

  return (
    <>
      <nav>
        <h1>Component Gallery</h1>
        <div>
          <button onClick={scrollLeft}>&#8592;</button>
          {displaySlideNumber()} / {children.length}
          <button onClick={scrollRight}>&#8594;</button>
        </div>
      </nav>

      <div
        className={`${styles.carousel}`}
        style={{
          width: `${width}`,
        }}
      >
        <div
          className={`${styles.slider} ${
            !disableAnimation ? styles.transition : ""
          }`}
          style={{ left: `${calculateLeftMargin()}%` }}
        >
          {stateSlides.map((slide) => (
            <div style={{ width: `${width}` }}>{slide}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
