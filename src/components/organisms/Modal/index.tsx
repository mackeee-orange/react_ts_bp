import React, { FC, useRef } from "react";
import classNames from "classnames";
import ReactDOM from "react-dom";
import styles from "./style.module.scss";

type Props = {
  onClickClose?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  isOpen: boolean;
  containerRef?: React.MutableRefObject<Element | null>;
  className?: string;
};

const Modal: FC<Props> = ({ children, onClickClose, isOpen, containerRef, className }) =>
  isOpen
    ? ReactDOM.createPortal(
        <div className={styles.modalArea}>
          <div className={styles.modalOverlay} onClick={onClickClose} />
          <div className={classNames(styles.modalContent, className)}>{children}</div>
        </div>,
        containerRef?.current || document.body
      )
    : null;

export const InnerModal: FC<Props> = ({ children, ...props }) => {
  const domRef = useRef<Element>(null);
  return (
    <div>
      <Modal {...props} containerRef={domRef}>
        {children}
      </Modal>
    </div>
  );
};

export default Modal;
