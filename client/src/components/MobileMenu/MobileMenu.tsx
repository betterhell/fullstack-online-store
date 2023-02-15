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
      <div></div>
      <div></div>
    </div>
  );
};

export default MobileMenu;
