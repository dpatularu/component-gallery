import { useEffect, useState } from "react";
import styles from "./Carousel.module.scss";

const Carousel = ({ width, children }) => {
  const [stateSlides, setStateSlides] = useState(children);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [disableAnimation, setDisableAnimation] = useState(false);

  //Prevent changing slides when animations are disabled.
  const scrollLeft = () => {
    if (currentSlide === 0 || disableAnimation) return;
    setCurrentSlide(currentSlide - 1);
  };
  const scrollRight = () => {
    if (currentSlide === stateSlides.length - 1 || disableAnimation) return;
    setCurrentSlide(currentSlide + 1);
  };

  //The carousel is every slide placed side-by-side horizontally. To change slides, we offset by left margin.
  const calculateLeftMargin = () => {
    return -currentSlide * 100;
  };

  //This compensates for the indices being off due to the dummy slides.
  const displaySlideNumber = () => {
    const numSlides = stateSlides.length - 1;
    if (currentSlide === 0) return numSlides - 1;
    if (currentSlide === numSlides) return 1;
    return currentSlide;
  };

  //Insert dummy slides at the start and end.
  useEffect(() => {
    const appendSlide = children[0];
    const prependSlide = children[children.length - 1];

    setStateSlides([prependSlide, ...children, appendSlide]);
  }, []);

  //When on or beside the dummy slides, disable CSS animations to create a seamless switch for the infinite carousel illusion.
  useEffect(() => {
    const numSlides = stateSlides.length - 1;
    //When at the starting dummy slide, disable CSS animation and teleport to the last slide.
    if (currentSlide === 0) {
      setTimeout(() => {
        setDisableAnimation(true);
        setCurrentSlide(numSlides - 1);
      }, 250);
    }
    //When on the real slides, turn on CSS animations.
    if (currentSlide === 1 || currentSlide === numSlides - 1) {
      setTimeout(() => {
        setDisableAnimation(false);
      }, 250);
    }
    //When at the last dummy slide, disable CSS animation and teleport to the first slide.
    if (currentSlide === numSlides) {
      setTimeout(() => {
        setDisableAnimation(true);
        setCurrentSlide(1);
      }, 250);
    }
  }, [currentSlide]);

  return (
    <>
      <nav>
        <div>
          <p>Component Gallery</p>
          <p className={styles.small}>
            Made by <a href="https://github.com/dpatularu">Daniel Patularu</a>
          </p>
          <div className={styles.controls}>
            <button onClick={scrollLeft}>&#8592;</button>
            {displaySlideNumber()} / {children.length}
            <button onClick={scrollRight}>&#8594;</button>
          </div>
        </div>
      </nav>
      <div className={`${styles.carousel}`}>
        <div
          className={`${styles.slider} ${
            !disableAnimation ? styles.transition : ""
          }`}
          style={{ left: `${calculateLeftMargin()}vw` }}
        >
          {stateSlides.map((slide, index) => (
            <div
              key={index}
              style={{
                width: `${width}`,
              }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
