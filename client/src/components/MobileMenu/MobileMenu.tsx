import React from "react";
import styles from "./MobileMenu.module.scss";

import { ReactComponent as ProfileIcon } from "../../assets/icons/userIcon24px.svg";
import { ReactComponent as OrdersIcon } from "../../assets/icons/orderIcon24px.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menuIcon24px.svg";
import Location from "../../UI/Location/Location";

const MobileMenu = () => {
  return (
    <div className={styles.mobileMenu}>
      <div className={styles.mobileMenu__controls}>
        <div className={styles.mobileMenu__btns}>
          <button className={styles.menu}>
            <MenuIcon />
            <p>Каталог</p>
          </button>
          <button className={styles.profileBtn}>
            <ProfileIcon />
            <p>Профиль</p>
          </button>
          <button className={styles.ordersBtn}>
            <OrdersIcon />
            <p>Заказы</p>
          </button>
        </div>
        <div className={styles.mobileMenu__changeCity}>
          <Location />
        </div>
      </div>

      <div className={styles.mobileMenu__content}>
        <ul className={styles.mobileMenu__category}>
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
      </div>

      <div className={styles.mobileMenu__info}>
        <ul className={styles.mobileMenu__content}>
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
      </div>
    </div>
  );
};

export default MobileMenu;
