import React from "react";
import styles from "./_Input.module.scss";
// @ts-ignore
import { ReactComponent as SearchIcon } from "../../assets/icons/searchIcon.svg";

const Input = () => {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.searchInput} placeholder="Поиск" type="text" />
      <button className={styles.searchButton}>{<SearchIcon />}</button>
    </div>
  );
};

export default Input;
