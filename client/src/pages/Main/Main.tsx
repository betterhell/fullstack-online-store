import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.mainWrapper}>
      <Header />
    </div>
  );
};

export default Main;
