import React from "react";
import styles from "./Location.module.scss";

import { ReactComponent as LocationIcon } from "../../assets/icons/locationIcon.svg";

const Location = () => {
  return (
    <div className={styles.location}>
      <button>
        <LocationIcon /> Москва
      </button>
    </div>
  );
};

export default Location;
