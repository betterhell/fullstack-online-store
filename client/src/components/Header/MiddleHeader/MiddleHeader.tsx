import React, { useState } from "react";

import styles from "./MiddleHeader.module.scss";

import { ReactComponent as Logo } from "../../../assets/logo/Logo.svg";
import { ReactComponent as MenuIcon } from "../../../assets/icons/menuIcon24px.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/userIcon24px.svg";
import { ReactComponent as OrdersIcon } from "../../../assets/icons/orderIcon24px.svg";
import { ReactComponent as BasketIcon } from "../../../assets/icons/basketIcon24px.svg";
import { ReactComponent as CloseMenu } from "../../../assets/icons/closeIcon17px.svg";
import { ReactComponent as SearchIcon } from "../../../assets/icons/searchIcon.svg";

import MobileMenu from "../../MobileMenu/MobileMenu";
import SignIn from "../../SignIn/SignIn";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";

const MiddleHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleMobileMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const toggleModal = () => {
    if (isOpenModal) {
      setIsOpenModal(false);
    } else {
      setIsOpenModal(true);
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
          onClick={() => toggleMobileMenu()}
          icon={!isOpen ? <MenuIcon /> : <CloseMenu />}
          children="Каталог"
          theme="primary"
        />
      </div>

      {isOpen && <MobileMenu />}

      <div className={styles.searchInput}>
        <Input type="text" placeholder="Поиск" icon={<SearchIcon />} />
      </div>

      <div className={styles.buttonBar}>
        <button onClick={toggleModal} className={styles.profileBtn}>
          <ProfileIcon />
          <p>Профиль</p>
        </button>

        {isOpenModal && <SignIn onOpen={toggleModal} />}

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
