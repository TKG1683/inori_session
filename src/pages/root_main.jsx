import Home from "../main/main";
import Footer from "./footer";
import styles from "./root_main.module.css";
import "./root_common.module.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Root = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  return (
    <div>
      {/* loading animation */}
      {!isAnimationComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1, duration: 1 }} // fade out after 3 seconds
          onAnimationComplete={() => setIsAnimationComplete(true)}
          className="loading-screen"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(173, 216, 230, 1)",
            zIndex: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // overflow: "hidden",
          }}
        >
          {/* アイコンのアニメーション */}
          <motion.img
            src={"/logo512.png"}
            alt="Icon"
            initial={{ y: "-100%", opacity: 1 }}
            animate={{
              y: "0%",
              scale: [1, 0.7, 5],
              opacity: [1, 1, 0],
            }}
            transition={{
              y: { type: "spring", stiffness: 100, damping: 10, duration: 1 },
              scale: { duration: 1, times: [0, 0.7, 1] },
              opacity: { duration: 1, times: [0, 0.7, 1] },
            }}
            style={{
              width: "150px",
              height: "150px",
            }}
          />
        </motion.div>
      )}

      {/* メインページ */}
      {isAnimationComplete && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{ duration: 1.5 }}
        >
          <div className={styles.root}>
            <Home />
            <Footer />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Root;