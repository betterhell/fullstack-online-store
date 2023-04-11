import React from "react";
import styles from "./_Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactElement;
  onClick?: () => void;
  theme: string | boolean;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isDisabled,
  icon,
  onClick,
  theme,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={theme === "primary" ? styles.btnPrimary : styles.btnSecondary}
    >
      {icon}
      <p>{children}</p>
    </button>
  );
};

export default Button;
