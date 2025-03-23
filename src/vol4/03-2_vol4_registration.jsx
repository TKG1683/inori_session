import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./03-2_vol4_registration.module.css";

const Registration = ({ className = "" }) => {
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    if (showAll) setShowAll(false);
    else setShowAll(true);
  };

  return (
    <div className={[styles.registrationContaier, className].join(" ")}>
      <div className={styles.registrationMain}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyKtmDt_z5hN7jEvqFxAyNYiKGbTHDSbDCb5C8Z79xGFwFAQ/viewform?usp=header" target="_blank" rel="noopener noreferrer" className={styles.rect}>
          観覧参加登録はこちら！
        </a>
      </div>
    </div>
  );
};

Registration.propTypes = {
  className: PropTypes.string,
};

export default Registration;
