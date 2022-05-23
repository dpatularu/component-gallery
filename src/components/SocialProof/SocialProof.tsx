import React from "react";
import styles from "./SocialProof.module.scss";

import star from "./images/icon-star.svg";
import anneImg from "./images/image-anne.jpg";
import coltonImg from "./images/image-colton.jpg";
import ireneImg from "./images/image-irene.jpg";

const SocialProof = () => {
  return (
    <article className={styles.body}>
      <div className={styles.container}>
        <header>
          <h1>10,000+ of our users love our products.</h1>
          <p>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </header>

        <section className={styles.reviews}>
          <div className={styles.review}>
            <div className={styles.stars}>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p>Rated 5 stars in Reviews</p>
          </div>
          <div className={styles.review}>
            <div className={styles.stars}>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p>Rated 5 stars in Report Guru</p>
          </div>
          <div className={styles.review}>
            <div className={styles.stars}>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p>Rated 5 stars in BestTech</p>
          </div>
        </section>

        <section className={styles.testimonies}>
          <article className={styles.testimony}>
            <div className={styles.buyer}>
              <img src={coltonImg} alt="Colton Smith's photo" />
              <div>
                <h3>Colton Smith</h3>
                <p className={styles.pink}>Verified Buyer</p>
              </div>
            </div>
            <p>
              "We needed the same printed design as the one we had ordered a
              week prior. Not only did they find the original order, but we also
              received it in time. Excellent! "
            </p>
          </article>
          <article className={styles.testimony}>
            <div className={styles.buyer}>
              <img src={ireneImg} alt="Irene Robert's photo" />
              <div>
                <h3>Irene Roberts</h3>
                <p className={styles.pink}>Verified Buyer</p>
              </div>
            </div>
            <p>
              "Customer service is always excellent and very quick turn around.
              Completely delighted with the simplicity of the purchasre and the
              speed of delivery."
            </p>
          </article>
          <article className={styles.testimony}>
            <div className={styles.buyer}>
              <img src={anneImg} alt="Anne Wallace's photo" />
              <div>
                <h3>Anne Wallace</h3>
                <p className={styles.pink}>Verified Buyer</p>
              </div>
            </div>
            <p>
              "Put an order with this company and can only praise them for the
              very high standard. Will definitely use them again and recommend
              them to everyone!"
            </p>
          </article>
        </section>
      </div>
    </article>
  );
};

export default SocialProof;
