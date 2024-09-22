import { useEffect, useState } from "react";
import { Link } from "umi";
import styles from "./index.less";
import { PlusOutlined, BellFilled, SearchOutlined } from "@ant-design/icons";
import { Button, Avatar, Input } from "antd";

const Header = () => {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.value, "change");
  };

  const onPressEnter = (e: any) => {
    console.log(e.target.value, "pressEnter");
  };

  return (
    <div className={styles["header"]}>
      <div className={styles["header-banner"]}>
        <div className={styles["header-banner-left"]}>
          <Link to="/">HighSpot</Link>
        </div>
        <div className={styles["header-banner-center"]}>
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="input search text"
            allowClear
            onChange={onChange}
            onPressEnter={onPressEnter}
          />
        </div>
        <div className={styles["header-banner-right"]}>
          <div>
            <Button type="primary" icon={<PlusOutlined />}>
              New
            </Button>
          </div>
          <div>
            <Button type="primary" icon={<BellFilled />} />
          </div>
          <div>
            <Avatar
              style={{ backgroundColor: "#ccc", verticalAlign: "middle" }}
            >
              <span style={{fontWeight:'bolder'}}>HS</span>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
