import { useEffect, useState } from "react";
import styles from "./index.less";

const ContentsPage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className={styles["contentsPage"]}>
      <div className={styles["contentsPage-content"]}>
        <div>Welcome!</div>
        <div>This is the Contents Page.</div>
      </div>
    </div>
  );
};

export default ContentsPage;
