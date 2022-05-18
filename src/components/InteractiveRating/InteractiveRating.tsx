import { FC, useState } from "react";
import styles from "./InteractiveRating.module.scss";
import star from "./images/icon-star.svg";
import thankyou from "./images/illustration-thank-you.svg";

const InteractiveRating: FC = () => {
  const [rating, setRating] = useState(3);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={styles.body}>
      <article>
        {!submitted ? (
          <>
            <StarRating rating={rating} />
            <div className={styles.content}>
              <p className={styles.header}>How did we do?</p>
              <p className={styles.text}>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <RatingButtons rating={rating} setRating={setRating} />
            <button
              className={styles.submitBtn}
              onClick={() => setSubmitted(true)}
            >
              Submit
            </button>
          </>
        ) : (
          <SubmitScreen rating={rating} />
        )}
      </article>
    </div>
  );
};

const SubmitScreen = ({ rating }) => {
  return (
    <div className={styles.submitScreen}>
      <img src={thankyou} />
      <p className={styles.ratingDisplay}>You selected {rating} out of 5</p>
      <div className={styles.content}>
        <p className={styles.header}>Thank you!</p>
        <p className={styles.text}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

const StarRating = ({ rating }) => {
  return (
    <div className={styles.stars}>
      {Array(rating)
        .fill(0)
        .map(() => (
          <div className={styles.star}>
            <img src={star} alt="An orange star" />
          </div>
        ))}
    </div>
  );
};

const RatingButtons = ({ rating, setRating }) => {
  return (
    <div className={styles.ratings}>
      <RatingButton number={1} rating={rating} setRating={setRating} />
      <RatingButton number={2} rating={rating} setRating={setRating} />
      <RatingButton number={3} rating={rating} setRating={setRating} />
      <RatingButton number={4} rating={rating} setRating={setRating} />
      <RatingButton number={5} rating={rating} setRating={setRating} />
    </div>
  );
};

const RatingButton = ({ number, rating, setRating }) => {
  return (
    <button
      className={`${rating === number ? styles.focus : ""} ${styles.ratingBtn}`}
      onClick={() => setRating(number)}
    >
      {number}
    </button>
  );
};

export default InteractiveRating;
