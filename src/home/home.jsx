import Top from "./01_top";
import About from "./02_about";
import Informations from "./03_information";
import Archives from "./04_archive";
import Footer from "./05_footer";
import PropTypes from "prop-types";
import styles from "./home.module.css";

const Home = ({ className = "" }) => {
  return (
    <main className={[styles.subtract, className].join(" ")}>
      <section className={styles.homePageContainer}>
        <div style={{ marginBottom: "7rem" }}>
          <Top />
        </div>
        <div style={{ marginBottom: "7rem" }}>
          <About />
        </div>
        <div style={{ marginBottom: "7rem" }}>
          <Informations />
        </div>
        <div style={{ marginBottom: "7rem" }}>
          <Archives />
        </div>
        <Footer />
      </section>
    </main>
  );
};

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
