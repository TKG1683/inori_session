import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./03_information.module.css";
import common_styles from "./common.module.css";

const Informations = ({ className = "" }) => {
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    fetch("/inori_session/assets/update.css")
      .then((response) => response.text())
      .then((data) => {
        const infoArray = data
          .split("\n")
          .map((line) => line.split(",").filter((item) => item.trim() !== ""));
        setInfoList(infoArray);
      });
  }, []);

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    if (showAll) setShowAll(false);
    else setShowAll(true);
  };

  return (
    <div className={[common_styles.columnContainer, className].join(" ")}>
      <div className={common_styles.columnContainerChild} />
      <a className={common_styles.columnTitle}>information</a>
      <div className={styles.informationContainer}>
        <div className={styles.informationContainerChild}>
          <div className={styles.infoListContainer}>
            {infoList.slice(0, showAll ? infoList.length : 4).map((info, index) => {
              const [date, content] = info;
              const infoDate = new Date(date);
              const today = new Date();
              const twoWeeksLater = new Date();
              twoWeeksLater.setDate(today.getDate() - 14);
              
              const isNew = twoWeeksLater <= infoDate;
              
              return (
                <div style={{ marginBottom: "calc(var(--scaler) * 3rem)" }}>
                  <div className={styles.infoItem}>
                    {date} {isNew && "(new)"} {content}
                  </div>
                  <img
                    className={styles.infoSplitter}
                    loading="lazy"
                    alt=""
                    src="/inori_session/vector-1.svg"
                    style={{ marginTop: "calc(var(--scaler) * 1rem)" }}
                  />
                </div>
              );
            })}
            <button onClick={handleShowAll} className={styles.showMoreButton}>
              {showAll ? "... show less" : "... show more"}
            </button>
          </div>

        </div>
        <div className={styles.informationContainerChild}>
            <a class="twitter-timeline" data-width="300" data-height="400" href="https://twitter.com/inori_session?ref_src=twsrc%5Etfw"></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
    </div>
  );
};

Informations.propTypes = {
  className: PropTypes.string,
};

export default Informations;
