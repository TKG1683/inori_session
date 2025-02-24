import PropTypes from "prop-types";
import styles from "./04_vol4_members.module.css";
import { useState } from "react";

const Members = ({ className = "" }) => {
  const members = [
    {
      name: "TKG",
      part: "Drums",
      favoriteSongs: "旅の途中、三月と群青、Well Wishing Word",
      comment: "まさかのドラムワンマン運転！がんばります…！",
      image: "./images/member_icon/tkg-icon.jpg",
    },
    {
      name: "Gensan",
      part: "Bass, Guitar",
      favoriteSongs: "REAL-EYES、約束のアステリズム、brave climber",
      comment: "いのりの涙を受け止めるために、全力で演奏します。",
      image: "./images/member_icon/gensan-icon.jpg",
    },
    {
      name: "親フラ",
      part: "Guitar",
      favoriteSongs: "クリスタライズ、Kitty Cat Adventure",
      comment: "速弾きします。",
      image: "./images/member_icon/ParentFlash-icon.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length);
  };

  return (
    <div className={[styles.membersContainer, className].join(" ")}>
      <div className={styles.membersChild}>
        <div className={styles.membersSubTitle}>
          <img
            className={styles.fukidashiImage}
            loading="lazy"
            alt=""
            src="./images/fukidashi.png"
          />
          <div className={styles.membersText}>members</div>
        </div>

        <div className={styles.membersMain}>
          <img className={styles.kurariCamvasImage} loading="lazy" alt="" src="./images/kurari_canvas.png" />
          <div className={styles.navigationButtons}>
            <img
              className={styles.arrowBackIcon}
              loading="lazy"
              alt=""
              src="./images/arrow-back.svg"
              onClick={handleBack}
            />
            <img
              className={styles.arrowNextIcon}
              loading="lazy"
              alt=""
              src="./images/arrow-next.svg"
              onClick={handleNext}
            />
            <div className={styles.descriptionMemberInfo}>
              <div className={styles.profileContainer}>
                <div className={styles.profileCard}>
                  <div className={styles.profileContent}>
                    <div className={styles.memberImageContainer}>
                      <img
                        className={styles.tkgImgIcon}
                        loading="lazy"
                        alt=""
                        src={members[currentIndex].image}
                      />
                    </div>
                    <div className={styles.div}></div>
                      <p className={styles.nametkg}>
                        <span>name：</span>
                        <span className={styles.tkg}>{members[currentIndex].name}</span>
                      </p>
                      <p className={styles.nametkg}>
                        <span>part：</span>
                        <span className={styles.tkg}>{members[currentIndex].part}</span>
                        <span className={styles.span}>{`  `}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.div1}>
                  <p className={styles.nametkg}>favorite songs:</p>
                  <p className={styles.nametkg}>
                    {members[currentIndex].favoriteSongs}
                  </p>
                  <p className={styles.nametkg}>&nbsp;</p>
                  <p className={styles.nametkg}>comment:</p>
                  <p className={styles.nametkg}>{members[currentIndex].comment}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

Members.propTypes = {
  className: PropTypes.string,
};

export default Members;
