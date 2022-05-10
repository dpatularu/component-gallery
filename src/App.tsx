import React from "react";
import styles from "./App.module.scss";
import InteractiveRating from "./components/InteractiveRating/InteractiveRating";

const App = () => {
  return (
    <div className={styles.App}>
      <InteractiveRating />
    </div>
  );
};

export default App;
