import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./03_information.module.css";
import common_styles from "./common.module.css";

const Informations = ({ className = "" }) => {
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    fetch("/assets/update.css")
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
      <div className={styles.frameChild} />
      <a className={common_styles.columnTitle}>information</a>

      <ul>
        {infoList.slice(0, showAll ? infoList.length : 4).map((info, index) => {
          const [date, content] = info;
          const infoDate = new Date(date);
          const today = new Date();
          const twoWeeksLater = new Date();
          twoWeeksLater.setDate(today.getDate() - 14);

          const isNew = twoWeeksLater <= infoDate;

          return (
            <li key={index} style={{ marginBottom: "10px" }}>
              <div className={styles.infoItem}>
                {date} {isNew && "(new)"} {content}
              </div>
              <img
                className={styles.infoSplitter}
                loading="lazy"
                alt=""
                src="/vector-1.svg"
                style={{ marginTop: "20px" }}
              />
            </li>
          );
        })}
      </ul>
      {infoList.length > 4 && !showAll && (
        <button onClick={handleShowAll} className={styles.showMoreButton}>
          ... show more
        </button>
      )}
      {showAll && (
        <button onClick={handleShowAll} className={styles.showMoreButton}>
          ... show less
        </button>
      )}
    </div>
  );
};

Informations.propTypes = {
  className: PropTypes.string,
};

export default Informations;
