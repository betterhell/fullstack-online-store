import React from "react";
import styles from "./UpperHeader.module.scss";
import Location from "../../../UI/Location/Location";

const UpperHeader = () => {
  return (
    <div className={styles.upperHeaderWrapper}>
      <Location />
      <nav>
        <ul className={styles.upperHeader__brands}>
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
        </ul>
      </nav>
    </div>
  );
};

export default UpperHeader;
