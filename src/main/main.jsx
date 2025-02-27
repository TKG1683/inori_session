import Top from "./01_top";
import About from "./02_about";
import Information from "./03_information";
import Archives from "./04_archive";
import PropTypes from "prop-types";
import styles from "./main.module.css";
import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const StickyTop = ({ children }) => {
  return (
    <div style={{
      position: "sticky",
      top: "-140px",
      zIndex: 100,
    }}>
      {children}
    </div>
  );
};

const Home = ({ className = "" }) => {
  return (
    <main className={[styles.homePageContainer, className].join(" ")}>
      <img
        className={styles.backgroundImage}
        src="/inori_session/images/img_background.jpg"
        alt=""
      />
      <div id="top" />
      <StickyTop>
        <FadeInSection delay={0.2}>
          <Top />
        </FadeInSection>
      </StickyTop>
      <div id="about" />
      <div style={{ marginBottom: "7rem" }} />
      <FadeInSection delay={0.5}>
        <About />
        <div id="information" />
        <div style={{ marginBottom: "7rem" }} />
      </FadeInSection>
      <FadeInSection delay={0.8}>
        <Information />
        <div id="movies" />
        <div style={{ marginBottom: "7rem" }} />
      </FadeInSection>
      <FadeInSection>
        <Archives ref="movies" />
      </FadeInSection>
    </main>
  );
};

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
