import React from "react";
import styles from "./App.module.scss";
import Carousel from "./components/Carousel/Carousel";
import InteractiveRating from "./components/InteractiveRating/InteractiveRating";

const App = () => {
  return (
    <div className={styles.App}>
      <Carousel width="100vw">
        <InteractiveRating />
        <InteractiveRating />
        <InteractiveRating />
      </Carousel>
    </div>
  );
};

export default App;
