import React, { useState } from "react";
import styles from "./SignIn.module.scss";

import Input from "../../UI/Input/Input";
import Modal from "../../UI/Modal/Modal";

interface signInProps {
  onOpen: () => void;
}

const SignIn: React.FC<signInProps> = ({ onOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Modal onClose={onOpen}>
      <h1 className={styles.modal_header}>Вход</h1>
      <form>
        <div className={styles.modal__input}>
          <label htmlFor="">E-mail</label>
          <Input
            value={email}
            onChange={onChangeEmail}
            type="text"
            placeholder="youmail@mail.com"
          />
        </div>
        <div className={styles.modal__input}>
          <label htmlFor="">Пароль</label>
          <Input
            value={password}
            onChange={onChangePassword}
            type="password"
            placeholder="****************"
          />
        </div>
        <button className={styles.modal_forget__password}>
          Забыли пароль?
        </button>

        <div className={styles.modal__controls}>
          <button className={styles.modal__controls_primary}>Войти</button>
        </div>
      </form>

      <button className={styles.modal__controls_secondary}>
        Создать учётную запись
      </button>
    </Modal>
  );
};

export default SignIn;
