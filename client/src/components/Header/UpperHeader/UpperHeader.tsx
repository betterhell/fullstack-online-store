import React from "react";
// @ts-ignore
import { ReactComponent as LocationIcon } from "../../../assets/icons/locationIcon.svg";
import styles from "./_UpperHeader.module.scss";

const UpperHeader = () => {
  return (
    <div className={styles.upperHeaderWrapper}>
      <div className={styles.upperHeader__location}>
        <button>
          <LocationIcon /> Москва
        </button>
      </div>
      <div>
        <ol className={styles.upperHeader__brands}>
          <li className={styles.brands}>
            <a href="/brands">Бренды</a>
          </li>
          <li className={styles.delivery}>
            <a href="/delivery">Доставка</a>
          </li>
          <li className={styles.refund}>
            <a href="/refund">Возврат</a>
          </li>
          <li className={styles.docs}>
            <a href="/docs">Документация</a>
          </li>
          <li className={styles.contacts}>
            <a href="/contacts">Контакты</a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default UpperHeader;
