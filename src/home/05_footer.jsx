import PropTypes from "prop-types";
import styles from "./05_footer.module.css";
import React, { useState } from "react";

const Footer = ({ className = "" }) => {
  const [isInquiryPopupOpen, setIsInquiryPopupOpen] = useState(false);
  const [isPrivacyPolicyPopupOpen, setIsPrivacyPolicyPopupOpen] = useState(false);

  const openInquiryPopup = () => {
    setIsInquiryPopupOpen(true);
  };
  const closeInquiryPopup = () => {
    setIsInquiryPopupOpen(false);
  };

  const openPrivacyPolicyPopup = () => {
    setIsPrivacyPolicyPopupOpen(true);
  }
  const closePrivacyPolicyPopup = () => {
    setIsPrivacyPolicyPopupOpen(false);
  }

  const isPopupOpened = isInquiryPopupOpen || isPrivacyPolicyPopupOpen;

  return (
    <div className={styles.footerContainer}>
      {isPopupOpened && (<div onClick={() => { closeInquiryPopup(); closePrivacyPolicyPopup(); }} className={styles.closeLayer}/>)}
      <footer className={styles.footerContainerChild} />
      <div className={styles.description}>
        <div>
          <a className={styles.footerButton} onClick={openInquiryPopup}>お問い合わせ先</a> <br />
          <a className={styles.footerButton} onClick={openPrivacyPolicyPopup}>プライバシーポリシー</a> <br />
        </div>
        <div className={`${styles.popupContainer} ${isInquiryPopupOpen ? styles.show : styles.hide}`}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold mb-4">お問い合わせ先</h2>
            <p className="mb-4">
              これはポップアップの内容です。ここに任意のコンテンツを追加できます。
            </p>
          </div>
        </div>

        <div className={`${styles.popupContainer} ${isPrivacyPolicyPopupOpen ? styles.show : styles.hide}`}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold mb-4">プライバシーポリシー</h2>
            <p className="mb-4">
              これはポップアップの内容です。ここに任意のコンテンツを追加できます。
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "1rem" }} />
        声優 水瀬いのりさんの⾮公式ファンサイトです。<br />
        水瀬いのりさん および アクセルワン株式会社や関係者とは⼀切関係ありません。<br />
        当サイトで使⽤している画像の著作権・肖像権等は各権利者に帰属いたします。<br />
        当サイトのコンテンツの無断転載・無断複製を禁じます。<br />
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;