import React from "react";
import styles from "./Authorization.module.scss";

const Authorization = () => {
  return (
    <div className={styles.authWrapper}>
      <div className={styles.authBlock}>
        <div className={styles.authContent}>
          <h1>Вход</h1>
          <form>
            <div className={styles.email}>
              <label htmlFor="">E-mail</label>
              <input placeholder="youmail@mail.com" type="email" />
            </div>
            <div className={styles.password}>
              <label htmlFor="">Password</label>
              <input placeholder="****************" type="password" />
            </div>
            <a href="/forgotPassword" className={styles.forgotPassword_button}>
              Забыли пароль?
            </a>
            <button className={styles.login_button}>Войти</button>
          </form>
          <button className={styles.createUser_button}>
            Создать учетную запись
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
