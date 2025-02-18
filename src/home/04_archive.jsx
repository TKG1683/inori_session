import PropTypes from "prop-types";
import styles from "./04_archive.module.css";
import common_styles from "./common.module.css";

const youtube_archives = [
  { title: "【第一回】水瀬いのり セッション会@秋葉音楽館【2023/2/18】" , url :"https://www.youtube.com/embed/bZ9m6My9opE"},
  { title: "【第二回】水瀬いのり セッション会@秋葉音楽館【2023/10/29】" , url :"https://www.youtube.com/embed/zdgN6rsMQ7M"},
  { title: "【第三回】水瀬いのり セッション会@スタジオノア学芸大店【2024/5/5】" , url :"https://www.youtube.com/embed/dwq2sD70Cfc"}
]

const youtube_band_covers = [
  { title: "【水瀬いのりセッション会】三月と群青  / 水瀬いのり Band Cover" , url :"https://www.youtube.com/embed/05Fx4CtzOLc"},
  { title: "【水瀬いのりセッション会】約束のアステリズム / 水瀬いのり Band Cover" , url :"https://www.youtube.com/embed/FWNOrHGiMn0"},
  { title: "【水瀬いのりセッション会】アイマイモコ / 水瀬いのり Band Cover" , url :"https://www.youtube.com/embed/cIcLJYRlefk"},
  { title: "【水瀬いのりセッション会】Innocent flower / 水瀬いのり Band Cover" , url :"https://www.youtube.com/embed/CNG7cR9PLzY"},
  { title: "【水瀬いのりセッション会】クータスタ / 水瀬いのり Band Cover" , url :"https://www.youtube.com/embed/XJn0ddjn9cI"},
]


const Archives = ({ className = "" }) => {
  return (
    <div className={common_styles.columnContainer}>
      <div className={common_styles.columnContainerChild} />
      <a className={common_styles.columnTitle}>movies</a>
      
      <a className={styles.subTitle}>archives</a>
      <div className={styles.archiveContainer}>
        {youtube_archives.map((youtube_url) => (
          <div key={youtube_url.url} className={styles.archiveContainerChild}>
            <iframe
              src={youtube_url.url}
              title={youtube_url.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      <a className={styles.subTitle}>band covers</a>
      <div className={styles.archiveContainer}>
        {youtube_band_covers.map((youtube_url) => (
          <div key={youtube_url.url} className={styles.archiveContainerChild}>
            <iframe
              src={youtube_url.url}
              title={youtube_url.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

Archives.propTypes = {
  className: PropTypes.string,
};

export default Archives;