import React from "react";
import classes from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.errorPage}>
      <div className={classes.errorPage_content}>
        <h1>404</h1>
        <h3>Страница не найдена</h3>
        <h5>
          Неправильно набран адрес или такая страница больше не существует
        </h5>
        <button onClick={() => navigate("/")}>Перейти на главную</button>
      </div>
    </div>
  );
};

export default NotFound;
