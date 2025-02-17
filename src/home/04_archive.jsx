import PropTypes from "prop-types";
import styles from "./04_archive.module.css";

const Archives = ({ className = "" }) => {
  return (
    <section className={[styles.archiveContainer, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <h2 className={styles.archive}>archive</h2>
        <div className={styles.sessionContainer}>
          <div className={styles.div}>
            2023/02/18　第一回セッション会@秋葉音楽館
          </div>
        </div>
      </div>
      <div className={styles.policyContainer}>
        <footer className={styles.policyContainerChild} />
        <div className={styles.div1}>ポリシー等 注意事項</div>
      </div>
    </section>
  );
};

Archives.propTypes = {
  className: PropTypes.string,
};

export default Archives;