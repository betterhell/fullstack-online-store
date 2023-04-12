import React from "react";
import styles from "./Modal.module.scss";

interface modalProps {
  children: React.ReactNode;
  onClose?: React.MouseEventHandler;
}

const Modal: React.FC<modalProps> = ({ children, onClose }) => {
  return (
    <div className={styles.modalWrapper}>
      <button onClick={onClose} className={styles.modalWrapper__closeButton}>
        <div className={styles.modalWrapper__closeButton_first}></div>
        <div className={styles.modalWrapper__closeButton_second}></div>
      </button>
      <div className={styles.modal}>
        <div className={styles.modal__content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
