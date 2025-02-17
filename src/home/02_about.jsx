import PropTypes from "prop-types";
import styles from "./02_about.module.css";
import common_styles from "./common.module.css";

const About = ({ className = "" }) => {
  return (
    <div className={common_styles.columnContainer}>
      <div className={styles.aboutContainerChild} />
      <a className={common_styles.columnTitle}>about</a>
      <p className={styles.description}>
        Welcome to our session! Here, we discuss various topics and share insights to help you grow and learn. Join us for an engaging and informative experience.
      </p>
    </div>
  );
};

About.propTypes = {
  className: PropTypes.string,
};

export default About;
