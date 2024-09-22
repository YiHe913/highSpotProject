import { useEffect, useState } from "react";
import styles from "./index.less";

const FavoritesPage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className={styles["favoritesPage"]}>
      <div className={styles["favoritesPage-content"]}>
        <div>Welcome!</div>
        <div>This is the Favorites Page.</div>
      </div>
    </div>
  );
};

export default FavoritesPage;
