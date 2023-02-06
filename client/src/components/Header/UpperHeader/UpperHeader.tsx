import React from "react";
// @ts-ignore
import { ReactComponent as LocationIcon } from "../../../assets/icons/locationIcon.svg";
import styles from "./_UpperHeader.module.scss";
const UpperHeader = () => {
  return (
    <div className={styles.upperHeaderWrapper}>
      <div>
        <button>
          <LocationIcon /> Москва
        </button>
      </div>
      <div>
        <ol>
          <li>Бренды</li>
          <li>Доставка</li>
          <li>Возврат</li>
          <li>Документация</li>
          <li>Контакты</li>
        </ol>
      </div>
    </div>
  );
};

export default UpperHeader;
