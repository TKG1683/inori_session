import PropTypes from "prop-types";
import styles from "./footer.module.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Footer = ({ className = "" }) => {
  const [isInquiryPopupOpen, setIsInquiryPopupOpen] = useState(false);
  const openInquiryPopup = () => {
    setIsInquiryPopupOpen(true);
  };
  const closeInquiryPopup = () => {
    setIsInquiryPopupOpen(false);
  };

  const popupVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsTopButtonVisible(window.scrollY > 50); // 50px以上スクロールしたら表示
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer>
      <div className={styles.footerContainer}>
        {isInquiryPopupOpen && (<div onClick={() => { closeInquiryPopup(); }} className={styles.closeLayer} />)}
        {isInquiryPopupOpen && (
          <motion.div
            className={styles.popupContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={popupVariants}
            onClick={closeInquiryPopup}
          >
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
              <div onClick={closeInquiryPopup} className={styles.closeButton}>×</div>
              <div className={styles.popupTitle}>当サイトに関するお問い合わせ</div>
              <div className={styles.popupDescription}>
                当サイトに関するお問い合わせについては、Xアカウント: <a href="https://x.com/inori_session" target="_blank" rel="noopener noreferrer">@inori_session</a> までお願いいたします。
              </div>
            </div>
          </motion.div>
        )}
        {/* ------------ footer main ----------------- */}
          <div className={styles.buttonContainer}>
            <a className={styles.footerButton} onClick={openInquiryPopup}>当サイトに関するお問い合わせはこちら</a> <br />
          </div>
        <div className={styles.description}>
          <div style={{ marginBottom: "1rem" }}>
            声優 水瀬いのりさんの⾮公式ファンサイトです。<br />
            水瀬いのりさん および アクセルワン株式会社や関係者とは⼀切関係ありません。<br />
            当サイトで使⽤している画像の著作権・肖像権等は各権利者に帰属いたします。<br />
            当サイトのコンテンツの無断転載・無断複製を禁じます。<br />
          </div>

          <div className={styles.imageContainer}>
            <a href="https://x.com/inori_session" target="_blank" rel="noopener noreferrer">
              <img src="/images/icon-x.png" alt="X Icon" className={styles.imageForX} />
            </a>
          </div>
        </div>
      </div>
      {isTopButtonVisible && (
        <motion.img
          className={styles.topButton}
          loading="lazy"
          alt="Top Button"
          src="/images/top.svg"
          onClick={() => scrollToSection("top")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;