import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoFooter } from "../../assets/logo/LogoFooter.svg";
import { ReactComponent as MailIcon } from "../../assets/footerIcons/mailIconfooter24px.svg";
import { ReactComponent as LocationIcon } from "../../assets/footerIcons/locationIconfooter.svg";
import visaBadge from "../../assets/banks/Visa.png";
import mastercardBadge from "../../assets/banks/Mastercard.png";
import maestroBadge from "../../assets/banks/Maestro.png";
import mirBadge from "../../assets/banks/Mir.png";
import classes from "./Footer.module.scss";
import { ReactComponent } from "*.svg";

const Footer = () => {
  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footer__content}>
        <div className={classes.footer__content_info}>
          <NavLink to="/">
            <LogoFooter />
          </NavLink>

          <div className={classes.footer__content_mail}>
            <MailIcon />
            <p>info@stroykastore.ru</p>
          </div>

          <div className={classes.footer__content_location}>
            <LocationIcon />
            <p>Москва, ул. Камушкина 10</p>
          </div>
        </div>

        <nav className={classes.footer__navigations}>
          <ul className={classes.footer__navigations_list}>
            <div className={classes.footer__navigations_segment}>
              <li className={classes.footer__navigations_list_item}>
                <NavLink to="/profile">Личный кабинет</NavLink>
              </li>
              <li className={classes.footer__navigations_list_item}>
                <NavLink style={{ color: "#E8E9EA" }} to="/orderlist">
                  Заказы
                </NavLink>
              </li>
              <li className={classes.footer__navigations_list_item}>
                <NavLink to="/favorite">Избранное</NavLink>
              </li>
              <li className={classes.footer__navigations_list_item}>
                <NavLink to="/cart">Корзина</NavLink>
              </li>
            </div>

            <div className={classes.footer__navigations_segment}>
              <li className={classes.footer__navigations_list_item}>
                <NavLink to="/profile">Личный кабинет</NavLink>
              </li>
              <li className={classes.footer__navigations_list_item}>
                <NavLink to="/catalogue">Каталог</NavLink>
              </li>
              <li className={classes.footer__navigations_list_item}>
                <NavLink to="/actions">Акции</NavLink>
              </li>
              <li className={classes.footer__navigations_list_item}>
                <NavLink to="/brands">Бренды</NavLink>
              </li>
              <li className={classes.footer__navigations_list_item}>
                <NavLink to="/contacts">Контакты</NavLink>
              </li>
            </div>

            <div className={classes.footer__navigations_segment}>
              <li className={classes.footer__navigations_list_item}>
                <NavLink to="/forsellers">Стать продавцом</NavLink>
              </li>
              <li className={classes.footer__navigations_list_item}>
                <NavLink to="/delivery">Доставка</NavLink>
              </li>
              <li className={classes.footer__navigations_list_item}>
                <NavLink to="/refund">Возврат</NavLink>
              </li>
              <li className={classes.footer__navigations_list_item}>
                <NavLink to="/docs">Документация</NavLink>
              </li>
            </div>
          </ul>
        </nav>
      </div>
      <div className={classes.footer__info}>
        <p>© СтройкаСтор</p>
        <div>
          <img src={visaBadge} alt="Visa" />
          <img src={mastercardBadge} alt="Mastercard" />
          <img src={maestroBadge} alt="Maestro" />
          <img src={mirBadge} alt="Mir" />
        </div>
        <p>made by betterhell</p>
      </div>
    </div>
  );
};

export default Footer;
