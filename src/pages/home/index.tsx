import { useEffect, useState } from "react";
import styles from "./index.less";

const HomePage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className={styles["homePage"]}>
      <div className={styles["homePage-content"]}>
        <div>Welcome!</div>
        <div>This is the Home Page.</div>
      </div>
    </div>
  );
};

export default HomePage;
