import React from "react";
import styles from "./Header.module.scss";

import UpperHeader from "./UpperHeader/UpperHeader";
import MiddleHeader from "./MiddleHeader/MiddleHeader";
import LowerHeader from "./LowerHeader/LowerHeader";

const Header = () => {
  return (
    <div className={styles.header}>
      <UpperHeader />
      <MiddleHeader />
      <LowerHeader />
    </div>
  );
};

export default Header;
