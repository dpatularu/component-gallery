import { useRef } from "react";
import styles from "./Accordion.module.scss";
import arrow from "./images/icon-arrow-down.svg";
import desktopIllustration from "./images/illustration-woman-online-desktop.svg";
import box from "./images/illustration-box-desktop.svg";

const Accordion = () => {
  return (
    <div className={styles.body}>
      <article>
        <div className={styles.imageContainer}>
          <img
            className={styles.desktopIllustration}
            src={desktopIllustration}
            alt="Woman on Computer"
          />
        </div>
        <div className={styles.textContainer}>
          <h3>FAQ</h3>
          <Slider header="How many team members can I invite?">
            You can invite up to 2 additional users on the Free plan. There is
            no limit on team members for the Premium plan.
          </Slider>
          <Slider header="What is the maximum upload size?">
            No more than 2GB. All files in your account must fit your allotted
            storage space.
          </Slider>
          <Slider header="How do I reset my password?">
            Click “Forgot password” from the login page or “Change password”
            from your profile page. A reset link will be emailed to you.
          </Slider>
          <Slider header="Can I cancel my subscription?">
            Yes! Send us a message and we’ll process your request no questions
            asked.
          </Slider>
          <Slider header="Do you provide additional support?">
            Chat and email support is available 24/7. Phone lines are open
            during normal business hours.
          </Slider>
        </div>
      </article>
    </div>
  );
};

const Slider = ({ header, children }) => {
  const slider = useRef(null);
  const title = useRef(null);
  const flippableArrow = useRef(null);
  const toggleSlide = () => {
    slider.current.classList.toggle(`${styles.slideDown}`);
    flippableArrow.current.classList.toggle(`${styles.flip}`);
    title.current.classList.toggle(`${styles.dark}`);
  };
  return (
    <section className={styles.accordion}>
      <div className={styles.title} onClick={toggleSlide}>
        <h4 ref={title}>{header}</h4>
        <img
          ref={flippableArrow}
          className={styles.arrow}
          src={arrow}
          alt="Arrow pointing down"
        />
      </div>
      <div ref={slider} className={styles.slideUp}>
        <p>{children}</p>
      </div>
    </section>
  );
};

export default Accordion;
