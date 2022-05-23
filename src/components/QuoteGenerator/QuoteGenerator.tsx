import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./QuoteGenerator.module.scss";
import divider from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";

interface Quote {
  id: number;
  quote: string;
}

const QuoteGenerator = () => {
  const [quote, setQuote] = useState<Quote>({
    id: 1,
    quote: "Try your best everyday.",
  });
  const [animate, setAnimate] = useState(true);

  const fetchQuote = async () => {
    setAnimate(false);
    const randomId = Math.floor(1 + Math.random() * 150);
    const request = await axios.get(
      `https://api.adviceslip.com/advice/${randomId}`
    );
    const quote = await request.data.slip;
    setQuote({ id: quote.id, quote: quote.advice });
    setAnimate(true);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className={styles.body}>
      <article className="container">
        <h3 className={styles.title}>Quote #{quote.id}</h3>
        <blockquote
          className={`${styles.quote} ${animate ? styles.fadein : ""}`}
        >
          {quote.quote}
        </blockquote>
        <img className={styles.divider} src={divider} />
        <button onClick={fetchQuote}>
          <img src={dice} alt="Dice" />
        </button>
      </article>
    </div>
  );
};

export default QuoteGenerator;
