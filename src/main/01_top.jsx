import PropTypes from "prop-types";
import styles from "./01_top.module.css";
import common_styles from "./common.module.css";
import { useMediaQuery } from 'react-responsive';

const Top = ({ className = "" }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={[common_styles.columnContainer, className].join(" ")}>
      <div className={styles.topContainerChild} />
      <div className={styles.rectangleParent}>
        <a className={styles.title} href="#">
          {isMobile ? <>水瀬いのり<br />&ensp;&ensp;セッション会</> : <>水瀬いのりセッション会</>}
        </a>
      </div>
      {!isMobile && (
        <div className={styles.columnContainer}>
          <div className={styles.columnParent}>
            <a className={styles.column} onClick={() => scrollToSection("about")}>about</a>
            <a className={styles.column} onClick={() => scrollToSection("information")}>information</a>
            <a className={styles.column} onClick={() => scrollToSection("movies")}>movies</a>
          </div>
        </div>
      )}
    </div>
  );
};

Top.propTypes = {
  className: PropTypes.string,
};

export default Top;
