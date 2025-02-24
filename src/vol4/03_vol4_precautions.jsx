import PropTypes from "prop-types";
import styles from "./03_vol4_precautions.module.css";

const precautions = ({ className = "" }) => {
  return (
    <div className={[styles.precautionContaier, className].join(" ")}>
      <div className={styles.precautionsMain}>
        <div className={styles.rect}>
          <h className={styles.textSubtitle}>注意事項</h>
          <ul className={styles.precautionsList}>
            <li className={styles.precautionsListItem}>
              本イベントは有志による非公式イベントです。
            </li>
            <li className={styles.precautionsListItem}>
              本イベントは非営利で行います。観客の方の参加費は会場費に充てられます。
            </li>
            <li className={styles.precautionsListItem}>
              本イベントはJASRACの楽曲演奏許諾を取って開催します。許諾番号：xxxxxxxxxxxxxxxxxxxx
            </li>
          </ul>
        </div>
        {/* <div className={styles.additionalPrecautions}>
          <div className={styles.additionalPrecautionsContain}>
            <div className={styles.rect1} />
            <b className={styles.b1}>その他注意事項</b>
          </div>
          <img
            className={styles.moreShowButtonIcon}
            loading="lazy"
            alt=""
            src="./more-show-button.svg"
          />
        </div> */}
      </div>
    </div>
  );
};

precautions.propTypes = {
  className: PropTypes.string,
};

export default precautions;
