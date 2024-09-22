import { useEffect, useState } from "react";
import styles from "./index.less";

const UpvotesPage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className={styles["upvotesPage"]}>
      <div className={styles["upvotesPage-content"]}>
        <div>Welcome!</div>
        <div>This is the Upvotes Page.</div>
      </div>
    </div>
  );
};

export default UpvotesPage;
