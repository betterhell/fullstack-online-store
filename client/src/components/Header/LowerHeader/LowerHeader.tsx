import React from "react";
import styles from "./LowerHeader.module.scss";

const LowerHeader = () => {
  return (
    <div className={styles.lowerHeaderWrapper}>
      <nav className={styles.lowerHeader__content}>
        <ul className={styles.lowerHeader__category}>
          <li>
            <a href="/actions">Акции</a>
          </li>
          <li>
            <a href="/materials">Строительные материалы</a>
          </li>
          <li>
            <a href="/ceramics">Керамическая плитка</a>
          </li>
          <li>
            <a href="/paints">Краски</a>
          </li>
          <li>
            <a href="/plumbings">Сантехника</a>
          </li>
          <li>
            <a href="/floors">Напольные покрытия</a>
          </li>
          <li>
            <a href="/instruments">Инструменты</a>
          </li>
          <li>
            <a href="/wallpapers">Обои</a>
          </li>
          <li>
            <a href="/windows">Окна</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LowerHeader;
