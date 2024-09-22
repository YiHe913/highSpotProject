import { Link, Outlet } from "umi";
import { Divider } from "antd";
import styles from "./index.less";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
export default function Layout() {
  return (
    <div>
      <Header />
      <div className={styles["navs"]}>
        <div className={styles["navs-left"]}>
          <Banner />
        </div>
        <div className={styles["navs-content"]}>
          <Outlet />
          <Divider />
          <Footer />
        </div>
      </div>
    </div>
  );
}
