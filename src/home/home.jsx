import Top from "./01_top";
import About from "./02_about";
import Informations from "./03_information";
import Archives from "./04_archive";
import PropTypes from "prop-types";
import styles from "./home.module.css";

const Home = ({ className = "" }) => {
  return (
    <main className={[styles.subtract, className].join(" ")}>
      <section className={styles.homePageContainer}>
        <img className={styles.topImage} alt="" src="/img_background.jpg" />
        <div style={{ marginBottom: "7rem" }}>
          <Top />
        </div>
        <div style={{ marginBottom: "7rem" }}>
          <About />
        </div>
        <div style={{ marginBottom: "7rem" }}>
          <Informations />
        </div>
      </section>
      {/* <Archives /> */}
    </main>
  );
};

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
