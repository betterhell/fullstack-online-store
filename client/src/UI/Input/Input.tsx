import React from "react";
import styles from "./_Input.module.scss";

interface inputProps {
  type: "text" | "password";
  placeholder: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<inputProps> = ({
  type,
  placeholder,
  icon,
  value,
  onChange,
}) => {
  return (
    <div className={styles.searchContainer}>
      <input
        value={value}
        onChange={onChange}
        className={styles.searchInput}
        placeholder={placeholder}
        type={type}
      />
      {icon && <button className={styles.searchButton}>{icon}</button>}
    </div>
  );
};

export default Input;
