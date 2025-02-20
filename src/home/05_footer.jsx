import PropTypes from "prop-types";
import styles from "./05_footer.module.css";

const Archives = ({ className = "" }) => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footerContainerChild} />
      <div className={styles.description}>
        <div>
          <a href="/contact" className={styles.link}>お問い合わせ先</a> <br />
          <a href="/privacy-policy" className={styles.link}>プライバシーポリシー</a> <br />
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

Archives.propTypes = {
  className: PropTypes.string,
};

export default Archives;