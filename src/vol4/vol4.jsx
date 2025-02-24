import Top from "./01_vol4_top";
import EventInfo from "./02_vol4_event_info";
import Precaution from "./03_vol4_precautions";
import Members from "./04_vol4_members";
import styles from "./vol4.module.css";
import { Link } from "react-router-dom";
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

const Vol4 = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.vol4Container}>
      <div id="top" />
      <header className={styles.topbar}>
        <a className={styles.topbarButton} onClick={() => scrollToSection("event_info")}>event info</a>
        <a className={styles.topbarButton} onClick={() => scrollToSection("members")}>members</a>
        <Link to="/" className={styles.topbarButton}>home</Link>
      </header>
      <FadeInSection delay={0.1}>
      <Top />
      </FadeInSection>
      <FadeInSection delay={0.3}>
      <div id="event_info" />
      <EventInfo />
      <Precaution />
      </FadeInSection>
      <FadeInSection delay={0.2}>
      <div id="members" />
      <Members />
      </FadeInSection>
    </div>
  );
};

export default Vol4;
