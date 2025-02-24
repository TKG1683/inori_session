import Top from "./01_vol4_top";
import EventInfo from "./02_vol4_event_info";
import Precaution from "./03_vol4_precautions";
import Members from "./04_vol4_members";
import styles from "./vol4.module.css";


const vol4 = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.vol4Container}>
      <header className={styles.topbar}>
        <a className={styles.topbarButton} onClick={() => scrollToSection("event_info")}>event info</a>
        <a className={styles.topbarButton} onClick={() => scrollToSection("members")}>members</a>
        <a className={styles.topbarButton} onClick={() => scrollToSection("home")}>home</a>
      </header>
      <Top />
      <div id="event_info" />
      <EventInfo />
      <Precaution />
      <Members />
      
    </div>
  );
};

export default vol4;
