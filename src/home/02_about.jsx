import PropTypes from "prop-types";
import styles from "./02_about.module.css";
import common_styles from "./common.module.css";

const About = ({ className = "" }) => {
  return (
    <div className={common_styles.columnContainer}>
      <div className={common_styles.columnContainerChild} />
      <a className={common_styles.columnTitle}>about</a>
      <p className={styles.description}>
        水瀬いのりセッション会は、楽器演奏やライブセッションで水瀬いのりさんを応援する非公式コミュニティーです。
        このサイトでは、次回セッションライブ情報を含むセッション会からのお知らせや、セッション会で演奏した動画のアーカイブを公開しています。
      </p>
    </div>
  );
};

About.propTypes = {
  className: PropTypes.string,
};

export default About;
