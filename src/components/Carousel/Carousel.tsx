import { useEffect, useState } from "react";
import styles from "./Carousel.module.scss";

const Carousel = ({ width, children }) => {
  const [stateSlides, setStateSlides] = useState(children);
  const [visibleSlide, setVisibleSlide] = useState(1);

  const scrollLeft = () => setVisibleSlide(visibleSlide - 1);
  const scrollRight = () => setVisibleSlide(visibleSlide + 1);

  const calculateLeftMargin = () => {
    return -visibleSlide * 100;
  };

  useEffect(() => {
    const appendSlide = children[0];
    const prependSlide = children[children.length - 1];

    setStateSlides([prependSlide, ...children, appendSlide]);
  }, []);

  useEffect(() => {
    const numSlides = stateSlides.length - 1;
    if (visibleSlide === 0) setVisibleSlide(numSlides - 1);
    if (visibleSlide === numSlides) setVisibleSlide(1);
  }, [visibleSlide]);

  return (
    <>
      <nav>
        <button onClick={scrollLeft}>left</button>
        {visibleSlide} / {children.length}
        <button onClick={scrollRight}>right</button>
      </nav>

      <div className={styles.carousel} style={{ width: `${width}` }}>
        <div
          className={styles.slider}
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
