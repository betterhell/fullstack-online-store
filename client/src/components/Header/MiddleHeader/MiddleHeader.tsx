import React from "react";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import styles from "./MiddleHeader.module.scss";

import { ReactComponent as Logo } from "../../../assets/logo/Logo.svg";
import { ReactComponent as MenuIcon } from "../../../assets/icons/menuIcon24px.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/userIcon24px.svg";
import { ReactComponent as OrdersIcon } from "../../../assets/icons/orderIcon24px.svg";
import { ReactComponent as BasketIcon } from "../../../assets/icons/basketIcon24px.svg";

const MiddleHeader = () => {
  return (
    <div className={styles.middleHeader}>
      <div className={styles.logo}>
        <a href="/">
          <Logo />
        </a>
      </div>

      <div className={styles.menu}>
        <Button icon={<MenuIcon />} children="Каталог" theme="primary" />
      </div>

      <div className={styles.searchInput}>
        <Input />
      </div>

      <div className={styles.buttonBar}>
        <button className={styles.profileBtn}>
          <ProfileIcon />
          <p>Профиль</p>
        </button>
        <button className={styles.ordersBtn}>
          <OrdersIcon />
          <p>Заказы</p>
        </button>
        <button className={styles.basketBtn}>
          <BasketIcon />
          <p>Корзина</p>
        </button>
      </div>
    </div>
  );
};

export default MiddleHeader;
