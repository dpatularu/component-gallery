import styles from "./App.module.scss";
import Accordion from "./components/Accordion/Accordion";
import Carousel from "./components/Carousel/Carousel";
import InteractiveRating from "./components/InteractiveRating/InteractiveRating";
import QuoteGenerator from "./components/QuoteGenerator/QuoteGenerator";
import SocialProof from "./components/SocialProof/SocialProof";
import TipCalculator from "./components/TipCalculator/TipCalculator";

const App = () => {
  return (
    <div className={styles.App}>
      <Carousel width="100vw">
        <QuoteGenerator />
        <InteractiveRating />
        <TipCalculator />
        <Accordion />
        <SocialProof />
      </Carousel>
    </div>
  );
};

export default App;
