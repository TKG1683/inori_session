import PropTypes from "prop-types";
import styles from "./04_vol4_members.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation'; // スタイルをインポート
import 'swiper/css/pagination'; // スタイルをインポート
import { useState, useEffect } from "react";
import { ins } from "framer-motion/client";


const Members = ({ className = "" }) => {
  const members = [
    {
      name: "ぽてまるこ",
      part: "Vocal",
      favoriteSongs: "While We Walk👣、パレオトピア🌈、Innocent flower🌼",
      comment: "今回で3回目の出演になります！大好きないのりちゃんの曲を全力でお届けしますので、楽しんでいただけると嬉しいです🌟",
      image: "./images/member_icon/potemaruko-icon.jpg",
      X:"https://x.com/mooooooooim",
      instagram:"",
      youtube:"",
    },
    {
      name: "なの",
      part: "Vocal",
      favoriteSongs: "僕らだけの鼓動",
      comment: "みんなで楽しみましょ〜🎀",
      image: "./images/member_icon/nano-icon.jpg",
      X:"https://x.com/nano_ribbon327",
      instagram:"",
      youtube:"",
    },
    {
      name: "あおい",
      part: "Vocal",
      favoriteSongs: "Innocent flower、八月のスーベニア、星屑のコントレイル",
      comment: "だいすきな歌で、ボーカルという形で参加させて頂けてとても嬉しいです！きっと素敵なイベントになるのでぜひ見に来てください🍀",
      image: "./images/member_icon/aoi-icon.jpg",
      X:"https://x.com/aoi_0922__",
      instagram:"",
      youtube:"",
    },
    {
      name: "Gensan",
      part: "Bass, Guitar",
      favoriteSongs: "REAL-EYES、約束のアステリズム、brave climber",
      comment: "また開催できて嬉しい！頑張ります！",
      image: "./images/member_icon/gensan-icon.jpg",
      X:"https://x.com/bassbro1130",
      instagram:"",
      youtube:"https://www.youtube.com/@gensanjb9223",
    },
    {
      name: "森山",
      part: "Bass",
      favoriteSongs: "Shoo-Bee-Doo-Wap-Wap!、フラーグム、Well wishing word",
      comment: "いのりさん曲難しいです。頑張ります。",
      image: "./images/member_icon/moriyama-icon.jpg",
      X:"https://x.com/xmakisex",
      instagram:"",
      youtube:"",
    },
    {
      name: "村田",
      part: "Bass, Guitar",
      favoriteSongs: "ココロソマリ、glow、Milky Star",
      comment: "",
      image: "./images/member_icon/murata-icon.jpg",
      X:"https://x.com/Kuruma_yaee",
      instagram:"",
      youtube:"",
    },
    {
      name: "K.K",
      part: "Bass, Keyboard",
      favoriteSongs: "運命の赤い糸、茜色ノスタルジア、Starry Wish",
      comment: "今回も面白くなりそうです！見に来てください！",
      image: "./images/member_icon/kk-icon.jpg",
      X:"",
      instagram:"",
      youtube:"",
    },
    {
      name: "親フラ",
      part: "Guitar",
      favoriteSongs: "クリスタライズ、パレオトピア、identity",
      comment: "ボーカルを邪魔しない程度に音数詰めて速弾きします！",
      image: "./images/member_icon/ParentFlash-icon.jpg",
      X:"https://x.com/ParentFlash",
      instagram:"",
      youtube:"",
    },
    {
      name: "さかじょー",
      part: "Guitar",
      favoriteSongs: "三月と群青、クータスタ、スクラップアート",
      comment: "やったるぞい‼️",
      image: "./images/member_icon/sakajo-icon.jpg",
      X:"https://x.com/sgkshasaikodaze",
      instagram:"",
      youtube:"https://www.youtube.com/@sakajomusic",
    },
    {
      name: "みや",
      part: "Guitar",
      favoriteSongs: "水彩メモリー、今を僕らしく生きてくために、コイセヨオトメ",
      comment: "顔がカッコよくない分演奏でカッコつけます！よろしくお願いします！",
      image: "./images/member_icon/miya-icon.jpg",
      X:"",
      instagram:"",
      youtube:"",
    },
    {
      name: "Hihara",
      part: "Guitar",
      favoriteSongs: "My Graffiti、HELLO HORIZON、フラーグム",
      comment: "短期ビザ町民です。魔改造ドラちゃんを楽しみにしておいて下さい。",
      image: "./images/member_icon/Hihara-icon.jpg",
      X:"https://x.com/hihara_gt_dgw",
      instagram:"",
      youtube:"",
    },
    {
      name: "くら",
      part: "Guitar",
      favoriteSongs: "glow、Starlight Museum、harmony ribbon、全部！",
      comment: "٩( ᐛ )و",
      image: "./images/member_icon/kura-icon.jpg",
      X:"",
      instagram:"",
      youtube:"",
    },
    {
      name: "TKG",
      part: "Drums",
      favoriteSongs: "旅の途中、三月と群青、Well Wishing Word",
      comment: "いのりさんのライブとはまた一味違ったドラムアレンジでお届けします！お楽しみに～😎",
      image: "./images/member_icon/tkg-icon.jpg",
      X:"https://x.com/azucat1683",
      instagram:"",
      youtube:"https://www.youtube.com/@tekejinn",
    },
    
    {
      name: "ちょかい",
      part: "Keyboard",
      favoriteSongs: "約束のアステリズム、Starry Wish、アイマイモコ",
      comment: "鍵盤たくさん使います!!",
      image: "./images/member_icon/chokai-icon.jpg",
      X:"https://x.com/chokaisync",
      instagram:"",
      youtube:"",
    },
  ];

  const createMemberSnsIcon = (member) => {
    return (
      <div className={styles.snsIcons}>
        {member.X !== "" && (
          <a href={member.X} target="_blank" rel="noopener noreferrer" className={styles.forX}>
            <img src="/images/icon-x.png" alt="" className={styles.snsIcon} />
          </a>
        )}
        {member.instagram !== "" && (
          <a href={member.instagram} target="_blank" rel="noopener noreferrer">
            <img src="/images/icon-ig.png" alt="" className={styles.snsIcon} />
          </a>
        )}
        {member.youtube !== "" && (
          <a href={member.youtube} target="_blank" rel="noopener noreferrer">
            <img src="/images/icon-yt.png" alt="" className={styles.snsIcon} />
          </a>
        )}
      </div>
    );
  };

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
                    <div>
                      {createMemberSnsIcon(member)}
                    </div>
                  </div>
                  <div className={styles.commentAndFavoriteSongs}>
                    <p className={styles.textTitle}>favorite songs:</p>
                    <p className={styles.textDescription}>{member.favoriteSongs}</p>
                    <div style={{ marginBottom: "0.1rem" }} />
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
