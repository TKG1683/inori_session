import PropTypes from "prop-types";
import styles from "./04_vol4_members.module.css";

const Members = ({ className = "" }) => {
  return (
    <div className={[styles.memberContainer, className].join(" ")}>
      <div className={styles.memberInfo}>
        <img
          className={styles.fukidashi032Icon}
          loading="lazy"
          alt=""
          src="./images/fukidashi.png"
        />
        <h3 className={styles.members1}>members</h3>
      </div>
      <div className={styles.memberProfiles}>
        <div className={styles.navigationButtons}>
          <div className={styles.arrowBackWrapper}>
            <img
              className={styles.arrowBackIcon}
              loading="lazy"
              alt=""
              src="./images/arrow-back.svg"
            />
          </div>
          <div className={styles.profileContainer}>
            <div className={styles.profileCard}>
              <div className={styles.profileContent}>
                <div className={styles.memberImageContainer}>
                  <img
                    className={styles.tkgImgIcon}
                    loading="lazy"
                    alt=""
                    src="./images/member_icon/tkg-icon.png"
                  />
                </div>
                <div className={styles.div}>
                  <p className={styles.nametkg}>
                    <span>name：</span>
                    <span className={styles.tkg}>TKG</span>
                  </p>
                  <p className={styles.nametkg}>
                    <span>part：</span>
                    <span className={styles.tkg}>Drums</span>
                    <span className={styles.span}>{`  `}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.div1}>
              <p className={styles.nametkg}>favorite songs:</p>
              <p className={styles.nametkg}>
                　旅の途中、三月と群青、Well Wishing Word
              </p>
              <p className={styles.nametkg}>&nbsp;</p>
              <p className={styles.nametkg}>commnet:</p>
              <p className={styles.nametkg}>　まさかのドラムワンマン運転！</p>
              <p className={styles.nametkg}>　がんばります…！</p>
            </div>
          </div>
          <div className={styles.arrowBackWrapper}>
            <img
              className={styles.arrowBackIcon}
              loading="lazy"
              alt=""
              src="./images/arrow-next.svg"
            />
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
