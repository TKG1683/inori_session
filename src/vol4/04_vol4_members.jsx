import PropTypes from "prop-types";
import styles from "./04_vol4_members.module.css";
import { motion, AnimatePresence } from "framer-motion";
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
  const [direction, setDirection] = useState(1); // 1: Next (右), -1: Back (左)

  const handleNext = () => {
    setDirection(1); // 右にスライド
    setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
  };

  const handleBack = () => {
    setDirection(-1); // 左にスライド
    setCurrentIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length);
  };

  const handleIndicatorClick = (index) => {
    setDirection(0);
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
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
            <AnimatePresence mode="wait">
              <motion.div
                className={styles.descriptionMemberInfo}
                key={currentIndex}
                initial={{ opacity: 0, x: direction * -20 }} // Nextのとき左から, Backのとき右から
                animate={{ opacity: 1, x: 0 }} // 表示時のアニメーション
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                drag="x" // 横方向にドラッグ可能に
                dragPropagation={true} // 子要素にイベント伝播
                dragConstraints={{ left: 0, right: 0 }} // 画面内でのみドラッグ
                onDragEnd={(event, info) => {
                  console.log(info.offset.x);
                  if (info.offset.x < -50) {
                    handleBack();
                  } else if (info.offset.x > 50) {
                    handleNext();
                  }
                }}>
                <div className={styles.iconAndNameAndPart}>
                  <img
                    className={styles.memberIconImage}
                    loading="lazy"
                    alt=""
                    src={members[currentIndex].image}
                  />
                  <div className={styles.descriptionNamePart}>
                    <p className={styles.nameText}>
                      <span className={styles.label}>name：</span>
                      <span className={styles.bold}>{members[currentIndex].name}</span>
                      <br />
                      <span className={styles.label}>part：</span>
                      <span className={styles.bold}>{members[currentIndex].part}</span>
                    </p>
                  </div>
                </div>
                <div className={styles.commentAndFavoriteSongs}>
                  <p className={styles.textTitle}>favorite songs:</p>
                  <p className={styles.textDescription}>
                    {members[currentIndex].favoriteSongs}
                  </p>
                  <div style={{ marginBottom: "1rem" }} />
                  <p className={styles.textTitle}>comment:</p>
                  <p className={styles.textDescription}>{members[currentIndex].comment}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* <div className={styles.indicatorContainer}>
            {members.map((_, index) => (
              <motion.span
                key={index}
                className={styles.indicatorDot}
                onClick={() => handleIndicatorClick(index)}
                animate={{ scale: index === currentIndex ? 1.4 : 1 }} // 選択中のインジケーターを拡大
                transition={{ duration: 0.1 }}
              >
              </motion.span>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

Members.propTypes = {
  className: PropTypes.string,
};

export default Members;
