import PropTypes from "prop-types";
import styles from "./01_vol4_top.module.css";

const Top = ({ className = "" }) => {
  const getCountdownText = () => {
    const today = new Date();
    const eventDate = new Date("2025-08-10");
    const timeDifference = eventDate - today;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference > 0)
    {
      return `開催まであと ${daysDifference} 日！`;
    }
    else if (daysDifference === 0)
    {
      return "本日開催！";
    }
    else
    {
      return "イベントは終了しました";
    }
  };

  return (
    <section className={[styles.topContainer, className].join(" ")}>
      <div className={styles.vol4Desktop1Wrapper}>
        <img
          className={styles.vol4DesktopImage}
          loading="lazy"
          alt=""
          src="./images/vol4_desktop.png"
        />
      </div>
      <h3 className={styles.countdownText}>{getCountdownText()}</h3>
    </section>
  );
};

Top.propTypes = {
  className: PropTypes.string,
};

export default Top;
