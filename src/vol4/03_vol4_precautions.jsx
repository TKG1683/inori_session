import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./03_vol4_precautions.module.css";

const Precautions = ({ className = "" }) => {
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    if (showAll) setShowAll(false);
    else setShowAll(true);
  };

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
              本イベントはJASRACの楽曲演奏許諾を取って開催します。許諾番号は取得次第このページに掲載します。
            </li>
            <li className={styles.precautionsListItem}>
              会場に関する問い合わせはセッション会の
              <a href="https://x.com/inori_session" className={styles.link}>Xアカウント</a>
              までご連絡ください。スタジオノア学芸大店への直接のご連絡はお控えください。
            </li>
            <AnimatePresence>
            {/* アニメーション付きで追加の情報を表示 */}
              {showAll && (
                <section>
                  <motion.li
                    className={styles.precautionsListItem}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    layout
                  >
                    本イベントでは撮影、録画を行います。撮影、録画された映像は後日YouTubeにて公開される場合があります。観客の皆さんは可能な限りボカシを入れますが、ご了承ください。
                  </motion.li>
                  <motion.li
                    className={styles.precautionsListItem}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    layout
                  >
                    観客の皆さんはイベント中、他の観客や演奏者の迷惑になる行為を控えてください。迷惑行為があった場合、主催者は退場をお願いすることがあります。
                  </motion.li>
                  <motion.li
                    className={styles.precautionsListItem}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    layout
                  >
                    撮影、録画したデータは主催者への提供をお願いします。また、録画を無断でSNS等へ公開することはお控えください。
                  </motion.li>
                  <motion.li
                    className={styles.precautionsListItem}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    layout
                  >
                    会場内での飲食はお控えください。飲食はスタジオ外の決められた場所でお願いします。また、ゴミは必ず持ち帰るようにお願いします。
                  </motion.li>
                  <motion.li
                    className={styles.precautionsListItem}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    layout
                  >
                    酒気を帯びた方の入場はお断りします。また、会場内での飲酒は禁止です。
                  </motion.li>
                  <motion.li
                    className={styles.precautionsListItem}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    layout
                  >
                    会場内は火気厳禁です。火気の使用は絶対にお控えください。
                  </motion.li>
                  <motion.li
                    className={styles.precautionsListItem}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    layout
                  >
                    会場内は禁煙です。喫煙される方はスタジオの喫煙所でお願いします。
                  </motion.li>
                  <motion.li
                    className={styles.precautionsListItem}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    layout
                  >
                    混雑を避けるため、会場付近での待機はお控えください。可能な限り開場時間に合わせてお越しください。（会場は本イベント以外の方も利用する施設です。）
                  </motion.li>
              </section>
              )}
            </AnimatePresence>
          </ul>
          <button onClick={handleShowAll} className={styles.showMoreButton}>
            {showAll ? "... show less" : "... show more"}
          </button>
        </div>
      </div>
    </div>
  );
};

Precautions.propTypes = {
  className: PropTypes.string,
};

export default Precautions;
