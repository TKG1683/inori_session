import Top from "./01_top";
import About from "./02_about";
import Informations from "./03_information";
import Archives from "./04_archive";
import Footer from "./05_footer";
import PropTypes from "prop-types";
import styles from "./home.module.css";
import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const Home = ({ className = "" }) => {
  return (
    <main className={[styles.subtract, className].join(" ")}>
      <section className={styles.homePageContainer}>
        <FadeInSection delay={0.2}>
          <Top />
          <div style={{ marginBottom: "7rem" }} />
        </FadeInSection>
        <FadeInSection delay={0.5}>
          <About />
          <div style={{ marginBottom: "7rem" }} />
        </FadeInSection>
        <FadeInSection delay={0.8}>
          <Informations />
          <div style={{marginBottom: "7rem"}} />
        </FadeInSection>
        <FadeInSection>
          <Archives />
          <div style={{marginBottom: "7rem"}} />
        </FadeInSection>
        <Footer />
      </section>
    </main>
  );
};

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
