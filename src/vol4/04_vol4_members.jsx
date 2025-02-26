import PropTypes from "prop-types";
import styles from "./04_vol4_members.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation'; // スタイルをインポート
import 'swiper/css/pagination'; // スタイルをインポート
import { useState, useEffect } from "react";


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

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <div className={styles.swiperContainer}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={!isMobile}
            loop={true}
            pagination={{ clickable: true }}    
            className={styles.swiperContainer}
          >
            {members.map((member) => (
              <SwiperSlide className={styles.slide}>
                <div className={styles.descriptionMemberInfo}>
                  <div className={styles.iconAndNameAndPart}>
                    <img
                      className={styles.memberIconImage}
                      loading="lazy"
                      alt=""
                      src={member.image}
                    />
                    <div className={styles.descriptionNamePart}>
                      <p className={styles.nameText}>
                        <span className={styles.label}>name：</span>
                        <span className={styles.bold}>{member.name}</span>
                        <br />
                        <span className={styles.label}>part：</span>
                        <span className={styles.bold}>{member.part}</span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.commentAndFavoriteSongs}>
                    <p className={styles.textTitle}>favorite songs:</p>
                    <p className={styles.textDescription}>{member.favoriteSongs}</p>
                    <div style={{ marginBottom: "1rem" }} />
                    <p className={styles.textTitle}>comment:</p>
                    <p className={styles.textDescription}>{member.comment}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
