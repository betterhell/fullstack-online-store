import React from "react";
import styles from "./SignIn.module.scss";

import Input from "../../UI/Input/Input";
import Modal from "../../UI/Modal/Modal";

interface signInProps {
  onOpen: () => void;
}

const SignIn: React.FC<signInProps> = ({ onOpen }) => {
  return (
    <Modal onClose={onOpen}>
      <h1 className={styles.modal_header}>Вход</h1>
      <form action="">
        <div className={styles.modal__input}>
          <label htmlFor="">E-mail</label>
          <Input type="text" placeholder="youmail@mail.com" />
        </div>
        <div className={styles.modal__input}>
          <label htmlFor="">Пароль</label>
          <Input type="password" placeholder="****************" />
        </div>
        <button className={styles.modal_forget__password}>
          Забыли пароль?
        </button>
        <div className={styles.modal__controls}>
          <button className={styles.modal__controls_primary}>Войти</button>
          <button className={styles.modal__controls_secondary}>
            Создать учётную запись
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default SignIn;
