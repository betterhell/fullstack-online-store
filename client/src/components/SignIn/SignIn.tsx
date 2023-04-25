import React, { useState } from "react";
import styles from "./SignIn.module.scss";

import Input from "../../UI/Input/Input";
import Modal from "../../UI/Modal/Modal";
import SignUp from "../SignUp/SignUp";
import { login } from "./login";
import { useNavigate } from "react-router-dom";

interface signInProps {
  onOpen?: () => void;
}

const SignIn: React.FC<signInProps> = ({ onOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const signUp = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = () => {
    login(email, password);
    navigate("/");
  };

  return (
    <>
      {isLogin ? (
        <>
          <Modal onClose={onOpen}>
            <form onSubmit={handleLogin}>
              <h1 className={styles.modal_header}>Вход</h1>
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
                <button className={styles.modal__controls_primary}>
                  Войти
                </button>
              </div>
            </form>

            <button
              onClick={signUp}
              className={styles.modal__controls_secondary}
            >
              Создать учётную запись
            </button>
          </Modal>
        </>
      ) : (
        <SignUp onOpen={onOpen} />
      )}
    </>
  );
};

export default SignIn;
