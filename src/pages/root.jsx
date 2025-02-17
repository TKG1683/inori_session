import Home from "../home/home";
import styles from "./root.module.css";

const Root = () => {
  return (
    <div className={styles.root}>
      <Home />
    </div>
  );
};

export default Root;