import { useState } from "react";

export type Modal = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const useModal = (): Modal => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  const close = (): void => {
    setIsOpen(false);
  };

  return {
    isOpen,
    toggle,
    close
  };
};

export default useModal;

export type MultipleModal = {
  activeModal?: string;
  open: (index: string) => void;
  close: () => void;
};

export const useMultipleModal = () => {
  const [activeModal, setActiveModal] = useState<string>();
  const open = (id: string): void => {
    setActiveModal(id);
  };
  const close = (): void => {
    setActiveModal(undefined);
  };
  return {
    activeModal,
    open,
    close
  };
};
