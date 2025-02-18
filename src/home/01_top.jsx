import PropTypes from "prop-types";
import styles from "./01_top.module.css";
import common_styles from "./common.module.css";

const Top = ({ className = "" }) => {
  return (
    <div className={[common_styles.columnContainer, className].join(" ")}>
      <div className={styles.topContainerChild} />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
            <a className={styles.title} href="#">水瀬いのりセッション会</a>
          </div>
        <div className={styles.columnContainer}>
          <div className={styles.columnParent}>
            <a className={styles.column} href="#about">about</a>
            <a className={styles.column} href="#information">information</a>
            <a className={styles.column} href="#archive">movies</a>
          </div>
        </div>
    </div>
  );
};

Top.propTypes = {
  className: PropTypes.string,
};

export default Top;
