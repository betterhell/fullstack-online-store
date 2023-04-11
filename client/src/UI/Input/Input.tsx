import React from "react";
import styles from "./_Input.module.scss";

interface inputProps {
  type: "text" | "password";
  placeholder: string;
  icon?: React.ReactNode;
}

const Input: React.FC<inputProps> = ({ type, placeholder, icon }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        placeholder={placeholder}
        type={type}
      />
      {icon && <button className={styles.searchButton}>{icon}</button>}
    </div>
  );
};

export default Input;
