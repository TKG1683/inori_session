import PropTypes from "prop-types";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import styles from "./03_vol4_precautions.module.css";

const Precautions = ({ className = "" }) => {
  // const [showAll, setShowAll] = useState(false);
  // const handleShowAll = () => {
  //   if (showAll) setShowAll(false);
  //   else setShowAll(true);
  // };

  return (
    <div className={[styles.precautionContaier, className].join(" ")}>
      <div className={styles.precautionsMain}>
        <div className={styles.rect}>
          <h className={styles.textSubtitle}>注意事項</h>
            <ul className={styles.precautionsList}>
              <h3 className={styles.precautionsHeading}>📌 イベントについて</h3>
              <li className={styles.precautionsListItem}>本イベントは有志による非公式イベントです。</li>
              <li className={styles.precautionsListItem}>本イベントは非営利で行います。観客の方の参加費は会場費に充てられます。</li>
              <li className={styles.precautionsListItem}>本イベントはJASRACの楽曲演奏許諾を取って開催します。許諾番号は取得次第このページに掲載します。</li>

          <h3 className={styles.precautionsHeading}>📌 お問い合わせについて</h3>
          <li className={styles.precautionsListItem}>会場に関する問い合わせはセッション会の
            <a href="https://x.com/inori_session" className={styles.link}>Xアカウント</a> までご連絡ください。スタジオノア学芸大店への直接のご連絡はお控えください。
          </li>

          <h3 className={styles.precautionsHeading}>📌 ご来場について</h3>
          <li className={styles.precautionsListItem}>混雑を避けるため、開場時間に合わせてお越しいただき、会場付近での待機はお控えください。（会場は他の利用者もいる施設です。）</li>

          {/* こっから元はアニメーションだったやつ*/}
          <h3 className={styles.precautionsHeading}>📌 撮影・録画について</h3>
              <li className={styles.precautionsListItem}>
                本イベントでは撮影・録画を行い、後日YouTubeにて公開される場合があります。観客の皆さんは可能な限りボカシを入れますが、ご了承ください。
              </li>

              <h3 className={styles.precautionsHeading}>📌 演奏内容について</h3>
              <li className={styles.precautionsListItem}>
                演奏曲は事前にセットリストを組んでおります。リクエストにはお応えできません。演奏メンバーの募集は終了しておりますので、ご了承ください。
              </li>

              <h3 className={styles.precautionsHeading}>📌 観客マナーについて</h3>
              <li className={styles.precautionsListItem}>
                他の観客や演奏者の迷惑になる行為はお控えください。迷惑行為が確認された場合、主催者は退場をお願いすることがあります。また、その場合の返金は致しかねます。
              </li>
              <li className={styles.precautionsListItem}>
                開場内のスペースは限られています。大きな荷物は持ち込まないようお願いします。
              </li>

              <h3 className={styles.precautionsHeading}>📌 飲食・喫煙について</h3>
              <li className={styles.precautionsListItem}>
                会場内での飲食は禁止です。飲食はスタジオ外の決められた場所でお願いします。また、ゴミは必ず持ち帰ってください。
              </li>
              <li className={styles.precautionsListItem}>
                酒気を帯びた方の入場は禁止です。また、会場内での飲酒も禁止です。
              </li>
              <li className={styles.precautionsListItem}>
                会場内は火気厳禁です。火の使用は絶対にお控えください。
              </li>
              <li className={styles.precautionsListItem}>
                会場内は禁煙です。喫煙はスタジオの喫煙所をご利用ください。
              </li>
          
        {/* <AnimatePresence>
          {showAll && (
            <section>
              <motion.h3 className={styles.precautionsHeading} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>📌 撮影・録画について</motion.h3>
              <motion.li className={styles.precautionsListItem} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.5 }}>
                本イベントでは撮影・録画を行い、後日YouTubeにて公開される場合があります。観客の皆さんは可能な限りボカシを入れますが、ご了承ください。
              </motion.li>

              <motion.h3 className={styles.precautionsHeading} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>📌 演奏内容について</motion.h3>
              <motion.li className={styles.precautionsListItem} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.5 }}>
                演奏曲は事前にセットリストを組んでおります。リクエストにはお応えできません。演奏メンバーの募集は終了しておりますので、ご了承ください。
              </motion.li>

              <motion.h3 className={styles.precautionsHeading} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>📌 観客のマナーについて</motion.h3>
              <motion.li className={styles.precautionsListItem} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.5 }}>
                他の観客や演奏者の迷惑になる行為はお控えください。迷惑行為が確認された場合、主催者は退場をお願いすることがあります。また、その場合の返金は致しかねます。
              </motion.li>

              <motion.h3 className={styles.precautionsHeading} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>📌 飲食・喫煙について</motion.h3>
              <motion.li className={styles.precautionsListItem} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.5 }}>
                会場内での飲食は禁止です。飲食はスタジオ外の決められた場所でお願いします。また、ゴミは必ず持ち帰ってください。
              </motion.li>
              <motion.li className={styles.precautionsListItem} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.5 }}>
                酒気を帯びた方の入場は禁止です。また、会場内での飲酒も禁止です。
              </motion.li>
              <motion.li className={styles.precautionsListItem} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.5 }}>
                会場内は火気厳禁です。火の使用は絶対にお控えください。
              </motion.li>
              <motion.li className={styles.precautionsListItem} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.5 }}>
                会場内は禁煙です。喫煙はスタジオの喫煙所をご利用ください。
              </motion.li>
            </section>
          )}
        </AnimatePresence> */}
        </ul>
          {/* <button onClick={handleShowAll} className={styles.showMoreButton}>
            {showAll ? "... show less" : "... show more"}
          </button> */}
        </div>
      </div>
    </div>
  );
};

Precautions.propTypes = {
  className: PropTypes.string,
};

export default Precautions;
