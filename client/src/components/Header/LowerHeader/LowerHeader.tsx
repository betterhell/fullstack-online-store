import React from "react";
import styles from "./_LowerHeader.module.scss";

const LowerHeader = () => {
  return (
    <div className={styles.lowerHeaderWrapper}>
      <div className={styles.lowerHeader__content}>
        <ul className={styles.lowerHeader__category}>
          <li>
            <a href="">Акции</a>
          </li>
          <li>
            <a href="">Строительные материалы</a>
          </li>
          <li>
            <a href="">Керамическая плитка</a>
          </li>
          <li>
            <a href="">Краски</a>
          </li>
          <li>
            <a href="">Сантехника</a>
          </li>
          <li>
            <a href="">Напольные покрытия</a>
          </li>
          <li>
            <a href="">Инструменты</a>
          </li>
          <li>
            <a href="">Обои</a>
          </li>
          <li>
            <a href="">Окна</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LowerHeader;
