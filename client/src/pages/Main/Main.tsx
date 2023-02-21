import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Main.module.scss";
import Slider from "../../UI/Slider/Slider";

const Main = () => {
  return (
    <div className={styles.mainWrapper}>
      <Header />
      <Slider />
    </div>
  );
};

export default Main;
