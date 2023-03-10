import React, { useState } from "react";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import styles from "./MiddleHeader.module.scss";

import { ReactComponent as Logo } from "../../../assets/logo/Logo.svg";
import { ReactComponent as MenuIcon } from "../../../assets/icons/menuIcon24px.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/userIcon24px.svg";
import { ReactComponent as OrdersIcon } from "../../../assets/icons/orderIcon24px.svg";
import { ReactComponent as BasketIcon } from "../../../assets/icons/basketIcon24px.svg";
import { ReactComponent as CloseMenu } from "../../../assets/icons/closeIcon17px.svg";
import MobileMenu from "../../MobileMenu/MobileMenu";

const MiddleHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

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

      <div className={styles.mobileMenu}>
        <Button
          onClick={() => toggleMenu()}
          icon={!isOpen ? <MenuIcon /> : <CloseMenu />}
          children="Каталог"
          theme="primary"
        />
      </div>

      {isOpen && <MobileMenu />}

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
