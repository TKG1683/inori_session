import Top from "./01_top";
import About from "./02_about";
import Information from "./03_information";
import Archives from "./04_archive";
import PropTypes from "prop-types";
import styles from "./main.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
        src="/images/img_background.jpg"
        alt=""
      />
      <div id="top" />
      <StickyTop>
        <FadeInSection delay={0.2}>
          <Top />
        </FadeInSection>
      </StickyTop>

      <FadeInSection delay={0.2}>
        <p className={styles.specialDescription}>
          第4回セッション会開催決定！！<br />
          詳細は<Link to="/vol4">特設ページ</Link>をご確認ください！！
        </p>
      </FadeInSection>

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
