import React, { useState } from "react";
import styles from "../SignIn/SignIn.module.scss";

import Modal from "../../UI/Modal/Modal";
import Input from "../../UI/Input/Input";

interface signUpProps {
  onOpen?: () => void;
}

const SignUp: React.FC<signUpProps> = ({ onOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [role, setRole] = useState("buyer");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(e.target.value);
  };

  const roleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  };

  return (
    <Modal onClose={onOpen}>
      <form>
        <h1 className={styles.modal_header}>Регистрация</h1>
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
          <label htmlFor="">Новый пароль</label>
          <Input
            value={password}
            onChange={onChangePassword}
            type="password"
            placeholder="****************"
          />
        </div>
        <div className={styles.modal__input}>
          <label htmlFor="">Подтверждение пароля</label>
          <Input
            value={checkPassword}
            onChange={onChangeCheckPassword}
            type="password"
            placeholder="****************"
          />
        </div>

        <div className={styles.modal__input_role}>
          <input
            value="buyer"
            checked={role === "buyer"}
            onChange={roleToggle}
            type="radio"
          />{" "}
          Я покупатель
          <input
            type="radio"
            value="ADMIN"
            checked={role === "ADMIN"}
            onChange={roleToggle}
          />{" "}
          Я продавец
        </div>

        <div className={styles.modal__controls}>
          <button className={styles.modal__controls_primary}>
            Зарегестрироваться
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default SignUp;
